import { ArrowUpRight } from "lucide-react";
import { usePageView } from "@/hooks/useAnalytics";
import { useT } from "@/providers/LanguageProvider";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { AmbientBackdrop } from "@/components/layout/AmbientBackdrop";
import { FadeLift } from "@/components/motion/FadeLift";
import { Chip, Eyebrow } from "@/components/primitives";
import {
  READING_KIND_LABELS,
  READING_LIST,
  type ReadingKind,
} from "@/content/reading/data";

const GROUPS: ReadingKind[] = ["paper", "book", "influence"];

export default function ReadingPage() {
  usePageView("reading");
  const t = useT();

  return (
    <>
      <AmbientBackdrop />
      <Container width="narrow">
        <PageHeader
          title={t("reading.title")}
          description={t("reading.description")}
        />

        <div className="space-y-14 pb-24">
          {GROUPS.map((kind) => {
            const entries = READING_LIST.filter((entry) => entry.kind === kind);
            if (entries.length === 0) return null;

            return (
              <FadeLift key={kind} as="section">
                <Eyebrow className="mb-4">{READING_KIND_LABELS[kind]}</Eyebrow>
                <ul className="divide-y divide-line border-y border-line">
                  {entries.map((entry) => (
                    <li key={entry.id} className="py-4">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <p className="text-sm font-medium text-ink">
                          {entry.link ? (
                            <a
                              href={entry.link}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="group inline-flex items-center gap-1.5 hover:text-ink-muted"
                            >
                              {entry.title}
                              <ArrowUpRight size={13} />
                            </a>
                          ) : (
                            entry.title
                          )}
                        </p>
                        {entry.draft && <Chip>Placeholder</Chip>}
                      </div>
                      <p className="mt-1 text-sm text-ink-muted">
                        {entry.author}
                        {entry.year && ` · ${entry.year}`}
                      </p>
                      <p className="mt-1.5 text-sm text-ink-faint">{entry.note}</p>
                    </li>
                  ))}
                </ul>
              </FadeLift>
            );
          })}
        </div>
      </Container>
    </>
  );
}
