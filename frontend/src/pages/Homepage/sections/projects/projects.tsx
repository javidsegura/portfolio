import HomePageSection from '@/components/homepage/section';
import { useSectionView } from '@/hooks/useAnalytics';
import { useResponsive } from '@/hooks/useResponsive';
import { PROJECTS } from './data';
import ProjectCard, { type ProjectCardProps } from '@/components/homepage/projects/cards';
import { useState, useEffect } from 'react';
import PopUpCard from '@/components/homepage/projects/popUpCard';
import PaginationControls from '@/components/homepage/projects/paginationControls';
import { FilteringProjectsSection } from '@/components/homepage/projects/filtering';

export default function Projects(){
      const sectionRef = useSectionView("projects");
      const { isMobile } = useResponsive();
      const [selectedProject, setSelectedProject] = useState<ProjectCardProps | null>(null);
      const [selectedCategory, setSelectedCategory] = useState<string>("All");
      const [selectedTechStack, setSelectedTechStack] = useState<string>("All");
      const [showPapersOnly, setShowPapersOnly] = useState<boolean>(false);
      const [ page, setPage ] = useState<number>(0);
      
      const NUMBER_OF_PROJECTS_PER_GRID = isMobile ? 2 : 4;
      
      // You can filter by having paper, technology stack or category // DOCS: Take notes on filters 
      const filteredProjects = PROJECTS.filter( project => {
            const categoryMatch = project.category == selectedCategory || selectedCategory === "All";
            const techMatch  = project.techstack.includes(selectedTechStack) || selectedTechStack === "All";
            const paperMatch = project.hasPaper || !showPapersOnly
            return categoryMatch && techMatch && paperMatch
      })

      const totalPages = Math.ceil(filteredProjects.length / NUMBER_OF_PROJECTS_PER_GRID);
      const startIndex = page * NUMBER_OF_PROJECTS_PER_GRID;
      const endIndex = startIndex + NUMBER_OF_PROJECTS_PER_GRID;

      // Reset page when viewport changes to prevent being on non-existent page
      useEffect(() => {
            if (page >= totalPages && totalPages > 0) {
                  setPage(0);
            }
      }, [isMobile, totalPages, page]);


      return (
            <HomePageSection
                  ref={sectionRef}
                  section_name='projects'
                  title='Selected Work & Impact'
                  description='A showcase of data-driven solutions and engineering projects demonstrating technical depth, business impact, and analytical rigor.'

            >
                  <FilteringProjectsSection
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        selectedTechStack={selectedTechStack}
                        setSelectedTechStack={setSelectedTechStack}
                        showPapersOnly={showPapersOnly}
                        setShowPapersOnly={setShowPapersOnly}
                        filteredProjects={filteredProjects}

                  />
                  <div className='flex flex-col md:flex-row flex-wrap gap-2 px-10 mb-3 h-min-full w-min-full'> 
                        {filteredProjects.slice(startIndex, endIndex).map((item, idx) => {
                              return (
                                    <ProjectCard 
                                          key={idx}
                                          {...item}
                                          onClick={() => {
                                                setSelectedProject({...item});
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
                  
                  {selectedProject && (
                        <PopUpCard 
                              selectedProject={selectedProject}
                              setSelectedProject={setSelectedProject}
                        />
                  )}
                  

            </HomePageSection>
      )
}

