import { FileText } from "lucide-react"

// Write enum to notes
export enum ProjectCategories {
      All = "All",
      Cybersecurity = "Cybersecurity",
      Full_stack = "Full Stack", 
      Hardware = "Hardware"
}
export enum TechStackCategories {
      All = "All",
      Python = "Python",
      C = "C",
      MySQL = "MySQL", 
      AWS = "AWS"
}


export interface ProjectCardProps {
      title: string,
      category: ProjectCategories,
      description: string,
      impact: string,
      role: string,
      date: string,
      techstack: Array<string>,
      hasPaper: boolean,
      paperLink: string,
      deepDiveLink: string,
      githubLink: string,
      onClick?: () => void,
}

export default function ProjectCard(props: ProjectCardProps){
      return (
            <div 
                  className="border-2 w-[calc(50%-0.5rem)] p-5 cursor-pointer"
                  onClick={props.onClick}
                  >
                  <div id="title-section" className="flex flex-row mb-2">
                        <h3 className="font-semibold text-xl text-gray-900 group-hover:text-gray-700 transition-colors">{props.title}</h3>
                        {props.hasPaper && <FileText size={20} color="gray" className="ml-auto"/>}
                  </div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">{props.category} · {props.date}</p>
                  <p className="text-gray-700 leading-relaxed">{props.description}</p>
                  <div className="rounded bg-gray-50 border-l-4 border-gray-900 p-3 mb-4">
                        <p className="text-sm font-medium text-gray-900">{props.impact}</p>
                  </div>
                  <div className="flex flex-row gap-2">
                        {props.techstack.map((item, _) => {
                              return (
                                    <div className="bg-gray-100 p-2 rounded text-xs"> 
                                          <p id="technology-stack-item">{item}</p>
                                    </div>
                              )
                        })}
                  </div>

            </div>
      )
      
}