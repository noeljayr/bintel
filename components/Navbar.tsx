"use client";

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
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LiveChatToggle from "./LiveChat/LiveChatToggle";
import "@/css/navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== undefined) {
        setIsScrolled(window.scrollY >= 5);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <>
      <div
        className={`contact-header flex items-center py-2 px-4 gap-4
        ${pathname !== "/" ? "mb-20" : "mb-2"}
        `}
      >
        <Link
          href="tel:+265 212 400 338"
          className="header-link flex items-center gap-1"
        >
          <IconPhone />
          <span>+265 212 400 338</span>
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:info@bintelanalytics.mw"
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
        className={`grid gap-4 items-center fixed px-8 py-2 navbar ${
          pathname === "/" ? "home-navbar" : "top-12"
        } ${isScrolled || menuActive ? "scrolled" : ""} ${
          menuActive ? "navbar-active-menu" : ""
        }`}
      >
        <Link href="/" className="font-semibold logo flex items-center gap-2">
          {pathname !== "/" || menuActive ? (
            <span key="logo">
              <Image src={logo} alt="logo" />
            </span>
          ) : (
            <AnimatePresence>
              {isScrolled && (
                <motion.span
                  key="logo"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  style={{ display: "inline-block" }}
                >
                  <Image src={logo} alt="logo" />
                </motion.span>
              )}
            </AnimatePresence>
          )}
          Bintel Analytics
        </Link>

        <div className="links mx-auto flex items-center">
          <Link
            href="/"
            className={`flex items-center ${
              pathname === "/" ? "opacity-100 font-semibold" : "opacity-75"
            }`}
          >
            Home
          </Link>
          <span className="opacity-40"></span>
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
                className={`${
                  pathname.startsWith("/services/bi-it-infrastructure")
                    ? "font-semibold"
                    : "opacity-75"
                }`}
                href="/services/bi-it-infrastructure"
              >
                Business Intelligence & IT Infrastructure
              </Link>
              <Link
                className={`${
                  pathname.startsWith("/services/data-management")
                    ? "font-semibold"
                    : "opacity-75"
                }`}
                href="/services/data-management"
              >
                Data Collection, Management & Analysis
              </Link>
              <Link
                className={`${
                  pathname.startsWith("/services/training")
                    ? "font-semibold"
                    : "opacity-75"
                }`}
                href="/services/training"
              >
                Business Intelligence & Analytics Training
              </Link>
              <Link
                className={`${
                  pathname.startsWith("/services/research")
                    ? "font-semibold"
                    : "opacity-75"
                }`}
                href="/services/research"
              >
                {" "}
                Research & Projects Support
              </Link>
            </div>
          </div>
          <span className="opacity-40"></span>
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
          <span className="opacity-40"></span>
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
          <span className="opacity-40"></span>
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
          onClick={() => {
            setMenuActive(!menuActive);
          }}
          className={`mobile-menu-btn ${
            menuActive ? "mobile-menu-active" : ""
          }`}
        >
          <div className="flex flex-col items-center justify-center w-full h-full">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>

      <div
        className={`menu-list flex fixed gap-4 flex-col p-4 ${
          menuActive ? "menu-list-active" : ""
        }`}
      >
        <Link
          onClick={() => {
            setMenuActive(false);
          }}
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
              onClick={() => {
                setMenuActive(false);
              }}
              className={`${
                pathname.startsWith("/services/bi-it-infrastructure")
                  ? "font-semibold"
                  : "opacity-75"
              }`}
              href="/services/bi-it-infrastructure"
            >
              Business Intelligence & IT Infrastructure
            </Link>
            <Link
              onClick={() => {
                setMenuActive(false);
              }}
              className={`${
                pathname.startsWith("/services/data-management")
                  ? "font-semibold"
                  : "opacity-75"
              }`}
              href="/services/data-management"
            >
              Data Collection, Management & Analysis
            </Link>
            <Link
              onClick={() => {
                setMenuActive(false);
              }}
              className={`${
                pathname.startsWith("/services/training")
                  ? "font-semibold"
                  : "opacity-75"
              }`}
              href="/services/training"
            >
              Business Intelligence & Analytics Training
            </Link>
            <Link
              onClick={() => {
                setMenuActive(false);
              }}
              className={`${
                pathname.startsWith("/services/research")
                  ? "font-semibold"
                  : "opacity-75"
              }`}
              href="/services/research"
            >
              {" "}
              Research & Projects Support
            </Link>
          </div>
        </div>

        <Link
          onClick={() => {
            setMenuActive(false);
          }}
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
          onClick={() => {
            setMenuActive(false);
          }}
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
          onClick={() => {
            setMenuActive(false);
          }}
          href="/about"
          className={`flex items-center ${
            pathname.startsWith("/about")
              ? "opacity-100 font-semibold"
              : "opacity-75"
          }`}
        >
          About
        </Link>

        <div
          onClick={() => {
            setMenuActive(false);
          }}
          className={`flex w-full`}
        >
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
}

export default Navbar;
