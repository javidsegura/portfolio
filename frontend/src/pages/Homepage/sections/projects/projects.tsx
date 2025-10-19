import HomePageSection from '@/components/homepage/section';
import { useSectionView } from '@/hooks/useAnalytics';
import { PROJECTS } from './data';
import ProjectCard, { type ProjectCardProps } from '@/components/homepage/projects/cards';
import { useState } from 'react';
import PopUpCard from '@/components/homepage/projects/popUpCard';

const NUMBER_OF_PROJECTS_PER_GRID = 4;


export default function Projects(){
      const sectionRef = useSectionView("projects");
      const [selectedProject, setSelectedProject] = useState<ProjectCardProps | null>(null);
      const [ page, setPage ] = useState<number>(0);
      
      // DOCS: how to add pagination 
      const totalPages = Math.ceil(PROJECTS.length / NUMBER_OF_PROJECTS_PER_GRID);
      const startIndex = page * NUMBER_OF_PROJECTS_PER_GRID;
      const endIndex = startIndex + NUMBER_OF_PROJECTS_PER_GRID;

      return (
            <HomePageSection
                  ref={sectionRef}
                  section_name='projects'
                  title='Projects'
                  description='Work output'

            >
            <div className='flex flex-row flex-wrap gap-2 px-10 mb-3'> 
                  {PROJECTS.slice(startIndex, endIndex).map((item, idx) => {
                        return (
                              <ProjectCard 
                                    key={idx}
                                    {...item}
                                    onClick={() => {
                                          setSelectedProject({...item});
                                          console.log("I have just been clicked with idx", {...item})
                                    }}
                              />
                        )
                  })}
            </div>
            {/* Pagination Controls */}
            <div className='flex flex-row gap-2 items-center justify-center mt-6'>
                  {/* Previous Button */}
                  <button 
                        className={`px-4 py-2 rounded-lg transition-colors ${
                              page === 0 
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                        onClick={() => setPage(Math.max(0, page - 1))}
                        disabled={page === 0}
                  >
                        Previous
                  </button>
                  
                  {/* Page Numbers */}
                  <div className='flex gap-1'>
                        {[...Array(totalPages)].map((_, i) => (
                              <button
                                    key={i}
                                    className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                                          page === i ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                    onClick={() => setPage(i)}
                              >
                                    {i + 1}
                              </button>
                        ))}
                  </div>
                  
                  {/* Next Button */}
                  <button 
                        className={`px-4 py-2 rounded-lg transition-colors ${
                              page === totalPages - 1 
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                        onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
                        disabled={page === totalPages - 1}
                  >
                        Next
                  </button>
            </div>
            

            {/* FIX: add this to the docs */}
            {selectedProject && (
                  <PopUpCard 
                        selectedProject={selectedProject}
                        setSelectedProject={setSelectedProject}
                  />
            )}
                  

            </HomePageSection>
      )
}


//  {/* Modal */}
//  {selectedProject && (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//         <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
//           <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-2">
//                 {selectedProject.title}
//               </h2>
//               <div className="text-sm text-gray-600">
//                 {selectedProject.area} · {selectedProject.date}
//               </div>
//             </div>
//             <button
//               onClick={() => setSelectedProject(null)}
//               className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>

//           <div className="p-6 space-y-6">
//             <div>
//               <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
//                 Role
//               </h3>
//               <p className="text-gray-900">{selectedProject.role}</p>
//             </div>

//             <div>
//               <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
//                 Description
//               </h3>
//               <p className="text-gray-900 leading-relaxed">
//                 {selectedProject.description}
//               </p>
//             </div>

//             <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-gray-900">
//               <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
//                 Impact
//               </h3>
//               <p className="text-gray-900 font-medium">
//                 {selectedProject.impact}
//               </p>
//             </div>

//             <div>
//               <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
//                 Technology Stack
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {selectedProject.techStack.map(tech => (
//                   <span
//                     key={tech}
//                     className="px-3 py-1.5 bg-gray-900 text-white text-sm font-medium rounded"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-3 pt-4">
//               {selectedProject.deepDiveLink && (
//                 <a
//                   href={selectedProject.deepDiveLink}
//                   className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
//                 >
//                   <ExternalLink className="w-4 h-4 mr-2" />
//                   Read Deep Dive
//                 </a>
//               )}
//               {selectedProject.githubLink && (
//                 <a
//                   href={selectedProject.githubLink}
//                   className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
//                 >
//                   <Github className="w-4 h-4 mr-2" />
//                   View Code
//                 </a>
//               )}
//               {selectedProject.paperLink && (
//                 <a
//                   href={selectedProject.paperLink}
//                   className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
//                 >
//                   <FileText className="w-4 h-4 mr-2" />
//                   Read Paper
//                 </a>
//               )}
//             </div>