"use client";

import { useRive } from "@rive-app/react-canvas";
import React, { useEffect, useRef } from "react";
import { useInView } from "motion/react";

function Automation() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref);

  const { rive, RiveComponent } = useRive({
    src: "/animations/automation.riv",
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
    <div ref={ref} className="absolute w-[200%] flex h-[200%]">
      <RiveComponent width={'100%'} height={'100%'} />
    </div>
  );
}

export default Automation;
