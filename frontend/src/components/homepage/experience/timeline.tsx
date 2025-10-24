
export interface TimelineEvent {
  title: string;
  description: string;
  date: string;
  company?: string;
  image_url: string;
  content_link: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4">
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-border" />
        
        <div className="space-y-8">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="relative flex items-start gap-6 group cursor-pointer"
              onClick={() => {
                window.open(event.content_link, "_blank")
              }}
            >
              {/* Timeline dot with image */}
              <div className="relative z-10 flex-shrink-0">
                <img 
                  src={event.image_url} 
                  className="w-[55px] h-[55px] object-cover border-2 border-border bg-background rounded-xl p-2 transition-transform duration-300 group-hover:scale-110 group-hover:border-primary"
                  alt={event.company || event.title}
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-2">
                <div className="text-sm text-muted-foreground mb-2">{event.date}</div>
                <div className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{event.title}</div>
                {event.company && (
                  <div className="text-sm text-muted-foreground font-medium mb-2">{event.company}</div>
                )}
                <div className="text-sm text-muted-foreground/80 leading-relaxed">{event.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}