
interface TitleSectionProps {
      title: string;
      description: string;
}

export default function TitleSection({title, description}: TitleSectionProps){
      return ( 
            <div className="flex flex-col text-center" id="section-info"> 
                  <h1 className="mx-auto text-6xl font-bold text-foreground mb-3">{title}</h1>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
            </div>
      )
}