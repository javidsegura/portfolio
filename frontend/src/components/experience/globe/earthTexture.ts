/**
 * Builds the Earth's surface texture at runtime.
 *
 * Country outlines come from Natural Earth (world-atlas, 110m) and are painted
 * onto a canvas in an equirectangular projection, which is exactly what a
 * sphere's default UV mapping expects. Drawing rather than shipping an image
 * keeps the map in the site's own palette instead of clashing photographic
 * blues, and avoids a binary asset on the critical path.
 */

import { feature } from "topojson-client";
import type { Topology } from "topojson-specification";
import type { Feature, GeoJsonProperties, Geometry } from "geojson";
import { CanvasTexture, SRGBColorSpace } from "three";
import worldData from "world-atlas/countries-110m.json";

/* 2048×1024 is ample for a globe this size on screen and keeps the texture
   around 8MB of GPU memory rather than 32MB. */
const WIDTH = 2048;
const HEIGHT = 1024;

/* Water reads cool, land reads warm paper. Enough separation for coastlines to
   be legible at a glance without turning the globe into a photographic blue
   that would fight the rest of the palette. */
const OCEAN = "#aec4d4";
const LAND = "#fdfcf9";
const BORDER = "#a49b8d";
const GRATICULE = "#9fb6c8";

/** Equirectangular: longitude maps straight to x, latitude straight to y. */
function project(lon: number, lat: number): [number, number] {
  return [((lon + 180) / 360) * WIDTH, ((90 - lat) / 180) * HEIGHT];
}

function drawRing(context: CanvasRenderingContext2D, ring: number[][]): void {
  ring.forEach((coordinate, index) => {
    const [x, y] = project(coordinate[0]!, coordinate[1]!);
    if (index === 0) context.moveTo(x, y);
    else context.lineTo(x, y);
  });
  context.closePath();
}

function drawGraticule(context: CanvasRenderingContext2D): void {
  context.strokeStyle = GRATICULE;
  context.lineWidth = 1;
  for (let lon = -180; lon <= 180; lon += 30) {
    const [x] = project(lon, 0);
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, HEIGHT);
    context.stroke();
  }
  for (let lat = -60; lat <= 60; lat += 30) {
    const [, y] = project(0, lat);
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(WIDTH, y);
    context.stroke();
  }
}

let cached: CanvasTexture | null = null;

/**
 * Render the map once and reuse it.
 *
 * Returns:
 *   A three.js texture ready to use as a sphere's colour map.
 */
export function getEarthTexture(): CanvasTexture {
  if (cached) return cached;

  const canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const context = canvas.getContext("2d")!;

  context.fillStyle = OCEAN;
  context.fillRect(0, 0, WIDTH, HEIGHT);
  drawGraticule(context);

  const topology = worldData as unknown as Topology;
  const countries = feature(
    topology,
    topology.objects.countries!,
  ) as unknown as {
    features: Feature<Geometry, GeoJsonProperties>[];
  };

  context.fillStyle = LAND;
  context.strokeStyle = BORDER;
  context.lineWidth = 1.2;
  context.lineJoin = "round";

  for (const country of countries.features) {
    const geometry = country.geometry;
    const polygons =
      geometry.type === "Polygon"
        ? [geometry.coordinates]
        : geometry.type === "MultiPolygon"
          ? geometry.coordinates
          : [];

    for (const polygon of polygons) {
      context.beginPath();
      for (const ring of polygon) drawRing(context, ring as number[][]);
      context.fill();
      context.stroke();
    }
  }

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = 4;
  cached = texture;
  return texture;
}
