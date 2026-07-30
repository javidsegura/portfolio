/** Geographic helpers shared by the globe scene and its fallback. */

import { Vector3 } from "three";

/**
 * Convert latitude/longitude to a point on a sphere.
 *
 * Args:
 *   lat: Latitude in degrees.
 *   lon: Longitude in degrees.
 *   radius: Sphere radius.
 *
 * Returns:
 *   Position vector in the globe's local space.
 */
export function latLonToVec3(lat: number, lon: number, radius = 1): Vector3 {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;
  return new Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

/**
 * Great-circle arc between two surface points, bowed outward.
 *
 * Args:
 *   from: Start position on the sphere.
 *   to: End position on the sphere.
 *   segments: Number of interpolated points.
 *   lift: Peak height above the surface, as a fraction of the radius.
 *
 * Returns:
 *   Points describing the arc, for a line geometry.
 */
export function arcPoints(
  from: Vector3,
  to: Vector3,
  segments = 48,
  lift = 0.28,
): Vector3[] {
  const points: Vector3[] = [];
  for (let index = 0; index <= segments; index += 1) {
    const t = index / segments;
    const point = from.clone().lerp(to, t).normalize();
    // Sine bow: zero at both ends, peak in the middle.
    point.multiplyScalar(1 + Math.sin(t * Math.PI) * lift);
    points.push(point);
  }
  return points;
}

/** Y-rotation that brings a point round to face the camera at +Z. */
export function rotationToFace(position: Vector3): number {
  return -Math.atan2(position.x, position.z);
}
