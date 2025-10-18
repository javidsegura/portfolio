import { useSectionView } from '@/hooks/useAnalytics';

export default function Projects(){
      // Track when projects section comes into view
      const sectionRef = useSectionView("projects");

      return (
            <div ref={sectionRef} className="h-[100vh]" id="projects-section"> 
                  <p> HIII THIS IS PROJECTTTTTTTT</p>
            </div>
      )
}