import { motion } from "framer-motion";
import { transition, animate, initial } from "@/constants/Animations";

function WhatWeOffer() {
  return (
    <>
      <motion.h2 initial={initial} animate={animate} transition={transition}>
        What We Offer
      </motion.h2>

      <motion.p initial={initial} animate={animate} transition={transition}>
        Research services designed to help you develop products, services and
        interventions that respond to your most relevant business and social
        needs.
      </motion.p>

      <motion.ul
        initial={initial}
        animate={animate}
        transition={transition}
        className="list-disc pl-4"
      >
        <li>
          Market and industry analysis - We help you analyze your industry,
          quantify market size, develop your markent segments and cquire niche
          information and solidify your business planning. Discover the word on
          the market through opinion polls and sentiment analysis
        </li>
        <li>
          Social and behavioural change research - social research design and
          report writting.
        </li>
        <li>
          Academic research - Undergraduate and postgraduate research support
          including data collection tools development, analysis and research
          capacity building
        </li>
      </motion.ul>
    </>
  );
}

export default WhatWeOffer;
