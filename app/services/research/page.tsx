"use client";

import Image from "next/image";
import Link from "next/link";
import banner from "@/public/banner.jpg";
import LiveChatToggle from "@/components/LiveChat/LiveChatToggle";
import serviceImage from "@/public/services/bintel-analytics-research-services.png";
import "@/css/services.css";
import "@/css/toc.css";
import { IconCheck } from "@tabler/icons-react";

import WhatWeOffer from "@/components/services/research/WhatWeOffer";
import { useState } from "react";
import Research from "@/components/services/research/Research";

const SECTIONS = [
  {
    id: "What We Offer",
    number: "01",
    component: <WhatWeOffer />,
  },
  {
    id: "Research",
    number: "02",
    component: <Research />,
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

function Page() {
  const [activeSection, setActiveSection] = useState<string>("What We Offer");

  return (
    <div className="page gap-4">
      <div className="banner flex flex-col gap-2 justify-center p-8 relative w-full">
        <Image src={banner} className="absolute" alt="banner" />
        <div className="breadcrumbs flex items-center gap-2">
          <Link href="/">home</Link>
          <span></span>
          <Link href="/services">services</Link>
          <span></span>
          <Link href="/data-research">Research</Link>
        </div>
        <h1 className="gradient-text">Research & Projects Support</h1>
      </div>

      <div className="services-grid grid gap-4">
        <div className="service-image flex flex-col items-center justify-center">
          <Image src={serviceImage} className="absolute" alt="service image" />
          <h2 className="text-center">
            Insight-Driven Research & Strategic Project Support
          </h2>
          <LiveChatToggle variant="cta-2" label="Get started" />
        </div>

        <div className="service-content flex flex-col gap-2 grassmorphic">
          <h2>
            Systematically Address Your Business{`'`} Most Challenging
            Questions.
          </h2>
          <p>
            Research and project support services crafted to answer your
            business{`'`} most challenging questions. We cover market research,
            development research projects, project M&E, academic research
            support and training.
          </p>

          <div className="flex flex-col gap-2 mt-2">
            <span className="font-semibold opacity-85">
              Why Choose Our Research Services?
            </span>

            <div className="grid gap-4">
              <span className="flex items-center justity-center">
                <span className="icon">
                  <IconCheck />
                </span>
                <span className="opacity-85">
                  Bintel{`'`}s esearch project management portfolio
                </span>
              </span>

              <span className="flex items-center justity-center">
                <span className="icon">
                  <IconCheck />
                </span>
                <span className="opacity-85">
                  Our globaly-accepted professional certifications in research
                  ethics
                </span>
              </span>

              <span className="flex items-center justity-center">
                <span className="icon">
                  <IconCheck />
                </span>
                <span className="opacity-85">
                  Partnership with; and support from global research service
                  providers
                </span>
              </span>

              <span className="flex items-center justity-center">
                <span className="icon">
                  <IconCheck />
                </span>
                <span className="opacity-85">
                  Excellent customer support service
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

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

        <div className="toc-content w-full flex flex-col grassmorphic p-4 gap-2">
          {SECTIONS.find((s) => s.id === activeSection)?.component}
        </div>
      </div>
    </div>
  );
}

export default Page;
