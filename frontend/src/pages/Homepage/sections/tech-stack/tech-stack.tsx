import TechStackCard from "@/components/homepage/tech-stack/card";
import { TECH_STACK_SECTIONS } from "./data";
import HomePageSection from "@/components/homepage/section";
import { useSectionView } from '@/hooks/useAnalytics';


export default function TechStack(){
      // Track when tech-stack section comes into view
      const sectionRef = useSectionView("tech_stack");

      return (
            <HomePageSection 
                  ref={sectionRef}
                  section_name="tech-stack"
                  title="Technical Knowledge"
                  description="Comprehensive toolkit spanning software engineering, machine learning, data analysis, and quantitative computing">
                  
                  
                  <div id="card-sections" className="w-full max-w-max md:w-[1200px] h-auto flex flex-col md:grid md:grid-cols-2 md:justify-items-center gap-2 px-10 mx-auto">
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
            </HomePageSection>
      )
}