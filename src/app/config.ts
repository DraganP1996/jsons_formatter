import { XMLBuilder, XMLParser } from "fast-xml-parser";
import { parse, stringify } from "yaml";

import { PAGE_PATHS, PagesDefinition } from "./types";
import { jsonYamlMock, mockXML, mockYAML, standardMock } from "./mock";
import { TabSizes } from "@/types";
import { ControlsConfig } from "@/components/controls";
import { JsonBeautifyAddionalContent, JsonToXmlAdditional } from "@/components/pages-content";

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
  jsonBeautify: {
    name: "Beautify Json Online",
    shortName: "Json Beautify",
    description:
      "Make your JSONs look better with our trustworthy online tool. Just a few clicks will let you read your data easily.",
    path: PAGE_PATHS.jsonBeautify,
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
    additionalContent: JsonBeautifyAddionalContent(),
  },
  jsonMinify: {
    name: "Json Minify Online",
    shortName: "Json Minify",
    description:
      "Use our top JSON Minifier online tool to reduce the size of your JSON files. It's simple, quick, and trustworthy.",
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
    name: "Json to String Online Converter",
    shortName: "Json to String",
    description:
      "Our online tool allows fast and easy conversion of JSONs to eligible and compatible textual strings.",
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
    name: "String to Json Online Converter",
    shortName: "String to Json",
    description:
      "You can use our online converter to change eligible strings into formatted JSONs, making it easy to review your data.",
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
    name: "Json to XML Online Converter",
    shortName: "Json to XML",
    description:
      "Convert JSON to XML quickly with our free and easy online tool. Change your JSON data into clear, organized XML in just seconds.",
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
    additionalContent: JsonToXmlAdditional(),
    sourceChangeFn: (value: string) => {
      return xmlBuilder.build(JSON.parse(value));
    },
  },
  xmlToJson: {
    name: "XML to Json Online Converter",
    shortName: "XML to Json",
    description:
      "Convert XML into JSON using the best online tool designed for this task. It's quick, easy, and effective.",
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
    name: "Json to YAML Online Converter",
    shortName: "Json to YAML",
    description:
      "Easily convert JSON data into YAML format with our fast, free, and reliable online toolt. Perfect for developers and data enthusiasts.",
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
    name: "YAML to Json Online Converter",
    shortName: "YAML to Json",
    description: "Use this online convert to change your YAML file into a valid JSON format.",
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
      try {
        const parsedYaml = parse(value);
        const formattedValue =
          tabSize !== undefined
            ? JSON.stringify(parsedYaml, null, tabSize)
            : JSON.stringify(parsedYaml);

        return formattedValue;
      } catch (err) {
        console.log("Error when parsing YAML", err);
        return "";
      }
    },
  },
} as const;
