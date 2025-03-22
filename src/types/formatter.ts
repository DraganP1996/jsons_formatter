import { ControlsConfig } from "@/components/controls";
import { BasicPageConfiguration } from "./page-info";
import { ConverterEditorConfigurations } from "@/components/converter";
import { SourceChangeFn } from "@/hook/useCommonConverterStuff";

export const FORMATTER_PATHS = {
  //   csvToJson: "csv-to-json",
  jsonBeautify: "beautify-json-online",
  jsonMinify: "json-minify-online",
  jsonToString: "convert-json-to-string-online",
  stringToJson: "convert-string-to-json-online",
  jsonToXml: "online-json-to-xml-converter",
  xmlToJson: "online-xml-to-json-converter",
  jsonToYaml: "json-to-yaml-online-converter",
  yamlToJson: "yaml-to-json-online-converter",
  //   jsonToCsv: "json-to-csv",
} as const;

export type FormatterPageKeys = keyof typeof FORMATTER_PATHS;
export type FormatterPagePaths = (typeof FORMATTER_PATHS)[FormatterPageKeys];

export type FormatterPageConfiguration = BasicPageConfiguration<FormatterPagePaths> & {
  controlsConfig: ControlsConfig;
  converterConfig: ConverterEditorConfigurations;
  sourceChangeFn: SourceChangeFn;
};

export type FormatterPagesDefinition = Record<FormatterPageKeys, FormatterPageConfiguration>;
