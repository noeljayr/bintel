import { motion } from "motion/react";
import { transition, animate, initial } from "@/constants/Animations";

function Integration() {
  return (
    <>
      <motion.h2 initial={initial} animate={animate} transition={transition}>
        Integration
      </motion.h2>

      <motion.p initial={initial} animate={animate} transition={transition}>
        Your business intelligence efforts must aim at simplifying and
        centralizing data-driven decision making. This makes integration a major
        prerequisite for effective BI. Enable your separate systems to talk to
        each other and achieve common enterprise goals.
      </motion.p>
    </>
  );
}

export default Integration;
