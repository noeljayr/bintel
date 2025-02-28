import { motion } from "framer-motion";
import { transition, animate, initial } from "@/constants/Animations";

function Strategy() {
  return (
    <>
     <motion.h2 initial={initial} animate={animate} transition={transition}>
        Strategy
      </motion.h2>

      <motion.p initial={initial} animate={animate} transition={transition}>
        Technologies and platforms alone are not sufficient to realize maximum
        value and return on your business intelligence investment. An effective
        and well-aligned strategy is as critical. Follow transformative BI
        roadmaps that take advantage of existing data, personnel and technology
        assets.
      </motion.p>
    </>
  );
}

export default Strategy;
