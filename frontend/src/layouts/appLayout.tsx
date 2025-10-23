import Footer from "@/components/core/footer";
import NavBar from "@/components/core/navBar/navBar";
import { Outlet } from "react-router-dom";

export default function AppLayout(){
      return(
            <div className="flex flex-col sm:max-w-[100vw]"> 
                  <NavBar />
                  <div className="p-4 overflow-x-hidden">
                        <Outlet />
                  </div>
                  <Footer />
            </div>
      )
}