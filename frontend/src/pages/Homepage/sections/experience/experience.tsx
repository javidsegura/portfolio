import Timeline from "@/components/homepage/experience/timeline";
import HomePageSection from "@/components/homepage/section";
import { EXPERIENCE_EVENTS } from "./data";


export default function Experience(){
      return (
            <HomePageSection 
                  section_name="experience"
                  title="Experience"
                  description="My experience"
            >
                  <Timeline
                        events={EXPERIENCE_EVENTS}
                  />
            </HomePageSection>
      )
}