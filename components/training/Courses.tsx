"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { IconCalendarWeek, IconChevronRight } from "@tabler/icons-react";
import {
  ContentfulResponse,
  CourseEntry,
  Asset,
} from "@/types/contentfulTypes";
import Image from "next/image";

interface CoursesTypes {
  limit: number;
}

const API_URL =
  "https://cdn.contentful.com/spaces/g2f1mxz40ho6/environments/master/entries?content_type=course&limit=";
const TOKEN = "nae8zcHy4QUgcdxGk58e1rcYxN1M37sY_pGiijbIeRM";

function Courses({ limit }: CoursesTypes) {
  const [data, setData] = useState<ContentfulResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
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
          setError(err.message || "An error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => controller.abort();
  }, [limit]);

  const assetMap = useMemo(() => {
    if (!data?.includes?.Asset) return {};
    return data.includes.Asset.reduce(
      (map: { [key: string]: Asset }, asset: Asset) => {
        map[asset.sys.id] = asset;
        return map;
      },
      {}
    );
  }, [data]);

  const formatDate = (startDate: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    const date = new Date(startDate);
    const formattedStartDate = date.toLocaleDateString("en-GB", options);

    return formattedStartDate;
  };

  if (loading) {
    return (
      <div className="courses-container w-full grid gap-4">
        Loading courses...
      </div>
    );
  }

  const formatEndDate = (startDate: string, duration: number) => {
    const endDate = new Date(startDate);
    const date = new Date(startDate);
    endDate.setDate(date.getDate() + duration);
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };

    const formattedEndDate = endDate.toLocaleDateString("en-GB", options);

    return formattedEndDate;
  };

  if (error) {
    return (
      <div className="courses-container w-full grid gap-4">Error: {error}</div>
    );
  }

  return (
    <div className="courses-container w-full grid gap-4">
      {data?.items.map((course: CourseEntry) => {
        const coverImageId = course.fields.coverImage.sys.id;
        const coverAsset = assetMap[coverImageId];
        const coverUrl = coverAsset
          ? `https:${coverAsset.fields.file.url}`
          : "";

        return (
          <div
            key={course.sys.id}
            className="course flex flex-col p-2 truncate gap-2"
          >
            <Image
              src={coverUrl}
              alt={course.fields.name}
              width={800}
              height={600}
            />
            <span className="title font-medium truncate opacity-85 w-full">
              {course.fields.name}
            </span>
            <div className="info flex gap-2 w-full">
              <span className="spec flex gap-1 mr-auto">
                <span className="opacity-70">Duration:</span>
                <span className="font-semibold opacity-85">
                  {course.fields.duration} days
                </span>
              </span>
              <span className="spec flex gap-1 items-center">
                <span className="opacity-70">
                  <IconCalendarWeek className="w-3 h-3" />
                </span>
                <span className="font-semibold opacity-85">
                  {formatDate(course.fields.nextAvailable)}
                </span>
              </span>
            </div>
            <Link
              className="cta"
              href={`/services/training/courses/${course.fields.slug}`}
            >
              Details
              <IconChevronRight />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Courses;
