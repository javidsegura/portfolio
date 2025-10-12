import profilePic from "../assets/about-me/profile-pic.png"

export default function HomePage(){
      return(
            <div className="flex w-screen h-screen">
                  <div id="hero-section" className="flex flex-col m-auto gap-2"> 
                        <img src={profilePic} alt="Profile" width={300} height={300}/>
                        <p> Hellooo my name is Javer Domínguez Segura</p>
                  </div>
            </div>
      )
}