"use client";

import React, { useCallback, useEffect, useState } from "react";
import logo from "@/public/logo/bintel.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandX,
  IconChevronDown,
  IconMail,
  IconPhone,
  IconMenu,
  IconX,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import LiveChatToggle from "./LiveChat/LiveChatToggle";
import "@/css/navbar.css";
import { motionTransiton } from "@/constants/motionTransition";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY >= 10;
    setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleScroll(); // Set initial scroll state
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  const toggleMenu = useCallback(() => {
    setMenuActive((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuActive(false);
  }, []);

  return (
    <>
      <div
        className={`contact-header flex items-center py-2 px-4 gap-4 ${
          pathname !== "/" ? "mb-20" : "mb-2"
        }`}
      >
        <Link
          href="tel:+265 212 400 338"
          className="header-link flex items-center gap-1"
        >
          <IconPhone />
          <span>+265 212 400 338</span>
        </Link>
        <Link
          href="mailto:info@bintelanalytics.mw"
          target="_blank"
          rel="noopener noreferrer"
          className="header-link flex items-center gap-1 mr-auto"
        >
          <IconMail />
          <span>info@bintelanalytics.mw</span>
        </Link>
        <Link
          href="https://web.facebook.com/bintelanalyticsmalawi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandFacebook />
        </Link>
        <Link
          href="https://x.com/BintelAnalytics"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandX />
        </Link>
        <Link
          href="https://www.linkedin.com/company/bintel-analytics/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin />
        </Link>
      </div>

      <div
        style={
          isScrolled
            ? {
                top: 0,
              }
            : {}
        }
        className={`grid gap-4 items-center fixed py-2 navbar ${
          pathname === "/" ? "home-navbar" : "top-12"
        } ${isScrolled || menuActive ? "scrolled top-0" : ""} ${
          menuActive ? "navbar-active-menu" : ""
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.a
            layout
            transition={motionTransiton}
            href="/"
            key="logo-container"
            className="font-semibold logo flex items-center gap-2"
          >
            {pathname !== "/" || menuActive ? (
              <motion.span transition={motionTransiton} layout key="logo">
                <Image src={logo} alt="logo" />
              </motion.span>
            ) : (
              isScrolled && (
                <motion.span
                  key="logo2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={motionTransiton}
                  layout
                >
                  <Image src={logo} alt="logo" />
                </motion.span>
              )
            )}

            {pathname === "/" ? (
              <motion.span
                layout
                key="title"
                transition={motionTransiton}
                className="font-semibold"
                initial={{ color: "var(--white)" }}
                animate={{
                  color: isScrolled ? "var(--black)" : "var(--white)",
                }}
              >
                Bintel Analytics
              </motion.span>
            ) : (
              <>Bintel Analytics</>
            )}
          </motion.a>
        </AnimatePresence>

        <div className="links mx-auto flex items-center">
          <Link
            href="/"
            className={`flex items-center ${
              pathname === "/" ? "opacity-100 font-semibold" : "opacity-75"
            }`}
          >
            Home
          </Link>
          <span className="opacity-40" />
          <div
            className={`flex services-link items-center relative gap-1 ${
              pathname.startsWith("/services")
                ? "opacity-100 font-semibold"
                : ""
            }`}
          >
            <b className="opacity-75 font-normal">Services</b>
            <IconChevronDown />
            <div className="submenu left-0 absolute flex flex-col gap-2 p-4">
              <Link
                href="/services/bi-it-infrastructure"
                className={`${
                  pathname.startsWith("/services/bi-it-infrastructure")
                    ? "font-semibold"
                    : "opacity-75"
                }`}
              >
                Business Intelligence & IT Infrastructure
              </Link>
              <Link
                href="/services/data-management"
                className={`${
                  pathname.startsWith("/services/data-management")
                    ? "font-semibold"
                    : "opacity-75"
                }`}
              >
                Data Collection, Management & Analysis
              </Link>
              <Link
                href="/services/training"
                className={`${
                  pathname.startsWith("/services/training")
                    ? "font-semibold"
                    : "opacity-75"
                }`}
              >
                Business Intelligence & Analytics Training
              </Link>
              <Link
                href="/services/research"
                className={`${
                  pathname.startsWith("/services/research")
                    ? "font-semibold"
                    : "opacity-75"
                }`}
              >
                Research & Projects Support
              </Link>
            </div>
          </div>
          <span className="opacity-40" />
          <Link
            href="/services/training"
            className={`flex items-center ${
              pathname.startsWith("/services/training")
                ? "opacity-100 font-semibold"
                : "opacity-75"
            }`}
          >
            Training
          </Link>
          <span className="opacity-40" />
          <Link
            href="/contact"
            className={`flex items-center ${
              pathname.startsWith("/contact")
                ? "opacity-100 font-semibold"
                : "opacity-75"
            }`}
          >
            Contact
          </Link>
          <span className="opacity-40" />
          <Link
            href="/about"
            className={`flex items-center ${
              pathname.startsWith("/about")
                ? "opacity-100 font-semibold"
                : "opacity-75"
            }`}
          >
            About
          </Link>
        </div>

        <div className={`flex w-full ${menuActive ? "opacity-0" : ""}`}>
          <LiveChatToggle
            variant={isScrolled || pathname !== "/" ? "cta" : "cta-2"}
            className="ml-auto"
            label="Live chat"
          />
        </div>

        <div
          onClick={toggleMenu}
          className={`mobile-menu-btn ${
            menuActive ? "mobile-menu-active" : ""
          }`}
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            {menuActive ? <IconX /> : <IconMenu />}
          </div>
        </div>
      </div>

      <div
        className={`menu-list flex fixed gap-4 flex-col p-4 ${
          menuActive ? "menu-list-active" : ""
        }`}
      >
        <Link
          onClick={closeMenu}
          href="/"
          className={`flex items-center ${
            pathname === "/" ? "opacity-100 font-semibold" : "opacity-75"
          }`}
        >
          Home
        </Link>

        <div
          className={`flex services-link-mobile flex-col relative gap-1 ${
            pathname.startsWith("/services") ? "opacity-100 font-semibold" : ""
          }`}
        >
          <b className="opacity-75 font-normal">Services</b>
          <div className="submenu flex flex-col gap-2">
            <Link
              onClick={closeMenu}
              href="/services/bi-it-infrastructure"
              className={`${
                pathname.startsWith("/services/bi-it-infrastructure")
                  ? "font-semibold"
                  : "opacity-75"
              }`}
            >
              Business Intelligence & IT Infrastructure
            </Link>
            <Link
              onClick={closeMenu}
              href="/services/data-management"
              className={`${
                pathname.startsWith("/services/data-management")
                  ? "font-semibold"
                  : "opacity-75"
              }`}
            >
              Data Collection, Management & Analysis
            </Link>
            <Link
              onClick={closeMenu}
              href="/services/training"
              className={`${
                pathname.startsWith("/services/training")
                  ? "font-semibold"
                  : "opacity-75"
              }`}
            >
              Business Intelligence & Analytics Training
            </Link>
            <Link
              onClick={closeMenu}
              href="/services/research"
              className={`${
                pathname.startsWith("/services/research")
                  ? "font-semibold"
                  : "opacity-75"
              }`}
            >
              Research & Projects Support
            </Link>
          </div>
        </div>

        <Link
          onClick={closeMenu}
          href="/services/training"
          className={`flex items-center ${
            pathname.startsWith("/services/training")
              ? "opacity-100 font-semibold"
              : "opacity-75"
          }`}
        >
          Training
        </Link>

        <Link
          onClick={closeMenu}
          href="/contact"
          className={`flex items-center ${
            pathname.startsWith("/contact")
              ? "opacity-100 font-semibold"
              : "opacity-75"
          }`}
        >
          Contact
        </Link>

        <Link
          onClick={closeMenu}
          href="/about"
          className={`flex items-center ${
            pathname.startsWith("/about")
              ? "opacity-100 font-semibold"
              : "opacity-75"
          }`}
        >
          About
        </Link>

        <div onClick={closeMenu} className="flex w-full">
          <LiveChatToggle
            variant={
              isScrolled || menuActive || pathname !== "/" ? "cta" : "cta-2"
            }
            label="Live chat"
          />
        </div>
      </div>
    </>
  );
};

export default React.memo(Navbar);
