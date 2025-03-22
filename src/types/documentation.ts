import { BasicPageConfiguration } from "./page-info";

export type LIbraryInfo = {
  name: string;
  version: string;
  path: string;
  framework: Framework;
};

export const SUPPORTED_FRAMEWORDS = ["vanilla", "react"] as const;

export type Framework = (typeof SUPPORTED_FRAMEWORDS)[number];

export const DOC_PATHS = {
  jsonEditor: "json-editor",
  xmlEditor: "xml-editor",
  yamlEditor: "yaml-editor",
} as const;

export type DocPageKeys = keyof typeof DOC_PATHS;
export type DocPagePaths = (typeof DOC_PATHS)[DocPageKeys];

export type DocumentationPageDefinition = BasicPageConfiguration<DocPagePaths>;

export type DocPagesDefinition = Record<
  Framework,
  Record<DocPageKeys, DocumentationPageDefinition>
>;
