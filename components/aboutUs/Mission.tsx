import { motion } from "motion/react";
import { transition, animate, initial } from "@/constants/Animations";

export const Mission = () => {
  return (
    <>
      <motion.h3
        className="opacity-50"
        initial={initial}
        animate={animate}
        transition={transition}
      >
        Mission
      </motion.h3>
      <motion.p initial={initial} animate={animate} transition={transition}>
        Bintel Analytics Limited is dedicated to empowering organizations
        through comprehensive business intelligence and analytics solutions. Our
        mission is to equip clients with the tools and expertise necessary to
        source, store, and utilize data effectively, enabling the discovery of
        valuable insights and facilitating informed decision-making.
        <br />
        <br />
        Our unique approach offers full-stack business intelligence solutions
        that encompass every aspect of data-driven decision-making—from data
        curation and analysis to mining, reporting, visualization, and
        archiving.
      </motion.p>
    </>
  );
};
