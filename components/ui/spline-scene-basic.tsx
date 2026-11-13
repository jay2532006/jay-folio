'use client';

import { useEffect, useRef, useState } from "react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineSceneBasic() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightArmed, setSpotlightArmed] = useState(false);
  const [loadScene, setLoadScene] = useState(false);

  useEffect(() => {
    // Only load the heavy 3D Spline scene when the user approaches this section (rootMargin: 350px)
    // This frees 100% of network & CPU bandwidth for the Hero, transitions, and photos on mobile.
    if (!cardRef.current) return;
    const el = cardRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setSpotlightArmed(true);
            setLoadScene(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "350px 0px" }
    );
    io.observe(el);

    return () => {
      io.disconnect();
    };
  }, []);

  return (
    <Card ref={cardRef} className="w-full h-full rounded-none border-0 bg-black/[0.96] relative overflow-hidden">
      {spotlightArmed && (
        <Spotlight
          key="spotlight-armed"
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      )}

      <div className="flex flex-col md:flex-row h-full">
        <div className="flex-1 py-12 md:py-16 relative z-10 flex flex-col justify-center items-center md:items-end px-6 sm:px-10 md:pr-12 pointer-events-none text-center md:text-right">
          <div className="max-w-lg w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Decisions That Move.
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-neutral-300">
            I’m Jay Parmar — an AI/ML builder, finance analyst, and product leader at IIM Bangalore. I build useful systems, rally people around ambitious ideas, and stay with the work until it creates a real outcome.
          </p>
          </div>
        </div>

        <div className="flex-1 relative pointer-events-auto min-h-[350px] md:min-h-0">
          {loadScene && (
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          )}
        </div>
      </div>
    </Card>
  );
}

export default SplineSceneBasic;
