'use client';

import { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
  onLoad?: (splineApp: any) => void;
}

export function SplineScene({ scene, className, onLoad }: SplineSceneProps) {
  const handleLoad = (splineApp: any) => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth < 768;
      const targetDpr = isMobile
        ? Math.min(window.devicePixelRatio || 1, 1.5)
        : (window.devicePixelRatio || 1);

      try {
        if (typeof splineApp?.setPixelRatio === "function") {
          splineApp.setPixelRatio(targetDpr);
        } else if (typeof splineApp?._renderer?.setPixelRatio === "function") {
          splineApp._renderer.setPixelRatio(targetDpr);
        } else if (typeof splineApp?.renderer?.setPixelRatio === "function") {
          splineApp.renderer.setPixelRatio(targetDpr);
        }
      } catch (err) {
        console.warn("Could not cap Spline DPR:", err);
      }
    }
    onLoad?.(splineApp);
  };

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-xs tracking-[0.18em] text-neutral-500 uppercase animate-pulse">
            Loading scene…
          </span>
        </div>
      }
    >
      <Spline scene={scene} className={className} onLoad={handleLoad} />
    </Suspense>
  );
}
