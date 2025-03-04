import "@/css/footer.css";
import logo from "@/public/logo/bintel.png";
import {
  IconBrandFacebook,
  IconBrandX,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer grassmorphic w-full flex flex-col gap-8 px-4 py-8 mt-auto">
      <div className="w-full top flex justify-between">
        <div className="info flex gap-2 items-center mb-auto">
          <Image src={logo} alt="bintel logo" />
          <span className="opacity-85">Bintel Analytics Ltd.</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold opacity-85">Services</span>
          <Link className="opacity-85" href="/services/bi-it-infrastructure">
            Business Intelligence and IT Infrastructure
          </Link>
          <Link className="opacity-85" href="/services/data-collection">
            Data Collection, Management and Analysis
          </Link>
          <Link className="opacity-85" href="/services/bi-training">
            Data Collection, Management and Analysis
          </Link>
          <Link className="opacity-85" href="/services/research">
            Research Services
          </Link>
        </div>

        <div className="flex flex-col gap-2 footer-more-services">
          <Link className="opacity-85" href="#">
            Smart Automation
          </Link>
          <Link className="opacity-85" href="#">
            Data Collection Tablets
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold opacity-85">Company</span>
          <Link className="opacity-85" href="/services/about">
            About us
          </Link>
          <Link className="opacity-85" href="/services/contact">
            Contact
          </Link>
        </div>

        <div className="flex flex-col gap-2 quick-contact">
          <span className="font-semibold opacity-85">Quick Contact</span>
          <Link
            className="opacity-85"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:info@bintelanalytics.mw"
          >
            info@bintelanalytics.mw
          </Link>
          <Link className="opacity-85" href="tel:+265 212 400 338">
            +265 212 400 338
          </Link>
        </div>
      </div>

      <div className="full bottom flex p-2 gap-2">
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

        <span className="ml-auto">Bintel 2025. All Rights Reserved</span>
      </div>
    </div>
  );
}

export default Footer;
