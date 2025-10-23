import { HashLink } from 'react-router-hash-link';
import { analytics } from '@/firebase';
import { logEvent } from 'firebase/analytics';
import { SECTION_LINKS, WEB_LINKS, FILES_LINKS } from './data';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';



interface MobileNavProps {
      setIsMenuOpened: ( isOpened: boolean ) => void;
}


export function MobileNavHeader({setIsMenuOpened}: MobileNavProps){
      return (
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
                                                <Menu onClick={() => setIsMenuOpened(true)} className='cursor-pointer'/>
                                          </div>
                                    </>
      )
}

export function MobileNavMenu({setIsMenuOpened}: MobileNavProps){

      const [isClosing, setIsClosing ] = useState<boolean>(false);

      const handleClose = () => {
            setIsClosing(true)
            setTimeout(() => {
                  setIsClosing(false)
                  setIsMenuOpened(false)
            }, 300);
      }

      return (
            <>
                              {/* Backgrop */}
                              <div 
                                    className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50'
                                    onClick={handleClose}
                              />

                              {/* Drawer */}
                              <div className={`fixed top-0 right-0 h-full w-[280px] bg-background border-l border-border z-[60]
                                              flex flex-col duration-300 ${
                                                isClosing 
                                                      ? "animate-out slide-out-to-right"
                                                      : "animate-in slide-in-from-right"
                                              }`} id='drawer'>
                                    {/* Header */}
                                    <div className='flex flex-row px-4 py-4 justify-between items-center border-b border-border'> 
                                          <h4> Menu </h4>
                                          <X
                                                className='cursor-pointer hover:text-primary transition-colors' 
                                                onClick={handleClose}
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
                                                                  handleClose();
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
                                                            handleClose();
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
                                                                  handleClose();
                                                            }}
                                                      >
                                                            <p className='highlighted-text'>{item.name}</p>
                                                      </a>
                                                ))}
                                    </div>

                              </div>
                        </>
      )
}
