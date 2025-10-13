import { useEffect, useRef, useState } from "react";

export default function GridBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          perspective: "1200px",
          perspectiveOrigin: "50% 0%",
        }}
      >
        <div
          className="absolute top-0 left-1/2 w-[250%] h-[250%]"
          style={{
            transform: `translateX(-50%) rotateX(${65 + mousePosition.y * 2}deg) rotateZ(${mousePosition.x * 1.5}deg)`,
            transformOrigin: "top center",
            transformStyle: "preserve-3d",
            transition: "transform 0.3s ease-out",
            // Subtle professional grid using repeating gradients
            backgroundImage:
              "linear-gradient(to right, rgba(148, 163, 184, 0.09) 1px, transparent 1px), " +
              "linear-gradient(to bottom, rgba(148, 163, 184, 0.09) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            backgroundPosition: "center top",
            backgroundRepeat: "repeat",
          }}
        />
      </div>
      {/* Always-on bottom gradient overlay - sits outside perspective container */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "30%",
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,1) 100%)",
          zIndex: 10,
        }}
      />
    </>
  );
}

