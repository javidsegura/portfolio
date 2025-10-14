import TechStackCard from "@/components/tech-stack/card";
import { TECH_STACK_SECTIONS } from "./data";


export default function TechStack(){
      return (
            <div className="h-[100vh] flex flex-col pt-30 mx-auto w-full" id="tech-stack-section">  
                  <div className="flex flex-col text-center" id="section-info"> 
                        <h1 className="mx-auto text-6xl font-bold text-foreground mb-3">Technical Knowledge</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"> Comprehensive toolkit spanning software engineering, machine learning, data analysis, and quantitative computing </p>
                  </div>
                  <div id="card-sections" className="grid grid-cols-2 justify-items-center w-[1200px] h-auto gap-2 px-10 mx-auto pt-10">
                              {TECH_STACK_SECTIONS.map((item, index) => {
                                    const isLast = index === TECH_STACK_SECTIONS.length - 1;
                                    return (
                                          <TechStackCard
                                                key={index}
                                                title={item.title}
                                                Icon={item.icon}
                                                TECHNOLOGIES_ELEMENTS={item.elements}
                                                className={isLast ? "col-span-2" : undefined}
                                          />
                                    )
                              })}
                  </div>
            </div>
      )
}