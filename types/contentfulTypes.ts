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
    };
  }
  
  export interface CourseEntry {
    metadata: {
      tags: any[];
      concepts: any[];
    };
    sys: Sys;
    fields: CourseFields;
  }
  
  export interface Sys {
    space: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
    publishedVersion: number;
    revision: number;
    contentType: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    locale: string;
  }
  
  export interface CourseFields {
    name: string;
    code: string;
    price: number;
    duration: number;
    level: string;
    language: string;
    slug: string;
    startDate: string;
    endDate: string;
    description: string;
    targetAudience: string;
    coverImage: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    venue: string;
    learningOutcomes: string;
    nextAvailable: string;
    endsOn: string;
  }
  
  export interface Asset {
    metadata: {
      tags: any[];
      concepts: any[];
    };
    sys: {
      space: {
        sys: {
          type: string;
          linkType: string;
          id: string;
        };
      };
      id: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      environment: {
        sys: {
          id: string;
          type: string;
          linkType: string;
        };
      };
      publishedVersion: number;
      revision: number;
      locale: string;
    };
    fields: {
      title: string;
      description: string;
      file: FileDetails;
    };
  }
  
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
  