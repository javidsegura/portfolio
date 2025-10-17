interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  company?: string;
}

interface TimelineProps {
  events?: TimelineEvent[];
}

const defaultEvents: TimelineEvent[] = [
  {
    title: "Software Engineer",
    company: "Tech Corp",
    date: "2024",
    description: "Built scalable systems"
  },
  {
    title: "Intern",
    company: "StartUp Inc",
    date: "2023",
    description: "Developed features"
  },
  {
    title: "Research Assistant",
    company: "University Lab",
    date: "2022",
    description: "ML research"
  },
  {
    title: "Open Source",
    company: "GitHub",
    date: "2021",
    description: "Contributing to projects"
  },
  {
    title: "Learning",
    company: "Self-taught",
    date: "2020",
    description: "Started coding journey"
  }
];

export default function Timeline({ events = defaultEvents }: TimelineProps) {
  return (
    <div className="w-full py-8">
      {/* Horizontal on large screens */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-300" />
          
          <div className="flex justify-between relative">
            {events.map((event, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                {/* Dot */}
                <div className="w-4 h-4 rounded-full bg-black relative z-10" />
                
                {/* Content */}
                <div className="mt-6 text-center max-w-[150px]">
                  <div className="text-xs text-gray-500 mb-1">{event.date}</div>
                  <div className="font-semibold text-sm mb-1">{event.title}</div>
                  {event.company && (
                    <div className="text-xs text-gray-600 mb-1">{event.company}</div>
                  )}
                  <div className="text-xs text-gray-500">{event.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical on small/medium screens */}
      <div className="lg:hidden">
        <div className="relative pl-8">
          {/* Vertical Line */}
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-300" />
          
          {events.map((event, index) => (
            <div key={index} className="relative mb-8 last:mb-0">
              {/* Dot */}
              <div className="absolute -left-6 w-4 h-4 rounded-full bg-black" />
              
              {/* Content */}
              <div>
                <div className="text-xs text-gray-500 mb-1">{event.date}</div>
                <div className="font-semibold text-sm mb-1">{event.title}</div>
                {event.company && (
                  <div className="text-xs text-gray-600 mb-1">{event.company}</div>
                )}
                <div className="text-xs text-gray-500">{event.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}