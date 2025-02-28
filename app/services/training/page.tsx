import Image from "next/image";
import Link from "next/link";
import banner from "@/public/banner.jpg";
import LiveChatToggle from "@/components/LiveChat/LiveChatToggle";
import serviceImage from "@/public/services/bintel-it-infrastructure.png";
import "@/css/services.css";
import "@/css/training.css";
import { IconCheck } from "@tabler/icons-react";
import Courses from "@/components/training/Courses";
import Events from "@/components/training/Events";

function Page() {
  return (
    <div className="page gap-4">
      <div className="banner flex flex-col gap-2 justify-center p-8 relative w-full">
        <Image src={banner} className="absolute" alt="banner" />
        <div className="breadcrumbs flex items-center gap-2">
          <Link href="/">home</Link>
          <span></span>
          <Link href="/services">services</Link>
          <span></span>
          <Link href="/training">training</Link>
        </div>
        <h1 className="gradient-text">
          Business Intelligence and Analytics Training.
        </h1>
      </div>

      <div className="services-grid grid gap-4">
        <div className="service-image flex flex-col items-center justify-center">
          <Image src={serviceImage} className="absolute" alt="service image" />
          <h2 className="text-center">
            Discover Your Potential. On Your Schedule.
          </h2>
          <LiveChatToggle variant="cta-2" label="Get started" />
        </div>

        <div className="service-content flex flex-col gap-2 grassmorphic">
          <h2>Join Our Training Program</h2>
          <p className="opacity-85">
            Our training program is available year-round, offering flexible
            in-house sessions tailored to your needs—delivered online, in
            person, or through a blended approach, whenever it suits you.
          </p>

          <div className="flex flex-col gap-2 mt-2">
            <span className="font-semibold opacity-85">
              Advantages of our training program:
            </span>

            <div className="grid gap-4">
              <span className="flex items-center justity-center">
                <span className="icon">
                  <IconCheck />
                </span>
                <span className="opacity-85">Career-relevant content</span>
              </span>

              <span className="flex items-center justity-center">
                <span className="icon">
                  <IconCheck />
                </span>
                <span className="opacity-85">
                  Access to industry-certified tools
                </span>
              </span>

              <span className="flex items-center justity-center">
                <span className="icon">
                  <IconCheck />
                </span>
                <span className="opacity-85">
                  Learner-centered, hands-on delivery approach{" "}
                </span>
              </span>

              <span className="flex items-center justity-center">
                <span className="icon">
                  <IconCheck />
                </span>
                <span className="opacity-85">
                  Excellent post-training support
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="course-calendar relative w-full gap-4 mt-4">
        <div className="blob"></div>
        <div className="grassmorphic p-4 w-full flex flex-col gap-4">
          <span className="flex w-full gap-4">
            <span className="opacity-85 mr-auto font-medium">
              Most popular courses
            </span>
            <Link
              className="all-courses font-semibold"
              href="/services/training"
            >
              All courses
            </Link>
          </span>

          <Courses limit={10} />
        </div>

        <Events limit={10} />
      </div>
    </div>
  );
}

export default Page;
