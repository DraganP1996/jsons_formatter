import { ControlsConfig } from "@/components/controls";
import { ConverterEditorConfigurations } from "@/components/converter";
import { SourceChangeFn } from "@/hook/useCommonConverterStuff";
import { ReactNode } from "react";

export const PAGE_PATHS = {
  //   csvToJson: "csv-to-json",
  jsonBeautify: "beautify-json-online",
  jsonMinify: "json-minify-online",
  jsonToString: "convert-json-to-string-online",
  stringToJson: "convert-string-to-string-online",
  jsonToXml: "online-json-to-xml-converter",
  xmlToJson: "online-xml-to-json-converter",
  jsonToYaml: "json-to-yaml-online-converter",
  yamlToJson: "yaml-to-json-online-converter",
  //   jsonToCsv: "json-to-csv",
} as const;

export type PageKeys = keyof typeof PAGE_PATHS;
export type PagePaths = (typeof PAGE_PATHS)[PageKeys];

export type PageConfiguration = {
  path: PagePaths;
  order: number;
  name: string;
  shortName: string;
  description: string;
  controlsConfig: ControlsConfig;
  converterConfig: ConverterEditorConfigurations;
  additionalContent?: ReactNode;
  sourceChangeFn: SourceChangeFn;
};

export type PagesDefinition = Record<PageKeys, PageConfiguration>;
