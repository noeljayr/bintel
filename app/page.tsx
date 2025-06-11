"use client";

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

import tablets from "@/public/tablets.png";
import tablet1 from "@/public/tablet-1.png";
import tablet2 from "@/public/tablet-2.png";
import HomeCourses from "@/components/training/HomeCourses";
import LiveChatToggle from "@/components/LiveChat/LiveChatToggle";
import { ChevronRight } from "lucide-react";
import HighlightAnimation from "@/components/HighlightAnimation";
import Automation from "@/components/Automation";

import { motion } from "motion/react";
import { motionTransiton } from "@/constants/motionTransition";
import HeroImage from "@/components/HeroImage";

export default function Home() {
  return (
    <div className="home-page gap-4 mb-16 flex flex-col w-full">
      <div className="hero flex flex-col gap-2 justify-center relative w-full">
        <div className="absolute flex flex-col gap-2">
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image src={logo} alt="bintel logo" className="logo" />
          </motion.span>
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Link
              style={{ color: "var(--secondary)" }}
              href="https://bintelstore.surveycto.com/collect/binteltraining?caseid="
              className=" border-[1px] border-[rgba(249,_209,_87,_0.15)] bg-[rgba(249,_209,_87,_0.15)] flex gap-2 p-2 rounded-4xl font-p3 font-bold items-center w-fit px-4 mt-2.5 mb-1"
            >
              Secure Your Spot for 2025 trainings <ChevronRight />
            </Link>
          </motion.span>
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.75, ease: [0.25, 0.1, 0.25, 1] }}
            className="gradient-text"
          >
            Business Intelligence & Analytics Services.
          </motion.h1>
        </div>

        <HeroImage />
      </div>

      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="hero-tag relative w-full gap-4 grid"
      >
        <div className="blob absolute"></div>
        <motion.div className="relative tagline flex flex-col items-center justify-center">
          <Image src={laptop} alt="laptop" />
          <h2 className="text-center absolute px-8">
            Unleash the power of data to propel your business.
          </h2>
        </motion.div>
        <motion.div className="grassmorphic p-4 flex flex-col gap-2">
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
        </motion.div>
        <motion.div className="max-sm:aspect-square grassmorphic relative p-4 flex flex-col gap-2">
          <HighlightAnimation />
        </motion.div>
      </motion.div>

      <div className="flex flex-col gap-3">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          id="services"
          className="services grid justify-between"
        >
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
              <LiveChatToggle
                variant="cta-2"
                className="relative"
                label="Enquire a service"
              />
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
          </div>
        </motion.div>

        <div className="more-services gap-3 w-full flex flex-col items-center justify-center">
          <span className="blob"></span>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid w-full gap-3"
          >
            <div className="more-s-image relative overflow-hidden">
              <span
                style={{ display: "grid" }}
                className="h-[10rem] w-[12rem] relative justify-center items-center "
              >
                <motion.span
                  initial={{ y: 100 }}
                  whileInView={{ y: 50 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-[13rem] left-[0rem] z-[2]  absolute"
                >
                  <Image src={tablet1} className="w-[13rem]  " alt="" />
                </motion.span>
                <motion.span
                  initial={{ y: 50 }}
                  whileInView={{ y: -65 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="w-[8rem] left-[6rem] flex top-[1rem] absolute object-contain"
                >
                  <Image src={tablet2} className="w-[8rem] " alt="" />
                </motion.span>
              </span>
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
          </motion.div>

          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid automation w-full gap-3"
          >
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
            <div className="more-s-image relative">
              <Automation />
            </div>
          </motion.div>
        </div>
      </div>

      <HomeCourses />

      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="subscribe relative overflow-hidden flex flex-col gap-2 w-full"
      >
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
      </motion.div>
    </div>
  );
}
