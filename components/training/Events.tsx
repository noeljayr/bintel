"use client";

import calendarIcon from "@/public/icons/tabler-icon-calendar-month.png";
import map from "@/public/icons/tabler-icon-map-pin.png";
import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import LiveChatToggle from "../LiveChat/LiveChatToggle";
import { useEffect, useState } from "react";
import { ContentfulResponse } from "@/types/contentfulTypes";
import { usePathname } from "next/navigation";

interface CoursesTypes {
  limit: number;
}

const API_URL =
  "https://cdn.contentful.com/spaces/g2f1mxz40ho6/environments/master/entries?content_type=course&limit=";
const TOKEN = "nae8zcHy4QUgcdxGk58e1rcYxN1M37sY_pGiijbIeRM";

function Events({ limit }: CoursesTypes) {
  const [data, setData] = useState<ContentfulResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const controller = new AbortController();
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}${limit}`, {
          headers: { Authorization: `Bearer ${TOKEN}` },
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const json: ContentfulResponse = await res.json();
        setData(json);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();

    return () => controller.abort();
  }, [limit]);

  return (
    <div
      className={`grassmorphic p-4 flex flex-col gap-4 ${
        pathname !== "/" ? "h-fit" : ""
      }`}
    >
      <span className="flex gap-4">
        <span className="font-medium opacity-85 flex gap-2 items-center">
          <Image src={calendarIcon} alt="calendar" height={22} width={22} />
          Next training events
        </span>
      </span>

      <div className="events flex flex-col relative gap-4 pl-4">
        {loading ? (
          <div>Loading events...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <>
            <span className="timeline absolute"></span>
            {data?.items.map((event) => {
              const startDate = new Date(event.fields.nextAvailable);
              const endDate = new Date(startDate);
              endDate.setDate(startDate.getDate() + event.fields.duration);
              const options: Intl.DateTimeFormatOptions = {
                day: "2-digit",
                month: "short",
                year: "numeric",
              };
              const formattedStartDate = startDate.toLocaleDateString(
                "en-GB",
                options
              );
              const formattedEndDate = endDate.toLocaleDateString(
                "en-GB",
                options
              );

              return (
                <div
                  key={event.sys.id}
                  className="event grid items-center gap-2"
                >
                  <div className="info gap-1 flex flex-col truncate w-full">
                    <Link
                      title={event.fields.name}
                      href={``}
                      className="font-medium w-full truncate"
                    >
                      {event.fields.name}
                    </Link>
                    <span className="date opacity-70 grid gap-1">
                      <Image
                        src={calendarIcon}
                        alt="calendar"
                        height={15}
                        width={15}
                      />
                      {formattedStartDate} - {formattedEndDate} (
                      {event.fields.duration} days)
                    </span>
                    <span
                      title={event.fields.venue}
                      className="venue w-full truncate opacity-70 grid gap-1"
                    >
                      <Image src={map} alt="map" height={15} width={15} />
                      <span className="truncate w-full">
                        {event.fields.venue}
                      </span>
                    </span>
                  </div>
                  <Link href={`https://bintelstore.surveycto.com/collect/binteltraining?caseid=`} className={`cta-3`}>
                    <IconChevronRight />
                  </Link>
                </div>
              );
            })}
          </>
        )}
      </div>

      {pathname === "/" && (
        <Link href="/services/training" className="cta-3 mt-auto">
          Full calendar
          <IconChevronRight />
        </Link>
      )}
    </div>
  );
}

export default Events;
