import banner from "@/public/banner.jpg";
import Image from "next/image";
import logo from "@/public/logo/bintel-white.png";
import "@/css/index.css";
import laptop from "@/public/120782.png";
import Link from "next/link";
import {
  IconCheck,
  IconChevronRight,
  IconMailFilled,
} from "@tabler/icons-react";

import mg from "@/public/clients/mg.png";
import amref from "@/public/clients/amref.png";
import tgf from "@/public/clients/tgf.png";
import mbs from "@/public/clients/mbs.png";
import rring from "@/public/clients/rring.png";
import cdm from "@/public/clients/cdm.png";
import report from "@/public/services/report.png";
import database from "@/public/services/database.png";
import brain from "@/public/services/brain.png";
import data from "@/public/services/data-analysis.png";

import integration from "@/public/automation.png";
import tablets from "@/public/tablets.png";
import HomeCourses from "@/components/training/HomeCourses";
import { HighlightsCards } from "@/components/Highlights";
import LiveChatToggle from "@/components/LiveChat/LiveChatToggle";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="home-page gap-4 mb-16 flex flex-col w-full">
      <div className="hero flex flex-col gap-2 justify-center relative w-full">
        <div className="absolute flex flex-col gap-2">
          <Image src={logo} alt="bintel logo" className="logo" />
          <Link style={{color: "var(--secondary)"}} href="" className="flex gap-2">
            Secure Your Spot for 2025 trainings <ChevronRight />
          </Link>
          <h1 className="gradient-text">
            Business Intelligence & Analytics Services.
          </h1>
        </div>

        <Image priority src={banner} alt="hero image" className="hero-image" />
      </div>

      <div className="hero-tag relative w-full gap-4 grid">
        <div className="blob absolute"></div>
        <div className="relative tagline flex flex-col items-center justify-center">
          <Image src={laptop} alt="laptop" />
          <h2 className="text-center absolute px-8">
            Unleash the power of data to propel your business.
          </h2>
        </div>
        <div className="grassmorphic p-4 flex flex-col gap-2">
          <h2 className="opacity-85">Trusted by Industry Leaders</h2>
          <p className="opacity-85">
            We’ve partnered with a diverse range of organizations from local
            government and private enterprises to international humanitarian
            agencies.
          </p>
          <Link className="cta-3 mt-4" href="/about">
            Our profile
            <IconChevronRight />
          </Link>

          <span className="clients mt-auto flex flex-col gap-2 p-2 items-center">
            <span className="font-semibold opacity-50">
              Our Reputable clients
            </span>

            <span className="grid w-full gap-2">
              <span>
                <Image src={mg} alt="client" />
              </span>
              <span>
                <Image src={tgf} alt="client" />
              </span>
              <span>
                <Image src={rring} alt="client" />
              </span>
              <span>
                <Image src={amref} alt="client" />
              </span>
              <span>
                <Image src={mbs} alt="client" />
              </span>
              <span>
                <Image src={cdm} alt="client" />
              </span>
            </span>
          </span>
        </div>
        <div className="grassmorphic relative p-4 flex flex-col gap-2">
          <h2 className="opacity-85">Realtime highlights</h2>
          <HighlightsCards />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div id="services" className="services grid justify-between">
          <div className="flex flex-col text gap-2 h-full">
            <h2 className="gradient-text">
              360° Business intelligence & Data Analytics services
            </h2>
            <p className="opacity-85">
              By putting our clients at the center of everything we do, our
              service delivery model consistently delivers tangible, measurable
              results.
            </p>

            <div className="relative mt-auto cta-svg-container flex flex-col gap-2">
              <svg
                className="svg-top"
                width="128"
                height="97"
                viewBox="0 0 128 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M122.333 93.5C122.333 92.0272 123.527 90.8333 125 90.8333C126.473 90.8333 127.667 92.0272 127.667 93.5C127.667 94.9728 126.473 96.1667 125 96.1667C123.527 96.1667 122.333 94.9728 122.333 93.5ZM-17 0.5H56V1.5H-17V0.5ZM71.5 16V78.5H70.5V16H71.5ZM86 93H125V94H86V93ZM71.5 78.5C71.5 86.5081 77.9919 93 86 93V94C77.4396 94 70.5 87.0604 70.5 78.5H71.5ZM56 0.5C64.5604 0.5 71.5 7.43958 71.5 16H70.5C70.5 7.99187 64.0081 1.5 56 1.5V0.5Z"
                  fill="#F9D157"
                />
              </svg>

              <svg
                className="svg-left"
                width="300"
                height="7"
                viewBox="0 0 300 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M1.00033 2.90234C0.724188 2.90216 0.500182 3.12587 0.5 3.40201C0.499818 3.67816 0.723528 3.90216 0.99967 3.90234L1.00033 2.90234ZM294.333 3.59587C294.332 5.06863 295.525 6.26333 296.998 6.2643C298.471 6.26527 299.666 5.07215 299.667 3.59939C299.668 2.12663 298.474 0.931938 297.002 0.930967C295.529 0.929995 294.334 2.12311 294.333 3.59587ZM0.99967 3.90234L297 4.09763L297 3.09763L1.00033 2.90234L0.99967 3.90234Z"
                  fill="url(#paint0_linear_391_181)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_391_181"
                    x1="16.8898"
                    y1="3.91283"
                    x2="296.999"
                    y2="4.09763"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F9D157" stopOpacity="0" />
                    <stop offset="1" stopColor="#F9D157" />
                  </linearGradient>
                </defs>
              </svg>

              <LiveChatToggle
                variant="cta-2"
                className="relative"
                label="Enquire a service"
              />

              <svg
                className="svg-right"
                width="300"
                height="7"
                viewBox="0 0 300 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M1.00033 2.90234C0.724188 2.90216 0.500182 3.12587 0.5 3.40201C0.499818 3.67816 0.723528 3.90216 0.99967 3.90234L1.00033 2.90234ZM294.333 3.59587C294.332 5.06863 295.525 6.26333 296.998 6.2643C298.471 6.26527 299.666 5.07215 299.667 3.59939C299.668 2.12663 298.474 0.931938 297.002 0.930967C295.529 0.929995 294.334 2.12311 294.333 3.59587ZM0.99967 3.90234L297 4.09763L297 3.09763L1.00033 2.90234L0.99967 3.90234Z"
                  fill="url(#paint0_linear_391_181)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_391_181"
                    x1="16.8898"
                    y1="3.91283"
                    x2="296.999"
                    y2="4.09763"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F9D157" stopOpacity="0" />
                    <stop offset="1" stopColor="#F9D157" />
                  </linearGradient>
                </defs>
              </svg>

              <svg
                className="svg-bottom"
                width="48"
                height="54"
                viewBox="0 0 48 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M0.333333 3.5C0.333333 4.97276 1.52724 6.16667 3 6.16667C4.47276 6.16667 5.66667 4.97276 5.66667 3.5C5.66667 2.02724 4.47276 0.833333 3 0.833333C1.52724 0.833333 0.333333 2.02724 0.333333 3.5ZM47 87C47.2761 87 47.5 86.7761 47.5 86.5C47.5 86.2239 47.2761 86 47 86V87ZM2.5 3.5V71.5H3.5V3.5H2.5ZM18 87H47V86H18V87ZM2.5 71.5C2.5 80.0604 9.43959 87 18 87V86C9.99187 86 3.5 79.5081 3.5 71.5H2.5Z"
                  fill="#F9D157"
                />
              </svg>
            </div>
          </div>

          <div className="service-container relative grid items-center justify-center gap-8">
            <div className="service">
              <span className="icon flex items-center justify-center">
                <Image src={report} alt="icon" />
              </span>
              <span className="font-bold opacity-85">
                Business Intelligence and IT Infrastructure
              </span>
              <p className="opacity-85">
                Enterprise computing and storage systems to support your BI
                applications
              </p>
              <Link
                href="/services/"
                className="font-semibold flex gap-1 items-center opacity-85"
              >
                Learn more
                <IconChevronRight />
              </Link>
            </div>
            <div className="service">
              <span className="icon flex items-center justify-center">
                <Image src={database} alt="icon" />
              </span>
              <span className="font-bold opacity-85">
                Data Collection, Management and Analysis
              </span>
              <p className="opacity-85">
                Data collection is a labour-intensive. Access the right tools
                and technologies to simplify your data sourcing tasks.
              </p>
              <Link
                href="/services/"
                className="font-semibold flex gap-1 items-center opacity-85"
              >
                Learn more
                <IconChevronRight />
              </Link>
            </div>
            <div className="service">
              <span className="icon flex items-center justify-center">
                <Image src={brain} alt="icon" />
              </span>
              <span className="font-bold opacity-85">
                Business Intelligence and Analytics Training
              </span>
              <p className="opacity-85">
                Advancing careers through capacity building in B/IT
                technologies. Propel your career into the future.
              </p>
              <Link
                href="/services/"
                className="font-semibold flex gap-1 items-center opacity-85"
              >
                Learn more
                <IconChevronRight />
              </Link>
            </div>
            <div className="service">
              <span className="icon flex items-center justify-center">
                <Image src={data} alt="icon" />
              </span>
              <span className="font-bold opacity-85">Research Services</span>
              <p className="opacity-85">
                social research design, market research, opinion polls, academic
                research technical assistance and report writing
              </p>
              <Link
                href="/services/"
                className="font-semibold flex gap-1 items-center opacity-85"
              >
                Learn more
                <IconChevronRight />
              </Link>
            </div>

            <span className="svg-hr grid gap-4 absolute">
              <svg
                width="454"
                height="6"
                viewBox="0 0 454 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M453.001 2.5C453.277 2.49938 453.501 2.27503 453.5 1.99888C453.499 1.72274 453.275 1.49938 452.999 1.5L453.001 2.5ZM5.66666 2.99851C5.66337 1.52576 4.4668 0.334517 2.99405 0.337804C1.52129 0.341092 0.33005 1.53766 0.333337 3.01042C0.336625 4.48317 1.53319 5.67441 3.00595 5.67112C4.47871 5.66784 5.66994 4.47127 5.66666 2.99851ZM452.999 1.5L2.99888 2.50447L3.00111 3.50446L453.001 2.5L452.999 1.5Z"
                  fill="url(#paint0_linear_36_82)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_36_82"
                    x1="452.999"
                    y1="1.5"
                    x2="2.99888"
                    y2="2.50447"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F9D157" stopOpacity="0" />
                    <stop offset="1" stopColor="#F9D157" />
                  </linearGradient>
                </defs>
              </svg>

              <svg
                width="454"
                height="6"
                viewBox="0 0 454 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M453.001 2.5C453.277 2.49938 453.501 2.27503 453.5 1.99888C453.499 1.72274 453.275 1.49938 452.999 1.5L453.001 2.5ZM5.66666 2.99851C5.66337 1.52576 4.4668 0.334517 2.99405 0.337804C1.52129 0.341092 0.33005 1.53766 0.333337 3.01042C0.336625 4.48317 1.53319 5.67441 3.00595 5.67112C4.47871 5.66784 5.66994 4.47127 5.66666 2.99851ZM452.999 1.5L2.99888 2.50447L3.00111 3.50446L453.001 2.5L452.999 1.5Z"
                  fill="url(#paint0_linear_36_82)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_36_82"
                    x1="452.999"
                    y1="1.5"
                    x2="2.99888"
                    y2="2.50447"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F9D157" stopOpacity="0" />
                    <stop offset="1" stopColor="#F9D157" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        </div>

        <div className="more-services gap-3 w-full flex flex-col items-center justify-center">
          <span className="blob"></span>
          <div className="grid w-full gap-3">
            <div className="more-s-image">
              <Image src={tablets} alt="tablets" />
            </div>
            <div className="grassmorphic justify-center p-8 flex flex-col gap-2">
              <h2 className="opacity-85">
                Simplify Your Data Collection Processes
              </h2>
              <p className="opacity-85">
                Elevate your field operations with our state-of-the-art rental
                data collection tablets—capture real-time insights and drive
                smarter decisions on the go.
              </p>

              <LiveChatToggle
                variant="cta-3"
                label="Details"
                className="mt-4"
              />
              <span className="grid benefits gap-4 mt-4">
                <span className="flex items-center opacity-75 gap-2 font-semibold">
                  <span>
                    <IconCheck />
                  </span>
                  Advanced Technology
                </span>

                <span className="flex items-center opacity-75 gap-2 font-semibold">
                  <span>
                    {" "}
                    <IconCheck />
                  </span>
                  Flexible Rental Plans
                </span>

                <span className="flex items-center opacity-75 gap-2 font-semibold">
                  <span>
                    <IconCheck />
                  </span>
                  Durable & Reliable
                </span>

                <span className="flex items-center opacity-75 gap-2 font-semibold">
                  <span>
                    <IconCheck />
                  </span>
                  Robust Data Security
                </span>
              </span>
            </div>
          </div>

          <div className="grid automation w-full gap-3">
            <div className="grassmorphic justify-center p-8 flex flex-col gap-2">
              <h2 className="opacity-85">
                AI-Driven Automation for the Modern Era
              </h2>
              <p className="opacity-85">
                Step into the future with advanced AI solutions designed to
                transform your business processes. We streamline everyday tasks
                and optimize complex processes, freeing your team to focus on
                innovation and growth.
              </p>
              <LiveChatToggle
                variant="cta-3"
                label="Details"
                className="mt-4"
              />
              <span className="grid benefits gap-4 mt-4">
                <span className="flex items-center opacity-75 gap-2 font-semibold">
                  <span>
                    <IconCheck />
                  </span>
                  AI Customer Support
                </span>

                <span className="flex items-center opacity-75 gap-2 font-semibold">
                  <span>
                    {" "}
                    <IconCheck />
                  </span>
                  Invoice Generation
                </span>

                <span className="flex items-center opacity-75 gap-2 font-semibold">
                  <span>
                    <IconCheck />
                  </span>
                  Social Media Management
                </span>

                <span className="flex items-center opacity-75 gap-2 font-semibold">
                  <span>
                    <IconCheck />
                  </span>
                  Quote Management
                </span>
              </span>
            </div>
            <div className="more-s-image">
              <Image src={integration} alt="integration" />
            </div>
          </div>
        </div>
      </div>

      <HomeCourses />

      <div className="subscribe relative overflow-hidden flex flex-col gap-2 w-full">
        <svg
          className="svg-top svg-path absolute"
          width="68"
          height="99"
          viewBox="0 0 68 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M1 -32.5C0.723858 -32.5 0.5 -32.2761 0.5 -32C0.5 -31.7239 0.723858 -31.5 1 -31.5V-32.5ZM12.8333 95.5C12.8333 96.9728 14.0272 98.1667 15.5 98.1667C16.9728 98.1667 18.1667 96.9728 18.1667 95.5C18.1667 94.0272 16.9728 92.8333 15.5 92.8333C14.0272 92.8333 12.8333 94.0272 12.8333 95.5ZM1 -31.5H52.5V-32.5H1V-31.5ZM67 -17V-5H68V-17H67ZM52.5 9.5H30.5V10.5H52.5V9.5ZM15 25V95.5H16V25H15ZM30.5 9.5C21.9396 9.5 15 16.4396 15 25H16C16 16.9919 22.4919 10.5 30.5 10.5V9.5ZM67 -5C67 3.00813 60.5081 9.5 52.5 9.5V10.5C61.0604 10.5 68 3.56041 68 -5H67ZM52.5 -31.5C60.5081 -31.5 67 -25.0081 67 -17H68C68 -25.5604 61.0604 -32.5 52.5 -32.5V-31.5Z"
            fill="#F9D157"
          />
        </svg>

        <svg
          className="svg-left svg-path absolute"
          width="128"
          height="97"
          viewBox="0 0 128 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M122.333 93.5C122.333 92.0272 123.527 90.8333 125 90.8333C126.473 90.8333 127.667 92.0272 127.667 93.5C127.667 94.9728 126.473 96.1667 125 96.1667C123.527 96.1667 122.333 94.9728 122.333 93.5ZM-17 0.5H56V1.5H-17V0.5ZM71.5 16V78.5H70.5V16H71.5ZM86 93H125V94H86V93ZM71.5 78.5C71.5 86.5081 77.9919 93 86 93V94C77.4396 94 70.5 87.0604 70.5 78.5H71.5ZM56 0.5C64.5604 0.5 71.5 7.43958 71.5 16H70.5C70.5 7.99187 64.0081 1.5 56 1.5V0.5Z"
            fill="#F9D157"
          />
        </svg>

        <svg
          className="svg-right svg-path absolute"
          width="145"
          height="97"
          viewBox="0 0 145 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M5.66667 93.5C5.66667 92.0272 4.47276 90.8333 3 90.8333C1.52724 90.8333 0.333328 92.0272 0.333328 93.5C0.333328 94.9728 1.52724 96.1667 3 96.1667C4.47276 96.1667 5.66667 94.9728 5.66667 93.5ZM145 0.5H72V1.5H145V0.5ZM56.5 16V78.5H57.5V16H56.5ZM42 93H3V94H42V93ZM56.5 78.5C56.5 86.5081 50.0081 93 42 93V94C50.5604 94 57.5 87.0604 57.5 78.5H56.5ZM72 0.5C63.4396 0.5 56.5 7.43958 56.5 16H57.5C57.5 7.99187 63.9919 1.5 72 1.5V0.5Z"
            fill="#F9D157"
          />
        </svg>

        <h1 className="gradient-text text-center h-md">
          Subscribe and Stay ahead of the curve
        </h1>

        <h1 className="gradient-text text-center h-sm">
          Subscribe and Stay up-to-date
        </h1>

        <p className="opacity-85 text-center p-desktop">
          Stay ahead of the curve by being the first to discover emerging
          business trends at the dynamic intersection of AI, Business
          Intelligence, and Data Analytics.
        </p>

        <p className="opacity-85 text-center p-mobile">
          Discover emerging trends in AI, Business Intelligence, and Data
          Analytics.
        </p>
        <div className="input-group relative">
          <IconMailFilled />
          <input type="text" placeholder="Enter your email" />
          <button className="cta-2 font-semibold">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
