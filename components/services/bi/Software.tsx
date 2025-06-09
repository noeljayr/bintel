import { motion } from "motion/react";
import { transition, animate, initial } from "@/constants/Animations";

function Software() {
  return (
    <>
      <motion.h2 initial={initial} animate={animate} transition={transition}>
        Software
      </motion.h2>

      <motion.p initial={initial} animate={animate} transition={transition}>
        BI platforms and tools are at the core of any business intelligence
        strategy. These are the primary means through which your organization
        derives value from its BI investment. The choice of tools and platforms
        determines the utility of your BI project.
      </motion.p>
    </>
  );
}

export default Software;
