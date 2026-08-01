/**
 * Visual pane for simple-tier projects: video, still image, or the empty
 * state, in that order of precedence. Same layout skeleton as the full
 * treatment; a CRUD app does not get a WebGL scene.
 */

import { ImageIcon } from "lucide-react";
import { getVideoEmbedUrl } from "@/lib/videoUtils";

interface MediaPaneProps {
  videoURL?: string;
  imageURL?: string;
  title: string;
}

export function MediaPane({ videoURL, imageURL, title }: MediaPaneProps) {
  const embedUrl = videoURL ? getVideoEmbedUrl(videoURL) : null;

  if (embedUrl) {
    const isDirect = /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(embedUrl);
    return (
      <div className="h-full w-full bg-ink">
        {isDirect ? (
          <video
            src={embedUrl}
            controls
            className="h-full w-full object-cover"
            title={`${title} video`}
          />
        ) : (
          <iframe
            src={embedUrl}
            className="h-full w-full"
            allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
            title={`${title} video`}
          />
        )}
      </div>
    );
  }

  if (imageURL) {
    return (
      <img
        src={imageURL}
        alt={title}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    );
  }

  return (
    <div className="grid-plane-fine flex h-full w-full flex-col items-center justify-center gap-3 opacity-90">
      <ImageIcon size={22} className="text-ink-faint" />
      <p className="max-w-[16rem] text-center text-xs text-ink-faint">
        No image available.
      </p>
    </div>
  );
}
