import { motion } from "motion/react";
import { transition, animate, initial } from "@/constants/Animations";

function Research() {
  return (
    <>
      <motion.h2 initial={initial} animate={animate} transition={transition}>
        Research
      </motion.h2>

      <motion.p initial={initial} animate={animate} transition={transition}>
        Research is an irreplaceable tool for any business or social enterprise.
        Let us help you design and execute your research projects efficiently
        and effectively.
      </motion.p>
    </>
  );
}

export default Research;
