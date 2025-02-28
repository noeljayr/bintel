import { motion } from "framer-motion";
import { transition, animate, initial } from "@/constants/Animations";

function WhatWeOffer() {
  return (
    <>
      <motion.h2 initial={initial} animate={animate} transition={transition}>
        What We Offer
      </motion.h2>

      <motion.p initial={initial} animate={animate} transition={transition}>
        Comprehensive data management expertise and tools to ensure sound
        analysis.
      </motion.p>

      <motion.ul
        initial={initial}
        animate={animate}
        transition={transition}
        className="list-disc pl-4"
      >
        <li>
          Mobile data collection solutions - cloud-based data storage,
          questionnaire programming, data collection tablets, data collection
          tracking and reporting
        </li>
        <li>
          Support for data collection tools - KoboToolBox, SurveyCTO, CSPro,
          CommCare, ODK
        </li>
        <li>Research field team training</li>
        <li>Data entry and transcription</li>
        <li>
          On-premise or cloud-based data collection systems (installation and
          technical support)
        </li>
      </motion.ul>
    </>
  );
}

export default WhatWeOffer;
