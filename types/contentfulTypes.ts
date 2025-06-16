// Generic link to another Contentful entry or asset
export interface Link {
  sys: {
    type: "Link";
    linkType: string;
    id: string;
  };
}

// Top‐level response
export interface ContentfulResponse {
  sys: {
    type: string;
  };
  total: number;
  skip: number;
  limit: number;
  items: CourseEntry[];
  includes: {
    Asset: Asset[];
    Entry: TrainerEntry[]; // trainers show up here
  };
}

// A single course entry
export interface CourseEntry {
  metadata: {
    tags: any[];
    concepts: any[];
  };
  sys: Sys;
  fields: CourseFields;
}

// System metadata common to both courses and trainers
export interface Sys {
  space: Link;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Link;
  publishedVersion: number;
  revision: number;
  contentType: Link;
  locale: string;
}

// The fields on your Course content type
export interface CourseFields {
  name: string;
  code: string;
  price: number;
  duration: number;
  level: string;
  language: string;
  slug: string;
  description: string;
  targetAudience: string;
  coverImage: Link;
  poster: Link; // ← newly added
  venue: string;
  learningOutcomes: string;
  nextAvailable: string;
  trainers: Link[]; // already present
}

// A single asset (e.g. an image)
export interface Asset {
  metadata: {
    tags: any[];
    concepts: any[];
  };
  sys: Sys;
  fields: {
    title: string;
    description: string;
    file: FileDetails;
  };
}

// File details embedded in an asset
export interface FileDetails {
  url: string;
  details: {
    size: number;
    image?: {
      width: number;
      height: number;
    };
  };
  fileName: string;
  contentType: string;
}

// A single trainer entry included in `includes.Entry`
export interface TrainerEntry {
  metadata: {
    tags: any[];
    concepts: any[];
  };
  sys: Sys;
  fields: TrainerFields;
}

// The fields on your Trainer content type
export interface TrainerFields {
  name: string;
  profile: string; // optional if some trainers only have qualification
  qualification: string;
}
