/**
 * Static visual pane. Serves three roles: the no-WebGL fallback, the mobile
 * rendering, and the Suspense placeholder while a scene chunk loads. Because
 * it is plain DOM it also survives prerendering and print.
 */

import { cn } from "@/lib/utils";

interface StackFallbackProps {
  layers: string[];
  activeIndex: number;
  caption?: string;
}

export function StackFallback({
  layers,
  activeIndex,
  caption,
}: StackFallbackProps) {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-2 p-8">
      {layers.map((layer, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={layer}
            className={cn(
              "flex items-center justify-between rounded-xl border px-4 py-3",
              "transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isActive
                ? "translate-x-2 border-amber/45 bg-amber-soft"
                : "border-line bg-paper-sunken",
            )}
          >
            <span
              className={cn(
                "text-sm",
                isActive ? "font-medium text-ink" : "text-ink-muted",
              )}
            >
              {layer}
            </span>
            {isActive && (
              <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden />
            )}
          </div>
        );
      })}
      {caption && (
        <p className="mt-4 text-center text-xs text-ink-faint">{caption}</p>
      )}
    </div>
  );
}
