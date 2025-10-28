
import { ProjectCategories, TechStackCategories, type ProjectCardProps } from '@/components/homepage/projects/cards';
import { PROJECTS } from '@/pages/Homepage/sections/projects/data';



interface FilteringProjectsProps {
      selectedCategory: ProjectCategories,
      setSelectedCategory: (category: ProjectCategories) => void,
      selectedTechStack: TechStackCategories,
      setSelectedTechStack: (tech_stack: TechStackCategories) => void,
      showPapersOnly: boolean,
      setShowPapersOnly: (showPapers: boolean) => void
      filteredProjects: Array<ProjectCardProps> 

      
}


export function FilteringProjectsSection({
      selectedCategory,
      setSelectedCategory,
      selectedTechStack,
      setSelectedTechStack,
      showPapersOnly,
      setShowPapersOnly,
      filteredProjects
      }: FilteringProjectsProps){
      let allProjectCategories: Array<ProjectCategories> = Object.values(ProjectCategories)
      let allTechStackCategories: Array<TechStackCategories> = Object.values(TechStackCategories)


      return (
            <div id="filtering-section" className='flex flex-col gap-2 px-10 mb-3 w-full h-full'>
                        <div id="area-filtering-section" className='mb-3'> 
                              <p className='text-xs mb-2'>AREAS</p>
                              <div className='flex flex-row flex-wrap gap-2'> 
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
                              <div className='flex flex-col md:flex-row md:items-end gap-4'> 
                                    <label className='flex-1'>
                                          <p className='text-sm mb-2'>TECHNOLOGY</p>
                                          <select name="selectedTechStack"
                                                className='border-2 rounded-lg p-2 w-full'
                                                value={selectedTechStack}
                                                onChange={e => setSelectedTechStack(e.target.value as TechStackCategories)}
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
      )

}