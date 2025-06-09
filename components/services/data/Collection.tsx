import { motion } from "motion/react";
import { transition, animate, initial } from "@/constants/Animations";

function Collection() {
  return (
    <>
      <motion.h2 initial={initial} animate={animate} transition={transition}>
        Collection
      </motion.h2>

      <motion.p initial={initial} animate={animate} transition={transition}>
        Data collection is a labour-intensive endeavour. Learn and access the
        right tools, technologies and processes to simplify and modernize your
        data sourcing tasks.
      </motion.p>
    </>
  );
}

export default Collection;
