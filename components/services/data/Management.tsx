import { motion } from "framer-motion";
import { transition, animate, initial } from "@/constants/Animations";

function Management() {
  return (
    <>
      <motion.h2 initial={initial} animate={animate} transition={transition}>
        Management
      </motion.h2>

      <motion.p initial={initial} animate={animate} transition={transition}>
        Data management is a skill-intensive task that ensures data is of
        high-quality and fit for purpose. Employ the right technical expertise,
        data management procedures and tools.
      </motion.p>
    </>
  );
}

export default Management;
