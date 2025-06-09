"use client";

import banner from "@/public/banner.jpg";
import Image from "next/image";
import Link from "next/link";
import LiveChatToggle from "@/components/LiveChat/LiveChatToggle";
import calendarIcon from "@/public/icons/tabler-icon-calendar-month.png";
import "@/css/training.css";
import ReactMarkdown from "react-markdown";
import Calendar from "@/components/training/Calendar";
import { useState, useEffect, useMemo, useCallback } from "react";
import {
  Asset,
  ContentfulResponse,
  CourseEntry,
} from "@/types/contentfulTypes";
import { use } from "react";
import { formatAmountWithCommas } from "@/utils/formatNumber";
import { motion, AnimatePresence } from "motion/react";

// Constants
const API_URL =
  "https://cdn.contentful.com/spaces/g2f1mxz40ho6/environments/master/entries?content_type=course&fields.slug=";
const TOKEN = "nae8zcHy4QUgcdxGk58e1rcYxN1M37sY_pGiijbIeRM";

// Custom hook to debounce window width updates
function useWindowWidth(debounceTime = 200) {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setWidth(window.innerWidth), debounceTime);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [debounceTime]);

  return width;
}

function Page({ params }: { params: Promise<{ slug: string }> }) {
  const [data, setData] = useState<ContentfulResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("Description");
  const { slug } = use(params);
  const width = useWindowWidth();

  // Fetch courses using async/await for clarity
  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}${slug}`, {
          headers: { Authorization: `Bearer ${TOKEN}` },
        });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const result: ContentfulResponse = await res.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [slug]);

  // Memoize asset map to avoid rebuilding on every render
  const assetMap = useMemo(() => {
    const map: { [key: string]: Asset } = {};
    data?.includes?.Asset?.forEach((asset) => {
      map[asset.sys.id] = asset;
    });
    return map;
  }, [data]);

  // Callback to change active section (memoized)
  const handleSectionChange = useCallback((section: string) => {
    setActiveSection(section);
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render loading skeleton if still loading
  if (loading || !data) {
    return (
      <div className="course-view loading-course grid mt-4 gap-4">
        {/* Loading UI remains unchanged */}
        <div className="flex flex-col info calendar gap-4">
          <div className="info grassmorphic flex-col flex gap-4 p-4">
            <span className="font-bold"></span>
            <div className="flex gap-2 justify-between items-center">
              <span className="spec flex gap-1 mr-auto">
                <span className="opacity-70">Duration:</span>
                <span className="font-semibold opacity-85"></span>
              </span>
              <span className="spec flex gap-1 mr-auto">
                <span className="opacity-70">Level:</span>
                <span className="font-semibold opacity-85"></span>
              </span>
              <span className="spec flex gap-1">
                <span className="opacity-70">Language:</span>
                <span className="font-semibold opacity-85"></span>
              </span>
            </div>
            <div className="target-audience flex flex-col gap-1 p-2">
              <span className="font-semibold opacity-85">Target Audience</span>
              <p className="opacity-85"></p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="price font-extrabold mr-auto">K 0</span>
              <LiveChatToggle variant="cta" label="Register Now" icon />
            </div>
          </div>
          <div className="calendar p-4 grassmorphic flex flex-col gap-2">
            <span className="flex font-medium gap-2 opacity-85 items-center">
              <Image src={calendarIcon} height={20} width={20} alt="" />
              Next available
            </span>
            <div className="grassmorphic"></div>
          </div>
        </div>
        <div className="course-details p-2 grassmorphic">
          <div className="course-sections flex flex-col">
            <div className="sections flex gap-4 mt-2">
              <span className="active-section">Description</span>
              <span>What you will learn</span>
            </div>
          </div>
          <div className="section-c p-2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="banner flex flex-col gap-2 justify-center p-4 relative w-full">
        <Image priority src={banner} className="absolute" alt="banner" />
        <div className="breadcrumbs flex items-center gap-2">
          <Link href="/">home</Link>
          <span></span>
          <Link href="/services">services</Link>
          <span></span>
          <Link href="/data-management">training</Link>
        </div>
        <h1 className="gradient-text">
          Business Intelligence and Analytics Training.
        </h1>
      </div>

      {data?.items.map((course: CourseEntry) => {
        const coverImageId = course.fields.coverImage.sys.id;
        const coverAsset = assetMap[coverImageId];
        const coverUrl = coverAsset
          ? `https:${coverAsset.fields.file.url}`
          : "";

        // Helper component for the course sections (mobile or desktop)
        const SectionContent = (
          <div className="course-sections flex flex-col">
            <div className="sections flex gap-4 mt-2">
              <span
                onClick={() => handleSectionChange("Description")}
                className={
                  activeSection === "Description" ? "active-section" : ""
                }
              >
                Description
              </span>
              <span
                onClick={() => handleSectionChange("What you will learn")}
                className={
                  activeSection === "What you will learn"
                    ? "active-section"
                    : ""
                }
              >
                What you will learn
              </span>
            </div>
          </div>
        );

        // Helper component for the section content
        const SectionDisplay = (
          <div className="section-c p-2">
            {activeSection === "Description" ? (
              <AnimatePresence>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.85 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {course.fields.description}
                </motion.p>
              </AnimatePresence>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="learning-outcomes"
              >
                <ReactMarkdown>{course.fields.learningOutcomes}</ReactMarkdown>
              </motion.div>
            )}
          </div>
        );

        return (
          <div key={course.sys.id} className="course-view grid mt-4 gap-4">
            <div className="blob"></div>
            <div className="flex flex-col info-calendar gap-4">
              <div className="info grassmorphic flex-col flex gap-4 p-4">
                <span className="font-bold">
                  {course.fields.name}
                  <span className="code">({course.fields.code})</span>
                </span>
                <div className="flex gap-2 justify-between items-center">
                  <span className="spec flex gap-1 mr-auto">
                    <span className="opacity-70">Duration:</span>
                    <span className="font-semibold opacity-85">
                      {course.fields.duration} days
                    </span>
                  </span>
                  <span className="spec flex gap-1 mr-auto">
                    <span className="opacity-70">Level:</span>
                    <span className="font-semibold opacity-85">
                      {course.fields.level}
                    </span>
                  </span>
                  <span className="spec flex gap-1">
                    <span className="opacity-70">Language:</span>
                    <span className="font-semibold opacity-85">
                      {course.fields.language}
                    </span>
                  </span>
                </div>
                <div className="target-audience flex flex-col gap-2 p-2">
                  <span className="font-semibold opacity-85">
                    Target Audience
                  </span>
                  <p className="opacity-85">{course.fields.targetAudience}</p>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="price font-extrabold mr-auto">
                    K {formatAmountWithCommas(course.fields.price)}
                  </span>
                  <LiveChatToggle variant="cta" label="Register Now" icon />
                </div>
              </div>

              {width <= 720 && (
                <div className="grassmorphic flex flex-col p-4 gap-1">
                  {SectionContent}
                  {SectionDisplay}
                </div>
              )}

              <div className="calendar p-4 grassmorphic flex flex-col gap-2">
                <span className="flex font-medium gap-2 opacity-85 items-center">
                  <Image src={calendarIcon} height={20} width={20} alt="" />
                  Next available
                </span>
                <Calendar
                  duration={course.fields.duration}
                  startDate={course.fields.nextAvailable}
                />
              </div>
            </div>

            <div className="course-details p-2 grassmorphic">
              <Image
                src={coverUrl}
                alt={course.fields.name}
                width={800}
                height={600}
                className="cover-image"
                priority
              />
              {width > 720 && (
                <>
                  {SectionContent}
                  {SectionDisplay}
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Page;
