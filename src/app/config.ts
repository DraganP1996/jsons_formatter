import { XMLBuilder, XMLParser } from "fast-xml-parser";
import { parse, stringify } from "yaml";

import { PAGE_PATHS, PagesDefinition } from "./types";
import { jsonYamlMock, mockXML, mockYAML, standardMock } from "./mock";
import { TabSizes } from "@/types";
import { ControlsConfig } from "@/components/controls";

const showAllControls: ControlsConfig = {
  showTabSizeControl: true,
  showUploadControl: true,
  showThemeControl: true,
  showConvertToControl: true,
  showCreateLinkControl: true,
  showDownloadControl: true,
  showClearControl: true,
};

const xmlBuilder = new XMLBuilder({
  format: true,
});
const xmlParser = new XMLParser();

export const PAGES_CONFIG: PagesDefinition = {
  jsonBeatify: {
    name: "Json Beautify",
    path: PAGE_PATHS.jsonBeatify,
    order: 0,
    controlsConfig: { ...showAllControls },
    converterConfig: {
      0: {
        id: "json_editor_origin_item",
        value: JSON.stringify(standardMock),
        mode: "json",
        readonly: false,
      },
      1: {
        id: "json_editor_result_item",
        value: JSON.stringify(standardMock, null, 2),
        mode: "json",
        readonly: true,
      },
    },
    sourceChangeFn: (value: string, tabSize?: TabSizes) => {
      return tabSize !== undefined
        ? JSON.stringify(JSON.parse(value), null, tabSize)
        : JSON.stringify(JSON.parse(value));
    },
  },
  jsonMinify: {
    name: "Json Minify",
    path: PAGE_PATHS.jsonMinify,
    order: 1,
    controlsConfig: { ...showAllControls },
    converterConfig: {
      0: {
        id: "json_editor_origin_item",
        value: JSON.stringify(standardMock, null, 2),
        mode: "json",
        readonly: false,
      },
      1: {
        id: "json_editor_result_item",
        value: JSON.stringify(standardMock, null, 0),
        mode: "json",
        readonly: true,
      },
    },
    sourceChangeFn: (value: string) => JSON.stringify(JSON.parse(value), null, 0),
  },
  jsonToString: {
    name: "Json to String",
    path: PAGE_PATHS.jsonToString,
    order: 2,
    controlsConfig: {
      ...showAllControls,
      showTabSizeControl: false,
      showDownloadControl: false,
    },
    converterConfig: {
      0: {
        id: "json_editor_origin_item",
        value: JSON.stringify(standardMock, null, 2),
        mode: "json",
        readonly: false,
      },
      1: {
        id: "json_editor_result_item",
        value: JSON.stringify(JSON.stringify(standardMock)),
        mode: "text",
        readonly: true,
      },
    },
    sourceChangeFn: (value: string) => {
      return JSON.stringify(JSON.stringify(JSON.parse(value)));
    },
  },
  stringToJson: {
    name: "String to Json",
    path: PAGE_PATHS.stringToJson,
    order: 3,
    controlsConfig: {
      ...showAllControls,
      showUploadControl: false,
      showConvertToControl: false,
      showCreateLinkControl: false,
    },
    converterConfig: {
      0: {
        id: "json_editor_origin_item",
        value: JSON.stringify(JSON.stringify(standardMock)),
        mode: "text",
        readonly: false,
      },
      1: {
        id: "json_editor_result_item",
        value: JSON.stringify(standardMock, null, 2),
        mode: "json",
        readonly: true,
      },
    },
    sourceChangeFn: (value: string, tabSize?: TabSizes) => {
      const formattedValue =
        tabSize !== undefined
          ? JSON.stringify(JSON.parse(value), null, 2)
          : JSON.stringify(JSON.parse(value));

      return formattedValue;
    },
  },
  jsonToXml: {
    name: "Json to XML",
    path: PAGE_PATHS.jsonToXml,
    order: 4,
    controlsConfig: {
      ...showAllControls,
      showTabSizeControl: false,
      showDownloadControl: false,
    },
    converterConfig: {
      0: {
        id: "json_editor_origin_item",
        value: JSON.stringify(standardMock, null, 2),
        mode: "json",
        readonly: false,
      },
      1: {
        id: "xml_editor_result_item",
        value: xmlBuilder.build(standardMock),
        mode: "xml",
        readonly: true,
      },
    },
    sourceChangeFn: (value: string) => {
      return xmlBuilder.build(JSON.parse(value));
    },
  },
  xmlToJson: {
    name: "XML to Json",
    path: PAGE_PATHS.xmlToJson,
    order: 5,
    controlsConfig: {
      ...showAllControls,
      showUploadControl: false,
      showConvertToControl: false,
      showCreateLinkControl: false,
    },
    converterConfig: {
      0: {
        id: "xml_editor_origin_item",
        value: mockXML,
        mode: "xml",
        readonly: false,
      },
      1: {
        id: "json_editor_result_item",
        value: JSON.stringify(xmlParser.parse(mockXML), null, 2),
        mode: "json",
        readonly: true,
      },
    },
    sourceChangeFn: (value: string, tabSize?: TabSizes) => {
      const formattedValue =
        tabSize !== undefined
          ? JSON.stringify(xmlParser.parse(value), null, tabSize)
          : JSON.stringify(xmlParser.parse(value));

      return formattedValue;
    },
  },
  jsonToYaml: {
    name: "Json to YAML",
    path: PAGE_PATHS.jsonToYaml,
    order: 6,
    controlsConfig: {
      ...showAllControls,
      showTabSizeControl: false,
      showDownloadControl: false,
    },
    converterConfig: {
      0: {
        id: "json_editor_origin_item",
        value: JSON.stringify(jsonYamlMock, null, 2),
        mode: "json",
        readonly: false,
      },
      1: {
        id: "yaml_editor_result_item",
        value: stringify(jsonYamlMock),
        mode: "yaml",
        readonly: true,
      },
    },
    sourceChangeFn: (value: string) => {
      return stringify(value, { indent: 2 });
    },
  },
  yamlToJson: {
    name: "YAML to  Json",
    path: PAGE_PATHS.yamlToJson,
    order: 7,
    controlsConfig: {
      ...showAllControls,
      showUploadControl: false,
      showConvertToControl: false,
      showCreateLinkControl: false,
    },
    converterConfig: {
      0: {
        id: "yaml_editor_origin_item",
        value: mockYAML,
        mode: "yaml",
        readonly: false,
      },
      1: {
        id: "json_editor_result_item",
        value: JSON.stringify(parse(mockYAML), null, 2),
        mode: "json",
        readonly: true,
      },
    },
    sourceChangeFn: (value: string, tabSize?: TabSizes) => {
      const formattedValue =
        tabSize !== undefined
          ? JSON.stringify(parse(value), null, tabSize)
          : JSON.stringify(parse(value));

      return formattedValue;
    },
  },
} as const;
