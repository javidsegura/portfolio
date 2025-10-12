import About from "./sections/about";
import Experience from "./sections/experience";
import Landing from "./sections/landing";
import Projects from "./sections/projects";
import TechStack from "./sections/tech-stack";

export default function HomePage(){
      return(
            <>
            <Landing />
            <Projects />
            <Experience />
            <TechStack />
            <About />
            </>
      )
}
