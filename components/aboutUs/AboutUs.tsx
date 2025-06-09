import { motion } from "motion/react";
import { transition, animate, initial } from "@/constants/Animations";
export const AboutUs = () => {
  return (
    <>
      <motion.h3
        className="opacity-50"
        initial={initial}
        animate={animate}
        transition={transition}
      >
        How We Deliver Value
      </motion.h3>
      <motion.p initial={initial} animate={animate} transition={transition}>
        Our business is to prescribe systems, technologies and skills necessary
        for data-driven, informed business decision making. We create value by
        providing business intelligence {"(BI)"} and analytics solutions for
        organizations of all sizes, allowing them to source, store and utilize
        data to discover valuable and timely business insights.
        <br />
        <br />
        Bintel Analytics is a unique service provider offering full-stack BI and
        analytics solutions that cover every aspect of data-driven decision
        making; from data curation through analysis, mining, reporting,
        visualization to archiving.
      </motion.p>
    </>
  );
};
