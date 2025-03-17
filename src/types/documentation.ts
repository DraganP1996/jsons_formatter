export type LIbraryInfo = {
  name: string;
  version: string;
  path: string;
};

export type DocumentationPageDefinition = {
  path: string;
  order: number;
  name: string;
};

export const SUPPORTED_FRAMEWORDS = ["vanilla", "react"] as const;

export type Framework = (typeof SUPPORTED_FRAMEWORDS)[number];
