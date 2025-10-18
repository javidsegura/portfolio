import Timeline from "@/components/homepage/experience/timeline";
import HomePageSection from "@/components/homepage/section";
import { EXPERIENCE_EVENTS } from "./data";
import { useSectionView } from '@/hooks/useAnalytics';


export default function Experience(){
      // Track when experience section comes into view
      const sectionRef = useSectionView("experience");

      return (
            <HomePageSection 
                  ref={sectionRef}
                  section_name="experience"
                  title="Experience"
                  description="Dean's List recognition, NSF-funded HPC research, Silicon Valley selection, and entrepreneurial ventures."
            >
                  <Timeline
                        events={EXPERIENCE_EVENTS}
                  />
            </HomePageSection>
      )
}