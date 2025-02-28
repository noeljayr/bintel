import "@/css/contact.css";

import banner from "@/public/banner.jpg";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

function Contact() {
  return (
    <div className="page gap-6">
      <div className="banner flex flex-col gap-2 justify-center p-8 relative w-full">
        <Image src={banner} className="absolute" alt="banner" />
        <div className="breadcrumbs flex items-center gap-2">
          <Link href="/">home</Link>
          <span></span>
          <Link href="/contact">contact</Link>
        </div>
        <h1 className="gradient-text">Contact Bintel.</h1>
      </div>

      <div className="contact-content grid gap-4 relative">
        <div className="blob"></div>
        <div className="contact-info grid gap-4 w-full">
          <div className="flex flex-col gap-2 p-4 grassmorphic">
            <span className="font-medium opacity-85">Social media</span>

            <Link
              href="https://x.com/BintelAnalytics"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-85"
            >
              <IconBrandX />
              Follow us on X{"("}Twitter{")"}
            </Link>

            <Link
              href="https://www.linkedin.com/company/bintel-analytics/"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-85"
            >
              <IconBrandLinkedin />
              Lets talk on LinkedIn
            </Link>

            <Link
              href="https://web.facebook.com/bintelanalyticsmalawi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-85"
            >
              <IconBrandFacebook />
              Connect with us on Facebook
            </Link>
          </div>
          <div className="flex flex-col gap-2 p-4 grassmorphic">
            <span className="font-medium opacity-85">Calls</span>

            <Link
              href="tel:+265 212 400 338"
              className="flex items-center gap-2 opacity-85"
            >
              +265 212 400 338
            </Link>
            <Link
              href="tel:+265 999 679 975"
              className="flex items-center gap-2 opacity-85"
            >
              +265 999 679 975
            </Link>

            <Link
              href="tel:+265 886 877 224"
              className="flex items-center gap-2 opacity-85"
            >
              +265 886 877 224
            </Link>
          </div>

          <div className="flex flex-col gap-2 p-4 grassmorphic">
            <span className="font-medium opacity-85">Location</span>
            <ul className="opacity-85 list-disc pl-3 flex flex-col gap-2">
              <li>
                Along M1 Chikwawa Road, 3KM from Blantyre CBD, Manase Plot No.
                BW/433/42, Blantrye, Malawi.
              </li>
              <li>Lilongwe, area 47 sector 1, Njobvu Road, Plot No. 41/1259</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 p-4 grassmorphic">
            <span className="font-medium opacity-85">Physical mail</span>
            <span className="flex items-center gap-2 opacity-85">
              P.O. Box 31145, Chichiri, Blantyre 3, Malawi
            </span>
          </div>
        </div>

        <form action="" className="contact-form grassmorphic p-4 gap-4">
          <div className="input-group-contact w-full">
            <label className="font-medium opacity-85" htmlFor="">
              Name
            </label>
            <input
              required
              className="font-medium"
              type="text"
              placeholder="Full name"
            />
          </div>

          <div className="grid w-full gap-4">
            <div className="input-group-contact w-full">
              <label className="font-medium opacity-85" htmlFor="">
                Email
              </label>
              <input
                required
                className="font-medium"
                type="email"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="input-group-contact w-full">
              <label className="font-medium opacity-85" htmlFor="">
                Phone
              </label>
              <input
                required
                className="font-medium"
                type="text"
                placeholder="+265 888 88 888"
              />
            </div>
          </div>

          <div className="message-input gap-2 w-full">
            <label className="font-medium opacity-85" htmlFor="">
              Message
            </label>
            <textarea
              className="font-medium"
              placeholder="Write your message here"
              name=""
              id=""
              required
            ></textarea>
          </div>

          <button className="cta">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
