
import { useResponsive } from '@/hooks/useResponsive';
import { useState } from 'react';
import DesktopNavHeader from './desktopNavBar';
import { MobileNavHeader, MobileNavMenu } from './mobileNavBar';
 


export default function NavBar(){
      const { isMobile } = useResponsive();
      const [ isMenuOpened, setIsMenuOpened ] = useState<Boolean>(false);


      return (
            <>
                  <div className="flex flex-row justify-between px-6 py-4 top-0 sticky z-50 w-full
                              backdrop-blur-md bg-background/85 border-b border-border/50 shadow-sm 
                              transition-all duration-250 rounded-xs ">
                              {!isMobile && (
                                    <DesktopNavHeader />
                              )}
                              {isMobile && (
                                    <MobileNavHeader 
                                          setIsMenuOpened={setIsMenuOpened}
                                    />
                              )}
                        </div>
                  {isMenuOpened && (
                        <MobileNavMenu 
                              setIsMenuOpened={setIsMenuOpened}

                        />
                  )}
            </>
      )
}

