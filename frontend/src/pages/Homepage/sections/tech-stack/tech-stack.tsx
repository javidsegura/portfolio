import TechStackCard from "@/components/tech-stack/card";
import { TECH_STACK_SECTIONS } from "./data";


export default function TechStack(){
      return (
            // THIS MARGIN THING IS NOT WORKING
            <div className="h-[100vh] mt-50 mx-auto w-full" id="tech-stack-section">  
                  <div className="flex flex-col"> 
                        <h1 className="mx-auto text-4xl">Tech Stack</h1>
                        <p className="text-xl mx-auto"> Technologies and frameworks used</p>
                  </div>
                  <div id="card-sections" className="flex flex-row w-full h-auto gap-2 px-10 justify-center">  {/* FIX THE W-FULL */} 
                              {TECH_STACK_SECTIONS.map((item, index) => {
                                    return (
                                          <TechStackCard
                                                key={index}
                                                title={item.title}
                                                icon={item.icon}
                                                TECHNOLOGIES_ELEMENTS={item.elements}
                                          />
                                    )
                              })}
                        

                  </div>
            </div>
      )
}