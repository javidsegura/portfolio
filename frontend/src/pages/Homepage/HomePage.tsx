import About from "./sections/about";
import Experience from "./sections/experience/experience";
import Landing from "./sections/landing";
import Projects from "./sections/projects";
import TechStack from "./sections/tech-stack/tech-stack";
import { usePageView } from "@/hooks/useAnalytics";

export default function HomePage(){
      // Track page view and session duration
      usePageView("portfolio_homepage");

      return(
            <div className="flex flex-col">
                  <Landing />
                  <Projects />
                  <Experience />
                  <TechStack />
                  <About />
            </div>
      )
}


/*
1. Move tasks out 
2. 
*/