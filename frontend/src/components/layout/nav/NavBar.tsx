import { useState } from "react";
import { useResponsive } from "@/hooks/useResponsive";
import { DesktopNav } from "./DesktopNav";
import { MobileNavBar, MobileNavMenu } from "./MobileNav";

export function NavBar() {
  const { isMobile } = useResponsive();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-50 h-[var(--nav-height)] w-full border-b border-line/70
                   bg-paper/80 backdrop-blur-md no-print"
      >
        <div className="mx-auto flex h-full w-full max-w-[88rem] items-center px-5 sm:px-8">
          {isMobile ? (
            <MobileNavBar isOpen={isOpen} setIsOpen={setIsOpen} />
          ) : (
            <DesktopNav />
          )}
        </div>
      </header>

      {isMobile && <MobileNavMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
}
