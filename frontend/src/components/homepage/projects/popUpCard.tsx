import type { ProjectCardProps } from "./cards";
import { ExternalLink, Github, X , FileText} from "lucide-react"


interface PopUpCardProps {
  selectedProject: ProjectCardProps;
  setSelectedProject: (project: ProjectCardProps | null) => void;
}

export default function PopUpCard({ selectedProject, setSelectedProject }: PopUpCardProps ){
      return (
            <div className='fixed inset-0 bg-black/50 z-50 flex justify-center items-center'> 
                        <div id="section-content" className='rounded bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto'>
                              <div id="header-section" className="p-5"> 
                                    <div className="flex flex-row mb-1"> 
                                          <h3 className="font-bold text-2xl">{selectedProject.title}</h3>
                                          <X onClick={() => setSelectedProject(null)} className='cursor-pointer ml-auto'/>
                                    </div>
                                    <p className="text-sm font-light text-gray-500 tracking-wide mb-3">{selectedProject.categories} · {selectedProject.date}</p>
                              </div>
                              <div className="border-t border-gray-300"></div>
                              <div id="content-section" className="p-5">
                                    <div id="role" className="mb-5"> 
                                          <p className="text-xs text-gray-500 mb-2">ROLE</p>
                                          <p>{selectedProject.role}</p>
                                    </div>
                                    <div id="description" className="mb-5"> 
                                          <p className="text-xs text-gray-500 mb-2">DESCRIPTION</p>
                                          <p>{selectedProject.description}</p>
                                    </div>
                                    <div id="impact" className="mb-5 bg-gray-100 p-5 rounded-xl border-l-5 border-black">
                                          <p className="text-xs text-gray-500 mb-2">IMPACT</p>
                                          <p >{selectedProject.impact}</p>
                                    </div>
                                    <div id="technology-stack" className="flex flex-col mb-5">
                                          <p className="text-xs text-gray-500 mb-2">TECHNOLOGY STACK</p>
                                          <div className="flex flew-row gap-2"> 
                                                {selectedProject.techstack.map((item, _) => {
                                                      return (
                                                            <div className="bg-black p-2 rounded text-xs"> 
                                                                  <p id="technology-stack-item" className="text-white">{item}</p>
                                                            </div>
                                                      )
                                                })}
                                          </div> 
                                    </div>

                                    <div id="final-links" className="flex flex-row gap-5">
                                          {selectedProject.deepDiveLink && (
                                                <a className="primary-button bg-black" target="_blank" href={selectedProject.deepDiveLink}>
                                                      <div className="flex flex-row gap-2"> 
                                                            <ExternalLink width={16} />
                                                            <p className="font-light">Read Deep Dive</p>
                                                      </div>
                                                </a>
                                          )}
                                          {selectedProject.githubLink && (
                                                <a className="secondary-button" target="_blank" href={selectedProject.githubLink}>
                                                      <div className="flex flex-row gap-2">
                                                            <Github width={16} />
                                                            <p className="font-light">View Code</p>
                                                      </div>
                                                </a>
                                          )}
                                          {
                                                selectedProject.paperLink && (
                                                <a className="secondary-button" target="_blank" href={selectedProject.paperLink}>
                                                      <div className="flex flex-row gap-2">
                                                            <FileText width={16} />
                                                            <p className="font-light">Read Paper</p>
                                                      </div>
                                                </a>
                                                )
                                          }
                                    </div>
                              </div>
                        
                        </div>
      
            </div>
      )

}