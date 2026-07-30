import { Search } from "lucide-react";
import { useCommandPalette } from "@/providers/CommandPaletteProvider";
import { useT } from "@/providers/LanguageProvider";

/** Visible affordance for ⌘K, since a bare shortcut is undiscoverable. */
export function CommandTrigger() {
  const { toggle } = useCommandPalette();
  const t = useT();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t("nav.search")}
      className="group inline-flex items-center gap-2 rounded-full border border-line bg-paper-raised
                 px-3 py-1.5 text-xs text-ink-faint transition-colors hover:border-line-strong hover:text-ink-muted"
    >
      <Search size={13} />
      <kbd className="hidden font-sans text-[0.7rem] tracking-wide sm:inline">
        ⌘K
      </kbd>
    </button>
  );
}
