import { motion } from "motion/react";
import { transition, animate, initial } from "@/constants/Animations";

function Hardware() {
  return (
    <>
      <motion.h2 initial={initial} animate={animate} transition={transition}>
        Hardware
      </motion.h2>

      <motion.p initial={initial} animate={animate} transition={transition}>
        Direct and indirect costs of IT hardware significantly move your overall
        BI budget. Hardware as a Service (HaaS) and Platform as a Service (PaaS)
        models have drastically changed the computing landscape. Choose the most
        cost effective approach for your business.
      </motion.p>
    </>
  );
}

export default Hardware;
