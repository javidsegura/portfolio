import About from "./sections/about";
import Experience from "./sections/experience";
import Landing from "./sections/landing";
import Projects from "./sections/projects";
import TechStack from "./sections/tech-stack/tech-stack";

export default function HomePage(){
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