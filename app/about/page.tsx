"use client";

import Image from "next/image";
import Link from "next/link";
import banner from "@/public/banner.jpg";
import "@/css/about.css";
import "@/css/toc.css";
import cert1 from "@/public/certifications/1.png";
import cert2 from "@/public/certifications/2.png";
import cert3 from "@/public/certifications/3.png";
import cert4 from "@/public/certifications/4.png";
import cert5 from "@/public/certifications/5.png";
import cert6 from "@/public/certifications/6.png";
import cert7 from "@/public/certifications/7.png";
import cert8 from "@/public/certifications/8.png";
import { useState } from "react";
import { AboutUs } from "@/components/aboutUs/AboutUs";
import { Mission } from "@/components/aboutUs/Mission";
import { Vision } from "@/components/aboutUs/Vision";
import { FocusArea } from "@/components/aboutUs/FocusArea";

import walu from "@/public/team/walu-gondwe.jpg";
import bryan from "@/public/team/bryan-mthiko.jpg";
import malango from "@/public/team/malango-msukwa.jpg";
import jerome from "@/public/team/jerome-msampha.jpg";
import collins from "@/public/team/collins-zamawe.jpg";

const team = [
  {
    name: "Walu Gondwe",
    role: "Digital Solutions Specialist",
    image: walu,
  },
  {
    name: "Bryan Mthiko",
    role: "Data Specialist",
    image: bryan,
  },
  {
    name: "Malango Msukwa",
    role: "Director",
    image: malango,
  },
  {
    name: "Jerome Msampha",
    role: "Director",
    image: jerome,
  },
  {
    name: "Collins Zamawe",
    role: "Director",
    image: collins,
  },
];

const SECTIONS = [
  {
    id: "Area of focus",
    number: "01",
    component: <FocusArea />,
  },
  {
    id: "How We Deliver Value",
    number: "02",
    component: <AboutUs />,
  },
  {
    id: "Mission",
    number: "03",
    component: <Mission />,
  },
  {
    id: "Vision",
    number: "04",
    component: <Vision />,
  },
] as const;

const TocItem: React.FC<{
  id: string;
  number: string;
  activeSection: string;
  setActiveSection: (id: string) => void;
}> = ({ id, number, activeSection, setActiveSection }) => {
  const isActive = activeSection === id;
  const textClass = isActive
    ? "font-semibold opacity-100 cursor-default"
    : "opacity-50";

  return (
    <span
      onClick={() => setActiveSection(id)}
      className="title cursor-pointer flex gap-4 items-center"
    >
      <span className={textClass}>{number}</span>
      <span className={textClass}>{id}</span>
    </span>
  );
};

function About() {
  const [activeSection, setActiveSection] = useState<string>("Area of focus");

  return (
    <div className="page">
      <div className="banner flex flex-col gap-2 justify-center p-4 relative w-full">
        <Image priority src={banner} className="absolute" alt="banner" />
        <div className="breadcrumbs flex items-center gap-2">
          <Link href="/">home</Link>
          <span></span>
          <Link href="/about">about</Link>
        </div>
        <h1 className="gradient-text">Bintel’s Profile.</h1>
      </div>

      <div className="certifications w-full px-4 flex items-center justify-center">
        <Image src={cert1} alt="certification" />
        <Image src={cert2} alt="certification" />
        <Image src={cert3} alt="certification" />
        <Image src={cert4} alt="certification" />
        <Image src={cert5} alt="certification" />
        <Image src={cert6} alt="certification" />
        <Image src={cert7} alt="certification" />
        <Image src={cert8} alt="certification" />
      </div>

      <div className="page-content mx-auto mt-4 flex flex-col gap-4 relative">
        <div className="toc-grid grid gap-4 w-full">
          <div className="toc flex flex-col gap-2 p-4">
            {SECTIONS.map((section) => (
              <TocItem
                key={section.id}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                {...section}
              />
            ))}
          </div>

          <div className="toc-content w-full flex flex-col grassmorphic p-4">
            {SECTIONS.find((s) => s.id === activeSection)?.component}
          </div>
        </div>
        <div className="grassmorphic flex flex-col gap-1 p-4 w-fill">
          <h3 className="opacity-50">Meet the Directors</h3>
          <p className="opacity-85">
            Our professional and skilled team is the foundation of our success.
          </p>

          <div className="team-grid grid gap-4 mt-2">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col relative items-center">
                <Image src={member.image} alt={member.name} />
                <div className="absolute flex flex-col left-2 bottom-2">
                  <span className="font-semibold">{member.name}</span>
                  <span className="role">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
