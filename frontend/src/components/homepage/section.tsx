
interface TitleSectionProps {
      section_name: string;
      title: string;
      description: string;
      children: React.ReactNode;
}


export default function HomePageSection({section_name, title, description, children}: TitleSectionProps){
      return (
            <div className="flex flex-col mx-auto w-full my-10 scroll-mt-22" id={`${section_name}-section`}>  
                  <div className="flex flex-col text-center mb-7" id="section-info"> 
                        <h1 className="mx-auto text-6xl font-bold text-foreground mb-3">{title}</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
                  </div>
                  {children}
            </div>
      )
}