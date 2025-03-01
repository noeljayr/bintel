"use client";

import Image from "next/image";
import Link from "next/link";
import banner from "@/public/banner.jpg";
import LiveChatToggle from "@/components/LiveChat/LiveChatToggle";
import serviceImage from "@/public/services/bintel-it-infrastructure.png";
import { IconCheck } from "@tabler/icons-react";
import "@/css/services.css";
import "@/css/toc.css";
import WhatWeOffer from "@/components/services/bi/WhatWeOffer";
import Strategy from "@/components/services/bi/Strategy";
import Software from "@/components/services/bi/Software";
import Hardware from "@/components/services/bi/Hardware";
import Integration from "@/components/services/bi/Integration";
import { useState } from "react";

const SECTIONS = [
  {
    id: "What We Offer",
    number: "01",
    component: <WhatWeOffer />,
  },
  {
    id: "Strategy",
    number: "02",
    component: <Strategy />,
  },
  {
    id: "Software",
    number: "03",
    component: <Software />,
  },
  {
    id: "Hardware",
    number: "04",
    component: <Hardware />,
  },

  {
    id: "Integration",
    number: "05",
    component: <Integration />,
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
    <div className="page gap-4 service-page">
      <div className="banner flex flex-col gap-2 justify-center p-8 relative w-full">
        <Image priority src={banner} className="absolute" alt="banner" />
        <div className="breadcrumbs flex items-center gap-2">
          <Link href="/">home</Link>
          <span></span>
          <Link href="/services">services</Link>
          <span></span>
          <Link href="/bi-it-infrastructure">BI and IT Infrastructure</Link>
        </div>
        <h1 className="gradient-text">
          Business Intelligence & IT Infrastructure.
        </h1>
      </div>

      <div className="services-grid grid gap-4">
        <div className="service-image flex flex-col items-center justify-center">
          <Image src={serviceImage} className="absolute" alt="service image" />
          <h2 className="text-center">
            Build the Backbone for Business Intelligence.
          </h2>
          <LiveChatToggle variant="cta-2" label="Get started" />
        </div>

        <div className="service-content flex flex-col gap-2 grassmorphic">
          <h2>Get more value from your IT & BI projects</h2>
          <p className="opacity-85">
            Let us help you craft a digital transformation roadmap and tailor IT
            and BI strategies that empower your business with data-driven
            decisions. We have you covered every step of the way.
          </p>

          <div className="flex flex-col gap-2 mt-2">
            <span className="font-semibold opacity-85">
              Looking for unmatched BI and IT managed services? Here’s why we
              stand out:
            </span>

            <div className="grid gap-4">
              <span className="flex items-center justity-center">
                <span className="icon">
                  <IconCheck />
                </span>
                <span className="opacity-85">
                  Pro-active 24/7 monitoring and support{" "}
                </span>
              </span>

              <span className="flex items-center justity-center">
                <span className="icon">
                  <IconCheck />
                </span>
                <span className="opacity-85">
                  Predictable IT/BI support costs{" "}
                </span>
              </span>

              <span className="flex items-center justity-center">
                <span className="icon">
                  <IconCheck />
                </span>
                <span className="opacity-85">Flexible pricing models </span>
              </span>

              <span className="flex items-center justity-center">
                <span className="icon">
                  <IconCheck />
                </span>
                <span className="opacity-85">
                  Cost reduction on IT/BI teams{" "}
                </span>
              </span>

              <span className="flex items-center justity-center">
                <span className="icon">
                  <IconCheck />
                </span>
                <span className="opacity-85">
                  Negotiable service metrics to suit your needs{" "}
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
