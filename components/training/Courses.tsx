"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
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

function Courses(props: CoursesTypes) {
  const [data, setData] = useState<ContentfulResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_URL}${props.limit}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data: ContentfulResponse) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [props.limit]);

  const assetMap: { [key: string]: Asset } = {};
  data?.includes?.Asset?.forEach((asset) => {
    assetMap[asset.sys.id] = asset;
  });

  if (loading) {
    return (
      <div className="courses-container w-full grid gap-4">
        Loading courses...
      </div>
    );
  }

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

              <span className="spec flex gap-1">
                <span className="opacity-70">Level:</span>
                <span className="font-semibold opacity-85">
                  {" "}
                  {course.fields.level}
                </span>
              </span>
            </div>

            <Link
              className="cta"
              href={`/services/training/courses/${course.fields.slug}`}
            >
              Details
              <ChevronRight />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Courses;
