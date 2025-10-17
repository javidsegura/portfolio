import Timeline from "@/components/homepage/experience/timeline";
import HomePageSection from "@/components/homepage/section";


export default function Experience(){
      return (
            <HomePageSection 
                  section_name="experience"
                  title="Experience"
                  description="My experience"
            >
                  <Timeline />
            </HomePageSection>
      )
}