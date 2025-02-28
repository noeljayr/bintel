
import { motion } from "framer-motion";
import Image from "next/image";
import verified from "@/public/icons/verify.png";
import briefCase from "@/public/icons/tabler-icon-briefcase-filled.png";
import group from "@/public/icons/tabler-icon-users-group.png";
import { transition, animate, initial } from "@/constants/Animations";

export const FocusArea = () => {
  return (
    <>
      <motion.h3
        className="opacity-50"
        initial={initial}
        animate={animate}
        transition={transition}
      >
        FocusArea
      </motion.h3>
      <motion.div
        className="focus-area grid gap-4"
        initial={initial}
        animate={animate}
        transition={transition}
      >
        <div className="flex flex-col p-4 card gap-2">
          <div className="flex items-center">
            <span className="icon flex items-center justify-center">
              <Image src={briefCase} alt="" />
            </span>
            <span className="font-bold opacity-85">Projects</span>
          </div>
          <ul className="flex flex-col opacity-85 gap-1 list-disc pl-3">
            <li>Enterprise BI dashboards</li>
            <li>Field research technical support</li>
            <li>ICT infrastructure</li>
            <li>Software development</li>
            <li>Capacity building</li>
          </ul>
        </div>

        <div className="flex flex-col p-4 card gap-2">
          <div className="flex items-center">
            <span className="icon flex items-center justify-center">
              <Image src={group} alt="" />
            </span>
            <span className="font-bold opacity-85">Industry Verticals</span>
          </div>
          <ul className="flex flex-col opacity-85 gap-1 list-disc pl-3">
            <li>e-Governance</li>
            <li>Insurance, Banking & Fintech</li>
            <li>Monitoring & Evaluation</li>
            <li>Cybersecurity</li>
            <li>Health Informatics</li>
          </ul>
        </div>

        <div className="flex flex-col p-4 card gap-2">
          <div className="flex items-center">
            <span className="icon flex items-center justify-center">
              <Image src={verified} alt="" />
            </span>
            <span className="font-bold opacity-85">Expertise</span>
          </div>
          <ul className="flex flex-col opacity-85 gap-1 list-disc pl-3">
            <li>Machine Learning</li>
            <li>Software Engineering</li>
            <li>Big Data Analytics</li>
            <li>Data Science & Management</li>
            <li>Research Design</li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};
