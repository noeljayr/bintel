import { motion } from "framer-motion";
import { transition, animate, initial } from "@/constants/Animations";
export const Vision = () => {
  return (
    <>
      <motion.h3
        className="opacity-50"
        initial={initial}
        animate={animate}
        transition={transition}
      >
        Vision
      </motion.h3>
      <motion.p initial={initial} animate={animate} transition={transition}>
        Bintel Analytics envisions a future where every organization operates
        within a vibrant, informed, and competitive business ecosystem powered
        by data-driven insights.
        <br /> <br />
        This vision is not only about leveraging technology—it’s about
        transforming how businesses, communities, and governments make
        decisions. At its core, the company believes that when data is
        accessible and understandable, it becomes the catalyst for innovation,
        growth, and sustainable development.
      </motion.p>
    </>
  );
};
