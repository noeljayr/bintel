"use client";

import Link from "next/link";
import Courses from "./Courses";
import "@/css/training.css";
import Events from "./Events";
import { useEffect, useState } from "react";

function HomeCourses() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [width]);

  return (
    <div className="home-courses flex flex-col gap-2 items-center mt-8 w-full">
      <h1 className="text-center opacity-85 home-h1-desktop">
        Professional Training Tailored To The Demands of The Modern Environments
      </h1>

      <h1 className="text-center opacity-85 home-h1-mobile">
        Professional Training for Modern Demands
      </h1>

      <div className="grid benefits gap-4">
        <span className="flex items-center opacity-75 gap-2">
          <span>1</span>
          Career-relevant content
        </span>

        <span className="flex items-center opacity-75 gap-2">
          <span>2</span>
          Learner-centered, hands-on delivery approach
        </span>

        <span className="flex items-center opacity-75 gap-2">
          <span>3</span>
          Access to industry-certified tools
        </span>

        <span className="flex items-center opacity-75 gap-2">
          <span>4</span>
          Excellent post-training support
        </span>
      </div>

      <div className="course-calendar relative w-full gap-4 mt-4">
        <div className="blob"></div>
        <div className="grassmorphic p-4 w-full flex flex-col gap-4">
          <span className="flex w-full gap-4">
            <span className="opacity-85 mr-auto font-medium">Courses</span>
            <Link
              className="all-courses font-semibold"
              href="/services/training"
            >
              All courses
            </Link>
          </span>

          <Courses limit={width >= 1440 ? 3 : 2} />
        </div>

        <Events limit={2} />
      </div>
    </div>
  );
}

export default HomeCourses;
