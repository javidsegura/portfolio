/**
 * Soft gate for sections still under construction.
 *
 * Deliberately not security: the content ships in the bundle and the password
 * lives in this file. It only keeps the default visitor out of drafts. Unlock
 * once and both gated sections stay open for the session.
 */

import { useState, type FormEvent, type ReactNode } from "react";
import { Lock } from "lucide-react";
import { AmbientBackdrop } from "@/components/layout/AmbientBackdrop";
import { Container } from "@/components/layout/Container";
import { FadeLift } from "@/components/motion/FadeLift";
import { Eyebrow } from "@/components/primitives";

const STORAGE_KEY = "wip-sections-unlocked";
const PASSWORD = "123";

function readUnlocked(): boolean {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function MaintenanceGate({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(readUnlocked);
  const [value, setValue] = useState("");
  const [rejected, setRejected] = useState(false);

  if (unlocked) return <>{children}</>;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (value.trim() === PASSWORD) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // Session-only unlock still works without storage.
      }
      setUnlocked(true);
    } else {
      setRejected(true);
      setValue("");
    }
  };

  return (
    <>
      <AmbientBackdrop />
      <Container width="narrow" className="flex min-h-[65vh] items-center justify-center">
        <FadeLift className="w-full max-w-sm">
          <div className="rounded-2xl border border-line bg-paper-raised p-8 text-center shadow-[var(--shadow-rest)]">
            <span className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-amber-soft">
              <Lock size={17} className="text-ink" />
            </span>

            <Eyebrow className="mb-2">Under construction</Eyebrow>
            <h1 className="type-title text-xl text-ink">
              This section is not ready yet
            </h1>
            <p className="type-body mt-2 text-sm text-ink-muted">
              If Javier gave you the password, enter it below.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex gap-2">
              <input
                type="password"
                value={value}
                onChange={(event) => {
                  setValue(event.target.value);
                  setRejected(false);
                }}
                placeholder="Password"
                aria-label="Password"
                autoFocus
                className="w-full rounded-full border border-line bg-paper px-4 py-2 text-sm
                           text-ink outline-none placeholder:text-ink-faint focus:border-amber"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-ink px-5 py-2 text-sm font-medium
                           text-paper-raised transition-transform duration-200 hover:-translate-y-0.5
                           motion-reduce:hover:translate-y-0"
              >
                Open
              </button>
            </form>

            {rejected && (
              <p className="mt-3 text-xs text-destructive">
                That is not it.
              </p>
            )}
          </div>
        </FadeLift>
      </Container>
    </>
  );
}
