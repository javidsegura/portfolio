
import React from "react";


export default function TechStackCard({ TECHNOLOGIES_ELEMENTS, title}){
      return (
            <div className="bg-primary rounded-2xl h-auto p-10"> 
                  <div id="title-section" className="flex flex-row gap-2"> 
                        <div className="my-auto"> 
                              {/* {React.cloneElement(icon, {style: {color: "white", fontSize: "1.5em"}})} */}
                        </div>
                        <h3 className="text-secondary text-3xl"> {title} </h3>
                  </div>
                  <div id="technology-items" className="flex flex-wrap gap-2 mt-2">
                        {TECHNOLOGIES_ELEMENTS.map((element, index) => {
                              return (
                                    <div id="framework" key={index} className="bg-secondary flex flex-row gap-1 rounded-3xl w-[calc(33.333%-8px)] px-2 py-1">
                                          <img src={element.logo_url} width={20} className=""></img>
                                          <p className=""> {element.name}</p>
                                    </div>
                              )
                        })}
         
                  </div>

            </div>
      )
}