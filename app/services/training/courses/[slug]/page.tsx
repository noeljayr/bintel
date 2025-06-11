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
  TrainerFields,
} from "@/types/contentfulTypes";
import { use } from "react";
import { formatAmountWithCommas } from "@/utils/formatNumber";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronRight, IconUser } from "@tabler/icons-react";
import { motionTransiton } from "@/constants/motionTransition";

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
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

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

  const trainerLookup = useMemo(() => {
    const map: Record<string, TrainerFields> = {};
    data?.includes?.Entry?.forEach((entry) => {
      map[entry.sys.id] = entry.fields;
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
      <motion.div
        layout
        key="course-view"
        transition={motionTransiton}
        className="course-view loading-course grid mt-4 gap-4"
      >
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
        <div className="course-details p-2 grassmorphic overflow-hidden">
          <div className="course-sections flex flex-col">
            <div className="sections flex gap-4 mt-2">
              <span className="active-section">Description</span>
              <span>Trainers</span>
            </div>
          </div>
          <div className="section-c p-2"></div>
        </div>
      </motion.div>
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
          <motion.div
            layout
            transition={motionTransiton}
            className="course-sections flex flex-col"
          >
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
                onClick={() => handleSectionChange("Trainers")}
                className={activeSection === "Trainers" ? "active-section" : ""}
              >
                Trainers
              </span>
            </div>
          </motion.div>
        );

        // Helper component for the section content
        const SectionDisplay = (
          <motion.div
            key="sections"
            layout="position"
            transition={motionTransiton}
            animate={{ height: "auto" }}
            className="section-c p-2"
          >
            {activeSection === "Description" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                exit={{ opacity: 0 }}
                transition={motionTransiton}
                layout="position"
                key="dec"
                className="learning-outcomes"
              >
                <ReactMarkdown>{course.fields.learningOutcomes}</ReactMarkdown>
              </motion.div>
            ) : (
              <motion.div>
                {activeSection === "Trainers" && (
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.85 }}
                    exit={{ opacity: 0 }}
                    transition={motionTransiton}
                    className="grid grid-cols-[repeat(auto-fit,_minmax(10rem,1fr))]  gap-2"
                  >
                    {course.fields.trainers.map((link, idx) => {
                      const trainer = trainerLookup[link.sys.id];
                      if (!trainer) return null; // defensive
                      const isSelected = idx === selectedIdx;

                      return (
                        <motion.div
                          layout
                          layoutId={`trainer-${idx}`}
                          onClick={() =>
                            setSelectedIdx(isSelected ? null : idx)
                          }
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.25, 0.1, 0.25, 1],
                            delay: idx * 0.15,
                          }}
                          key={idx}
                          className={`
                              gap-2 pb-3 border-[1px] border-[var(--border)]
                              rounded-[var(--radius-m)] p-1 cursor-pointer
                              ${
                                isSelected
                                  ? "col-span-2 row-span-2 grid grid-rows-[auto_1fr] overflow-hidden"
                                  : "col-span-1 row-span-1 flex flex-col "
                              }
                            `}
                        >
                          <motion.div
                            layout="position"
                            layoutId="trainer-details"
                            className={`flex ${
                              isSelected
                                ? "flex-row items-center"
                                : "flex-col gap-2"
                            }`}
                          >
                            <motion.span
                              layout="position"
                              layoutId="trainer-name-pic"
                              transition={motionTransiton}
                              style={{ borderRadius: "var(--radius-s)" }}
                              className={`${
                                isSelected
                                  ? "h-[3rem] w-[3rem]"
                                  : "w-full aspect-video"
                              } bg-[var(--border)] flex items-center justify-center`}
                            >
                              <IconUser
                                className={`h-[1.5rem] w-[1.5rem] opacity-50 `}
                              />
                            </motion.span>
                            <motion.div
                              layout="position"
                              transition={motionTransiton}
                              className="flex flex-col px-2"
                            >
                              <motion.span
                                layout="position"
                                transition={motionTransiton}
                                className="font-semibold font-p2"
                              >
                                {trainer.name}
                              </motion.span>
                              <motion.span
                                layout="position"
                                transition={motionTransiton}
                                className="font-p3 font-medium mt-0.5 truncate opacity-70"
                              >
                                {trainer.qualification}
                              </motion.span>
                            </motion.div>
                          </motion.div>

                          {isSelected && (
                            <motion.div
                              layout="position"
                              layoutId="profile-details"
                              className="h-full w-full overflow-y-auto px-2 font-p-2 opacity-75"
                            >
                              <motion.div
                                layout="position"
                                layoutId="profile-details-info"
                              />
                              <ReactMarkdown>{trainer.profile}</ReactMarkdown>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}
              </motion.div>
            )}
          </motion.div>
        );

        return (
          <motion.div
            transition={motionTransiton}
            key={course.sys.id}
            layout="position"
            className="course-view grid mt-4 gap-4"
          >
            <motion.div
              key="blob"
              layout="position"
              transition={motionTransiton}
              className="blob"
            ></motion.div>
            <motion.div
              layout="position"
              key={"infor-calendar"}
              transition={motionTransiton}
              className="flex flex-col info-calendar gap-4"
            >
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
                <div className="flex gap-2 items-center mt-1">
                  <span className="price font-extrabold mr-auto relative">
                    K {formatAmountWithCommas(course.fields.price)}
                    <span
                      style={{ color: "var(--primary)" }}
                      className="absolute font-p3 font-black left-[105%] bottom-4 w-[4.5rem] items-center flex justify-center border-[1px] border-[rgba(20,89,147,0.1)] py-1 rounded-4xl bg-[rgba(20,89,147,0.1)]"
                    >
                      Per package
                    </span>
                  </span>
                  {/* <LiveChatToggle variant="cta" label="Register Now" icon /> */}
                  <Link
                    href="https://bintelstore.surveycto.com/collect/binteltraining?caseid="
                    className="cta"
                  >
                    Register now
                    <IconChevronRight />
                  </Link>
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
                  Mark your calendars
                </span>
                <Calendar
                  duration={course.fields.duration}
                  startDate={course.fields.nextAvailable}
                />
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                layout
                transition={motionTransiton}
                className="course-details p-2 grassmorphic overflow-hidden"
              >
                <motion.div layout transition={motionTransiton}>
                  <Image
                    src={coverUrl}
                    alt={course.fields.name}
                    width={800}
                    height={600}
                    className="cover-image"
                    priority
                  />
                </motion.div>
                {width > 720 && (
                  <>
                    {SectionContent}
                    {SectionDisplay}
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Page;
