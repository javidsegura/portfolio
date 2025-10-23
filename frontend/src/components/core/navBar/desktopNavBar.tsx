import { HashLink } from 'react-router-hash-link';
import { analytics } from '@/firebase';
import { logEvent } from 'firebase/analytics';
import { SECTION_LINKS, WEB_LINKS, FILES_LINKS } from './data';


export default function DesktopNavHeader(){
      return (<> 
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
      )
}