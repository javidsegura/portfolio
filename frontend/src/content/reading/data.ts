/**
 * Reading list. Placeholder entries: the shape is real, the picks are yours to
 * replace. Kept as data so ⌘K can index it alongside projects.
 */

export type ReadingKind = "paper" | "book" | "influence";

export interface ReadingEntry {
  id: string;
  title: string;
  author: string;
  kind: ReadingKind;
  year?: string;
  /** Why it mattered, in one line. */
  note: string;
  link?: string;
  draft?: boolean;
}

export const READING_LIST: ReadingEntry[] = [
  {
    id: "placeholder-paper",
    title: "Add a paper that changed how you think about scheduling",
    author: "—",
    kind: "paper",
    note: "One line on what it changed.",
    draft: true,
  },
  {
    id: "placeholder-book",
    title: "Add a book that shaped how you build systems",
    author: "—",
    kind: "book",
    note: "One line on why it stuck.",
    draft: true,
  },
  {
    id: "placeholder-influence",
    title: "Add an engineer, lab or blog you learn from",
    author: "—",
    kind: "influence",
    note: "One line on what you take from it.",
    draft: true,
  },
];

export const READING_KIND_LABELS: Record<ReadingKind, string> = {
  paper: "Paper",
  book: "Book",
  influence: "Influence",
};
