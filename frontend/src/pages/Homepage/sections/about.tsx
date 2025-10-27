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
                  <div className="max-w-5xl mx-auto mb-10 flex flex-col md:flex-row items-center content-center gap-12 px-8">
                              <img 
                                    src={profilePic} 
                                    width={320} 
                                    className="rounded-2xl shadow-xl h-fit border border-border/50" 
                                    alt="Javier Dominguez Segura"
                              />
                        
                        <div className="" id="description-info">
                              <p className="text-lg text-foreground/90 leading-relaxed space-y-4">
                                    <span className="block">
                                          I’m a Computer Science and AI student fueled by curiosity and a passion for transforming complex problems into scalable, real-world solutions. My approach combines analytical precision with creativity — the same mindset I apply to research, engineering projects, and competitive challenges.
                                    </span>
                                    <span className="block">
                                          In my free time, I train for triathlons and enjoy basketball and poker. These disciplines sharpen my endurance, teamwork, and strategic thinking, influencing how I code, collaborate, and make decisions under uncertainty.
                                    </span>
                                    <span className="block">
                                          I value environments that reward initiative, critical thinking, and continuous learning. Whether I’m building high-performance computing middleware, optimizing a machine learning model, or leading a project from concept to deployment, I aim to create technology that is both elegant and impactful.
                                    </span>
                              </p>
                        </div>
                  </div>

            </HomePageSection>
      )
}