import { HashLink } from 'react-router-hash-link';
import { analytics } from '@/firebase';
import { logEvent } from 'firebase/analytics';
import { useResponsive } from '@/hooks/useResponsive';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const SECTION_LINKS = [
      {
            "name": "Projects",
            "link": "/portfolio#projects-section"
      },
      {
            "name": "Experience",
            "link": "/portfolio#experience-section"
      },
      {
            "name": "Tech stack",
            "link": "/portfolio#tech-stack-section"
      },
      {
            "name": "About",
            "link": "/portfolio#about-section"
      },
];

const WEB_LINKS = [
      {
            "name": "Blog",
            "link": "https://medium.com/@jdominguez.ieu2023"
      },

]

const FILES_LINKS = [{
      "name": "[ Download CV ]",
      "link": "/portfolio/Javier-Dominguez-CV.pdf"
},]


export default function NavBar(){
      const { isMobile } = useResponsive();
      const [ isMenuOpened, setIsMenuOpened ] = useState<Boolean>(false);


      return (
            <>
                  <div className="flex flex-row justify-between px-6 py-4 top-3 sticky z-50 w-full
                              backdrop-blur-md bg-background/85 border-b border-border/50 shadow-sm 
                              transition-all duration-250 rounded-xs ">
                              {/* MOVBILE NAVIGATION */}
                              {!isMobile && (
                                    <> 
                                    <div id="left-section" className=''>
                                          <HashLink 
                                                to={"/portfolio#landing-section"} 
                                                smooth
                                                onClick={() => {
                                                      logEvent(analytics, "navigation_click", {
                                                            section: "landing",
                                                            source: "navbar_logo"
                                                      });
                                                }}
                                          > 
                                                <h4> Javier Domínguez Segura</h4>
                                          </HashLink>
                                    </div>

                                    <div id="right-section" className="ml-auto flex flex-row gap-4">
                                          {SECTION_LINKS.map(( item, idx ) => (
                                                <HashLink 
                                                      to={item.link} 
                                                      smooth 
                                                      key={idx}
                                                      onClick={() => {
                                                            logEvent(analytics, "navigation_click", {
                                                                  section: item.name.toLowerCase().replace(' ', '_'),
                                                                  source: "navbar"
                                                            });
                                                      }}
                                                >
                                                      <p className='highlighted-text'> {item.name}</p>
                                                </HashLink>
                                          ))}
                                          {WEB_LINKS.map(( item, idx ) => (
                                                <p className='highlighted-text cursor-pointer' key={idx} onClick={ () =>{
                                                      logEvent(analytics, "external_link_click", {
                                                            platform: "medium",
                                                            destination: item.link,
                                                            source: "navbar"
                                                      });
                                                      window.open(item.link, "_blank")
                                                }
                                                }> {item.name}</p>
                                          ))}
                                          {FILES_LINKS.map(( item, idx ) => (
                                                <a 
                                                      href={item.link} 
                                                      download 
                                                      key={idx}
                                                      onClick={() => {
                                                            logEvent(analytics, "cv_download", {
                                                                  source: "navbar",
                                                                  file_name: "Javier-Dominguez-CV.pdf"
                                                            });
                                                      }}
                                                >
                                                      <p className='highlighted-text'>{item.name}</p>
                                                </a>
                                          ))}
                                    </div>
                              </>
                              )}
                              {/* PROJECTS, EXPERIENCE, DOWNLOAD CV  */}
                              {isMobile && (
                                    <> 
                                          <div id="left-section" className='flex flex-row gap-3'>
                                                {SECTION_LINKS.slice(0,1).map(( item, idx ) => (
                                                      <HashLink 
                                                            to={item.link} 
                                                            smooth 
                                                            key={idx}
                                                            onClick={() => {
                                                                  logEvent(analytics, "navigation_click", {
                                                                        section: item.name.toLowerCase().replace(' ', '_'),
                                                                        source: "navbar"
                                                                  });
                                                            }}
                                                      >
                                                            <p className='highlighted-text'> {item.name}</p>
                                                      </HashLink>
                                                ))}
                                                {FILES_LINKS.map(( item, idx ) => (
                                                <a 
                                                      href={item.link} 
                                                      download 
                                                      key={idx}
                                                      onClick={() => {
                                                            logEvent(analytics, "cv_download", {
                                                                  source: "navbar",
                                                                  file_name: "Javier-Dominguez-CV.pdf"
                                                            });
                                                      }}
                                                >
                                                      <p className='highlighted-text'>{item.name}</p>
                                                </a>
                                                ))}
                                          </div>
                                          <div id="right-section">
                                                <Menu onClick={() => setIsMenuOpened(true)}/>
                                          </div>
                                    </>
                              )}
                        </div>
                  {isMenuOpened && (
                        <>
                              {/* Backgrop */}
                              <div 
                                    className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50'
                                    onClick={() => setIsMenuOpened(false)}
                              />

                              {/* Drawer */}
                              <div className='fixed top-0 right-0 h-full w-[280px] bg-background border-l border-border z-50
                                              flex flex-col animate-in slide-in-from-right duration-300' id='drawer'>
                                    {/* Header */}
                                    <div className='flex flex-row px-4 py-4 justify-between items-center border-b border-border'> 
                                          <h4> Menu </h4>
                                          <X
                                                className='cursor-pointer hover:text-primary transition-colors' 
                                                onClick={() => setIsMenuOpened(false)}
                                                />
                                    </div>

                                    <div className='flex flex-col gap-4 p-6 overflow-y-auto'>
                                          {SECTION_LINKS.map(( item, idx ) => (
                                                      <HashLink 
                                                            to={item.link} 
                                                            smooth 
                                                            key={idx}
                                                            onClick={() => {
                                                                  logEvent(analytics, "navigation_click", {
                                                                        section: item.name.toLowerCase().replace(' ', '_'),
                                                                        source: "navbar"
                                                                  });
                                                            }}
                                                      >
                                                            <p className='highlighted-text'> {item.name}</p>
                                                      </HashLink>
                                                ))}
                                                {WEB_LINKS.map(( item, idx ) => (
                                                      <p className='highlighted-text cursor-pointer' key={idx} onClick={ () =>{
                                                            logEvent(analytics, "external_link_click", {
                                                                  platform: "medium",
                                                                  destination: item.link,
                                                                  source: "navbar"
                                                            });
                                                            window.open(item.link, "_blank")
                                                      }
                                                      }> {item.name}</p>
                                                ))}
                                                {FILES_LINKS.map(( item, idx ) => (
                                                      <a 
                                                            href={item.link} 
                                                            download 
                                                            key={idx}
                                                            onClick={() => {
                                                                  logEvent(analytics, "cv_download", {
                                                                        source: "navbar",
                                                                        file_name: "Javier-Dominguez-CV.pdf"
                                                                  });
                                                            }}
                                                      >
                                                            <p className='highlighted-text'>{item.name}</p>
                                                      </a>
                                                ))}
                                    </div>

                              </div>
                        </>
                  )}
            </>
      )
}


//   {/* Mobile Menu Overlay - Outside sticky nav so it covers full viewport */}
//   {isMenuOpened && (
//       <>
//             {/* Backdrop */}
//             <div 
//                   className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
//                   onClick={() => setIsMenuOpened(false)}
//             />
            
//             {/* Drawer */}
//             <div className="fixed top-0 right-0 h-full w-[280px] bg-background border-l border-border shadow-2xl z-50 
//                             flex flex-col animate-in slide-in-from-right duration-300">
//                   {/* Header */}
//                   <div className="flex justify-between items-center p-6 border-b border-border">
//                         <h4>Menu</h4>
//                         <X 
//                               className="cursor-pointer hover:text-primary transition-colors" 
//                               onClick={() => setIsMenuOpened(false)}
//                         />
//                   </div>
                  
//                   {/* Content - Fill this with your links */}
//                   <div className="flex flex-col gap-4 p-6 overflow-y-auto">
//                         {/* Add your navigation links here */}
//                         <p className="text-muted-foreground">Your links go here...</p>
//                   </div>
//             </div>
//       </>
// )}