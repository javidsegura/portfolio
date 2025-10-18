
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
    <div className="w-full py-8">
      {/* Horizontal on large screens */}
      <div className="">
        <div className="relative">
          {/* Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-300" />
          
          <div className="flex justify-between relative">
            {events.map((event, index) => (
              <div key={index} className="flex flex-col items-center flex-1 cursor-pointer" onClick={() => {
                window.open(event.content_link, "_blank")
              }}>
                {/* Dot */}
                <img src={event.image_url} className="w-[55px] border-1 h-fit bg-primary-foreground rounded-xl p-2 transition-transform duration-300 hover:scale-110"/>
                
                {/* Content */}
                <div className="mt-6 text-center w-fit">
                  <div className="text-xs text-gray-500 mb-1">{event.date}</div>
                  <div className="font-semibold text-sm mb-1">{event.title}</div>
                    {event.company && (
                      <div className="text-xs text-gray-600 mb-1">{event.company}</div>
                    )}
                  <div className="text-xs text-gray-500 px-10">{event.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}