"use client";

import Link from "next/link";
import Courses from "./Courses";
import "@/css/training.css";
import Events from "./Events";
import { useEffect, useState, useMemo } from "react";
import { motion } from "motion/react";

function HomeCourses() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setWidth(window.innerWidth);

    setWidth(window.innerWidth); // Set initial width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const courseLimit = useMemo(() => (width >= 1440 ? 3 : 2), [width]);

  const formatDate = (startDate: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    const date = new Date(startDate);
    const formattedStartDate = date.toLocaleDateString("en-GB", options);

    return formattedStartDate;
  };

  return (
    <div className="home-courses flex flex-col gap-2 items-center mt-8 w-full">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.85 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center opacity-85 home-h1-desktop"
      >
        Specialized Training for Today’s Business Environment
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.85 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center opacity-85 home-h1-mobile"
      >
        Specialized Training for Today’s Business Environment
      </motion.h1>

      <div className="grid benefits gap-4">
        {[
          "Career-relevant content",
          "Learner-centered, hands-on delivery approach",
          "Access to industry-certified tools",
          "Excellent post-training support",
        ].map((benefit, index) => {
          // let idx = index + 1;
          return (
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.85 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              key={index}
              className="flex items-center opacity-75 gap-2"
            >
              <span>{index + 1}</span>
              {benefit}
            </motion.span>
          );
        })}
      </div>

      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.35, ease: [0.25, 0.1, 0.25, 1] }}
        className="course-calendar relative w-full gap-4 mt-4"
      >
        <div className="blob"></div>
        <div className="grassmorphic p-4 w-full flex flex-col gap-4">
          <span className="flex w-full gap-4">
            <span className="opacity-85 mr-auto font-medium">Up coming trainings</span>
            <Link
              className="all-courses font-semibold"
              href="/services/training"
            >
              All courses
            </Link>
          </span>

          <Courses limit={courseLimit} />
        </div>

        <Events limit={2} />
      </motion.div>
    </div>
  );
}

export default HomeCourses;
