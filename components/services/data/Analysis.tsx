import { motion } from "motion/react";
import { transition, animate, initial } from "@/constants/Animations";

function Analysis() {
  return (
    <>
      <motion.h2 initial={initial} animate={animate} transition={transition}>
        Analysis
      </motion.h2>

      <motion.p initial={initial} animate={animate} transition={transition}>
        Quick, reliable and actionable insights are the ultimate value of your
        business intelligence (BI) investment. Tap into our analytic expertise
        and reduce total cost of implementation and ownership.
      </motion.p>
    </>
  );
}

export default Analysis;
