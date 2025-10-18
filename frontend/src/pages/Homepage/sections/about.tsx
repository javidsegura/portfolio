import HomePageSection from "@/components/homepage/section";
import profilePic from "../../../assets/about-me/profile-pic.png"
import { useSectionView } from '@/hooks/useAnalytics';


export default function About(){
      // Track when about section comes into view
      const sectionRef = useSectionView("about");

      return (
            <HomePageSection
                  ref={sectionRef}
                  section_name="about"
                  title="About Me"
                  description="Know me beyond coding and math"
            >
                  <div className="max-w-5xl mx-auto mb-10">
                        <div className="flex flex-row items-center content-center gap-12 px-8">
                                    <img 
                                          src={profilePic} 
                                          width={320} 
                                          className="rounded-2xl shadow-xl h-fit border border-border/50" 
                                          alt="Javier Dominguez Segura"
                                    />
                              
                              <div className="">
                                    <p className="text-lg text-foreground/90 leading-relaxed space-y-4">
                                          <span className="block">
                                                Beyond the code and equations, I'm someone who thrives on challenges and continuous growth. Whether I'm training for a triathlon, strategizing on the basketball court, or calculating probabilities at the poker table, I approach every endeavor with the same analytical mindset and competitive drive that fuels my technical work.
                                          </span>
                                          <span className="block">
                                                I believe the discipline from endurance sports, the collaborative spirit from team games, and the risk assessment skills from poker directly translate to building robust systems and making data-driven decisions.
                                          </span>
                                          <span className="block">
                                                When I'm not solving complex problems, you'll find me exploring new ideas through reading or recharging with friends—because the best solutions often come from a well-rounded perspective.
                                          </span>
                                    </p>
                              </div>
                        </div>
                  </div>

            </HomePageSection>
      )
}