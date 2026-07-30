import { useEffect, useState } from "react";

/**
 * Reports which of the given section ids is currently the reading position.
 *
 * Drives the sticky visual pane on project pages and the thesis essay: the
 * left column scrolls, this returns the active id, the pane switches state.
 *
 * Args:
 *   ids: Section element ids in document order.
 *   offset: Distance from the viewport top treated as the reading line.
 *
 * Returns:
 *   The id of the active section, or the first id before any has been seen.
 */
export function useScrollSpy(ids: string[], offset = 0.35): string {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    if (ids.length === 0) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      {
        rootMargin: `-${Math.round(offset * 100)}% 0px -${Math.round(
          (1 - offset) * 100,
        )}% 0px`,
        threshold: 0,
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids, offset]);

  return activeId;
}
