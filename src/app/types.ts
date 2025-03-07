import { ControlsConfig } from "@/components/controls";
import { ConverterEditorConfigurations } from "@/components/converter";
import { SourceChangeFn } from "@/hook/useCommonConverterStuff";

export const PAGE_PATHS = {
  //   csvToJson: "csv-to-json",
  jsonBeatify: "json-beautify",
  jsonMinify: "json-minify",
  jsonToString: "json-to-string",
  stringToJson: "string-to-json",
  jsonToXml: "json-to-xml",
  xmlToJson: "xml-to-json",
  jsonToYaml: "json-to-yaml",
  yamlToJson: "yaml-to-json",
  //   jsonToCsv: "json-to-csv",
} as const;

export type PageKeys = keyof typeof PAGE_PATHS;
export type PagePaths = (typeof PAGE_PATHS)[PageKeys];

export type PageConfiguration = {
  path: PagePaths;
  order: number;
  name: string;
  controlsConfig: ControlsConfig;
  converterConfig: ConverterEditorConfigurations;
  sourceChangeFn: SourceChangeFn;
};

export type PagesDefinition = Record<PageKeys, PageConfiguration>;
