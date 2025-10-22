import Footer from "@/components/core/footer";
import NavBar from "@/components/core/navBar";
import { Outlet } from "react-router-dom";

export default function AppLayout(){
      return(
            <div className="p-4 flex flex-col sm:max-w-[100vw]"> 
                  <NavBar />
                  <Outlet />
                  <Footer />
            </div>
      )
}