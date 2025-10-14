



import type { ComponentType } from "react";

interface TechStackCardProps {
  TECHNOLOGIES_ELEMENTS: Array<{ name: string; logo_url: string }>;
  title: string;
  className?: string;
  Icon: ComponentType;
}

export default function TechStackCard({ TECHNOLOGIES_ELEMENTS, title, className, Icon }: TechStackCardProps){
      return (
            <div className={`bg-card border border-border rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out h-auto p-10 w-fit ${className ?? ""}`}> 
                  <div id="title-section" className="flex flex-row gap-2 mb-3 items-center"> 
                        <div className="my-auto bg-primary/10 rounded-xl p-3"> 
                             <Icon style={{color: "var(--primary)", fontSize:"1.4em"}}/> 
                        </div>
                        <h3 className="text-primary text-2xl font-semibold"> {title} </h3>
                  </div>
                  <div id="technology-items" className="flex flex-wrap gap-2">
                        {TECHNOLOGIES_ELEMENTS.map((element, index) => {
                              return (
                                    <div id="framework" key={index} className="bg-secondary flex flex-row gap-1 rounded-3xl min-w-[calc(33.333%-8px)] px-2 py-1 my-0.5">
                                          <img src={element.logo_url} width={23} height={20} alt={element.name} className=""></img>
                                          <p className=""> {element.name}</p>
                                    </div>
                              )
                        })}
         
                  </div>

            </div>
      )
}


