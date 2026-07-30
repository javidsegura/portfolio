/**
 * ⌘K palette: navigation, full-text search and standing actions.
 *
 * Mounted once at the layout level so it is available on every route.
 */

import { useMemo, useState } from "react";
import { Command } from "cmdk";
import { useNavigate } from "react-router-dom";
import {
  Check,
  Copy,
  Download,
  FileText,
  FlaskConical,
  Github,
  Languages,
  Linkedin,
  Search,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SITE, EXTERNAL_LINKS } from "@/config";
import { useLanguage } from "@/providers/LanguageProvider";
import { searchDocs, type SearchKind } from "./searchIndex";

const KIND_ICON: Record<SearchKind, LucideIcon> = {
  page: FileText,
  project: FlaskConical,
};

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const navigate = useNavigate();
  const { t, localePath, alternatePath } = useLanguage();
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  const results = useMemo(() => searchDocs(query), [query]);

  const grouped = useMemo(
    () => ({
      page: results.filter((doc) => doc.kind === "page"),
      project: results.filter((doc) => doc.kind === "project"),
    }),
    [results],
  );

  const close = () => {
    onOpenChange(false);
    setQuery("");
  };

  const go = (path: string) => {
    navigate(localePath(path));
    close();
  };

  const openExternal = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    close();
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(SITE.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
      label={t("cmd.placeholder")}
      className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[12vh]"
    >
      <div
        className="fixed inset-0 bg-ink/25 backdrop-blur-[2px]"
        onClick={close}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-paper-raised shadow-[var(--shadow-iso)]">
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search size={16} className="shrink-0 text-ink-faint" />
          <Command.Input
            value={query}
            onValueChange={setQuery}
            placeholder={t("cmd.placeholder")}
            className="w-full bg-transparent py-4 text-sm text-ink outline-none placeholder:text-ink-faint"
          />
        </div>

        <Command.List className="max-h-[52vh] overflow-y-auto p-2">
          <Command.Empty className="py-10 text-center text-sm text-ink-faint">
            {t("cmd.empty")}
          </Command.Empty>

          {(
            [
              ["project", t("cmd.projects")],
              ["page", t("cmd.pages")],
            ] as const
          ).map(([kind, heading]) =>
            grouped[kind].length > 0 ? (
              <Command.Group
                key={kind}
                heading={heading}
                className="mb-1 [&_[cmdk-group-heading]]:type-eyebrow [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-ink-faint"
              >
                {grouped[kind].map((doc) => {
                  const Icon = KIND_ICON[doc.kind];
                  return (
                    <Command.Item
                      key={doc.id}
                      value={`${doc.title} ${doc.subtitle}`}
                      onSelect={() => go(doc.path)}
                      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ink
                                 data-[selected=true]:bg-paper-sunken"
                    >
                      <Icon size={15} className="shrink-0 text-ink-faint" />
                      <span className="truncate">{doc.title}</span>
                      {doc.subtitle && (
                        <span className="ml-auto truncate pl-4 text-xs text-ink-faint">
                          {doc.subtitle}
                        </span>
                      )}
                    </Command.Item>
                  );
                })}
              </Command.Group>
            ) : null,
          )}

          <Command.Group
            heading={t("cmd.actions")}
            className="[&_[cmdk-group-heading]]:type-eyebrow [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-ink-faint"
          >
            <Command.Item
              onSelect={copyEmail}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ink data-[selected=true]:bg-paper-sunken"
            >
              {copied ? (
                <Check size={15} className="text-amber" />
              ) : (
                <Copy size={15} className="text-ink-faint" />
              )}
              {copied ? t("cmd.copied") : t("cmd.copyEmail")}
            </Command.Item>

            <Command.Item
              onSelect={() =>
                openExternal(`${import.meta.env.BASE_URL}${SITE.cvFile}`)
              }
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ink data-[selected=true]:bg-paper-sunken"
            >
              <Download size={15} className="text-ink-faint" />
              {t("cmd.downloadCv")}
            </Command.Item>

            <Command.Item
              onSelect={() => openExternal(EXTERNAL_LINKS.github)}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ink data-[selected=true]:bg-paper-sunken"
            >
              <Github size={15} className="text-ink-faint" />
              {t("cmd.openGithub")}
            </Command.Item>

            <Command.Item
              onSelect={() => openExternal(EXTERNAL_LINKS.linkedin)}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ink data-[selected=true]:bg-paper-sunken"
            >
              <Linkedin size={15} className="text-ink-faint" />
              {t("cmd.openLinkedin")}
            </Command.Item>

            <Command.Item
              onSelect={() => {
                navigate(alternatePath);
                close();
              }}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ink data-[selected=true]:bg-paper-sunken"
            >
              <Languages size={15} className="text-ink-faint" />
              {t("cmd.toggleLang")}
            </Command.Item>
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  );
}
