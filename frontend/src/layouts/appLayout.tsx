import { Outlet } from "react-router-dom";
import { NavBar } from "@/components/layout/nav/NavBar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { CommandPaletteProvider } from "@/providers/CommandPaletteProvider";

/**
 * Shell shared by every route. The command palette lives here so it is
 * available site-wide rather than being re-mounted per page.
 */
export default function AppLayout() {
  return (
    <CommandPaletteProvider>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <NavBar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CommandPaletteProvider>
  );
}
