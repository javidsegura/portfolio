import HomePageSection from '@/components/homepage/section';
import { useSectionView } from '@/hooks/useAnalytics';
import { PROJECTS } from './data';
import ProjectCard, { type ProjectCardProps } from '@/components/homepage/projects/cards';
import { useState } from 'react';
import PopUpCard from '@/components/homepage/projects/popUpCard';
import PaginationControls from '@/components/homepage/projects/paginationControls';
import { ProjectCategories, TechStackCategories } from '@/components/homepage/projects/cards';

export default function Projects(){
      const sectionRef = useSectionView("projects");
      const [selectedProject, setSelectedProject] = useState<ProjectCardProps | null>(null);
      const [selectedCategory, setSelectedCategory] = useState<string>("All");
      const [selectedTechStack, setSelectedTechStack] = useState<string>("All");
      const [showPapersOnly, setShowPapersOnly] = useState<boolean>(false);
      const [ page, setPage ] = useState<number>(0);
      
      // DOCS: how to add pagination 
      const NUMBER_OF_PROJECTS_PER_GRID = 4;
      const totalPages = Math.ceil(PROJECTS.length / NUMBER_OF_PROJECTS_PER_GRID);
      const startIndex = page * NUMBER_OF_PROJECTS_PER_GRID;
      const endIndex = startIndex + NUMBER_OF_PROJECTS_PER_GRID;


      // You can filter by having paper, technology stack or category // DOCS: Take notes on filters 
      const filteredProjects = PROJECTS.filter( project => {
            console.log("Project is", project)
            const categoryMatch = project.category == selectedCategory || selectedCategory === "All";
            const techMatch  = project.techstack.includes(selectedTechStack) || selectedTechStack === "All";
            const paperMatch = project.hasPaper || !showPapersOnly
            return categoryMatch && techMatch && paperMatch
      })

      let allProjectCategories: Array<string> = Object.values(ProjectCategories)
      let allTechStackCategories: Array<string> = Object.values(TechStackCategories)


      return (
            <HomePageSection
                  ref={sectionRef}
                  section_name='projects'
                  title='Selected Work & Impact'
                  description='A showcase of data-driven solutions and engineering projects demonstrating technical depth, business impact, and analytical rigor.'

            >
                  <div id="filtering-section" className='flex flex-col gap-2 px-10 mb-3'>
                        <div id="area-filtering-section" className='mb-3'> 
                              <p className='text-xs mb-2'>AREAS</p>
                              <div className='flex flex-row gap-2'> 
                                    {allProjectCategories.map((item, idx) => {
                                          return (
                                                <button key={idx} onClick={() => {
                                                      setSelectedCategory(item)
                                                }}
                                                
                                                className={` ${
                                                      item === selectedCategory
                                                            ? 'primary-button'
                                                            : 'secondary-button'
                                                
                                                }`}>
                                                      {item}</button>
                                          )
                                    })}
                              </div>
                        </div>
                        <div id="tech-stack-filtering-section">
                              <div className='flex flex-row items-end gap-4'> 
                                    <label className='flex-1'>
                                          <p className='text-sm mb-2'>TECHNOLOGY</p>
                                          <select name="selectedTechStack"
                                                className='border-2 rounded-lg p-2 w-full'
                                                value={selectedTechStack}
                                                onChange={e => setSelectedTechStack(e.target.value)}
                                          >
                                                {allTechStackCategories.map((item, idx) => {
                                                      return (
                                                            <option value={item} key={idx}>{item}</option>
                                                      )
                                                })}
                                          </select>
                                    </label>
                              <button 
                                    className={` ${
                                          showPapersOnly
                                                ? "primary-button" 
                                                : "secondary-button"
                                    }`}
                                    onClick={() => setShowPapersOnly(!showPapersOnly)}
                                    >Include Paper Only</button>
                              </div>
                        </div>
                  <p className='text-xs font-light px-2'> Showing {filteredProjects.length} out of {PROJECTS.length}</p>
                  </div>
                  <div className='flex flex-row flex-wrap gap-2 px-10 mb-3'> 
                        {filteredProjects.slice(startIndex, endIndex).map((item, idx) => {
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
                  <PaginationControls 
                        page={page}
                        totalPages={totalPages}
                        setPage={setPage}
                  />
                  

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

