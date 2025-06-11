"use client";

import React, { useEffect, useRef } from "react";
import { useRive } from "@rive-app/react-canvas";
import { useInView } from "motion/react";

function HighlightAnimation() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: "-200px" });

  const { rive, RiveComponent } = useRive({
    src: "/animations/highlights.riv",
    stateMachines: "default",
    autoplay: false,
  });

  useEffect(() => {
    if (!rive) return;
    if (isInView) {
      rive.play();
    }
  }, [isInView, rive]);

  return (
    <div ref={ref} className="absolute w-full h-full top-0 left-0">
      <RiveComponent width="100%" height="100%" />
    </div>
  );
}

export default HighlightAnimation;
