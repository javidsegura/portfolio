import { HashLink } from 'react-router-hash-link';
import { analytics } from '@/firebase';
import { logEvent } from 'firebase/analytics';

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
      return (
            <div className="flex flex-row px-6 py-4 top-3 sticky z-50 backdrop-blur-md bg-background/85 border-b border-border/50 shadow-sm transition-all duration-250 rounded-xs">
                  <div id="left-section">
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
            </div>
      )
}