import { motion } from "framer-motion";
import { transition, animate, initial } from "@/constants/Animations";

function DataScience() {
  return (
    <>
      <motion.h2 initial={initial} animate={animate} transition={transition}>
        DataScience
      </motion.h2>

      <motion.p initial={initial} animate={animate} transition={transition}>
        Leverage the power of advanced data science techniques and take your
        data-driven decision making to the next level.
      </motion.p>
    </>
  );
}

export default DataScience;
