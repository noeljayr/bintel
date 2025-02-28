import { motion } from "framer-motion";
import { transition, animate, initial } from "@/constants/Animations";

function WhatWeOffer() {
  return (
    <>
      <motion.h2 initial={initial} animate={animate} transition={transition}>
        What We Offer
      </motion.h2>

      <motion.p initial={initial} animate={animate} transition={transition}>
        Our 360° BI offering combines detailed and structured planning with an
        agile implementation approach. Our team will help you:
      </motion.p>

      <motion.ul
        initial={initial}
        animate={animate}
        transition={transition}
        className="list-disc pl-4"
      >
        <li>Cultivate a data culture within your organization </li>
        <li>
          Build a business case and support for a business intelligence
          investment{" "}
        </li>
        <li>
          Assess your current ecosystem and identify needs and requirements{" "}
        </li>
        <li>
          Define the vision and objectives for your business intelligence
          project{" "}
        </li>
        <li>Align the BI strategy to the overall organizational strategy </li>
        <li>Create an implementation roadmap for BI deployment </li>
        <li>Build your BI team</li>
        <li>Define success criteria and measure </li>
      </motion.ul>
    </>
  );
}

export default WhatWeOffer;
