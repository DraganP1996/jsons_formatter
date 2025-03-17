import { XMLBuilder, XMLParser } from "fast-xml-parser";
import { parse, stringify } from "yaml";

import { PAGE_PATHS, PagesDefinition } from "../app/types";
import { jsonYamlMock, mockXML, mockYAML, standardMock } from "../app/mock";
import { TabSizes } from "@/types";
import { ControlsConfig } from "@/components/controls";
import { ConverterAdditionalContent } from "@/components/pages-content";

import { Posts } from "../app/posts";

const showAllControls: ControlsConfig = {
  showTabSizeControl: true,
  showUploadControl: true,
  showThemeControl: true,
  showConvertToControl: true,
  showCreateLinkControl: false,
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
    keywords: [
      "json beautify",
      "beautify json online",
      "code beautify json",
      "json beautifier chrome",
      "json prettify online",
    ],
    path: PAGE_PATHS.jsonBeautify,
    order: 0,
    controlsConfig: { ...showAllControls, revertPath: PAGE_PATHS.jsonMinify },
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
    additionalContent: (
      <ConverterAdditionalContent>
        <Posts.JsonBeautify />
      </ConverterAdditionalContent>
    ),
  },
  jsonMinify: {
    name: "Json Minify Online",
    shortName: "Json Minify",
    description:
      "Use our top JSON Minifier online tool to reduce the size of your JSON files. It's simple, quick, and trustworthy.",
    keywords: ["json minify", "minify json", "json minify online"],
    path: PAGE_PATHS.jsonMinify,
    order: 1,
    controlsConfig: {
      ...showAllControls,
      revertPath: PAGE_PATHS.jsonBeautify,
      showTabSizeControl: false,
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
        value: JSON.stringify(standardMock, null, 0),
        mode: "json",
        readonly: true,
      },
    },
    sourceChangeFn: (value: string) => JSON.stringify(JSON.parse(value), null, 0),
    additionalContent: (
      <ConverterAdditionalContent>
        <Posts.JsonMinify />
      </ConverterAdditionalContent>
    ),
  },
  jsonToString: {
    name: "Json to String Online Converter",
    shortName: "Json to String",
    description:
      "Our online tool allows fast and easy conversion of JSONs to eligible and compatible textual strings.",
    keywords: [
      "json to string",
      "json to json string",
      "json to string online",
      "convert json to string online",
      "convert json into string online",
      "json convert to string online",
    ],
    path: PAGE_PATHS.jsonToString,
    order: 2,
    controlsConfig: {
      ...showAllControls,
      showTabSizeControl: false,
      revertPath: PAGE_PATHS.stringToJson,
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
        mode: "txt",
        readonly: true,
      },
    },
    sourceChangeFn: (value: string) => {
      return JSON.stringify(JSON.stringify(JSON.parse(value)));
    },
    additionalContent: (
      <ConverterAdditionalContent>
        <Posts.JsonToString />
      </ConverterAdditionalContent>
    ),
  },
  stringToJson: {
    name: "String to Json Online Converter",
    shortName: "String to Json",
    description:
      "You can use our online converter to change eligible strings into formatted JSONs, making it easy to review your data.",
    path: PAGE_PATHS.stringToJson,
    keywords: [
      "string to json",
      "string json to json",
      "json to string online",
      "string to json online",
      "convert json to string online",
      "convert json string to json",
    ],
    order: 3,
    controlsConfig: {
      ...showAllControls,
      showUploadControl: false,
      showConvertToControl: false,
      showCreateLinkControl: false,
      revertPath: PAGE_PATHS.jsonToString,
    },
    converterConfig: {
      0: {
        id: "json_editor_origin_item",
        value: JSON.stringify(JSON.stringify(standardMock)),
        mode: "txt",
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
    additionalContent: (
      <ConverterAdditionalContent>
        <Posts.StringToJson />
      </ConverterAdditionalContent>
    ),
  },
  jsonToXml: {
    name: "Json to XML Online Converter",
    shortName: "Json to XML",
    description:
      "Convert JSON to XML quickly with our free and easy online tool. Change your JSON data into clear, organized XML in just seconds.",
    path: PAGE_PATHS.jsonToXml,
    keywords: [
      "json to xml",
      "json to xml converter",
      "conversion of json to xml",
      "json to xml conversion online",
      "transform json to xml",
      "translate json to xml",
      "change json to xml",
      "convert json into xml",
      "convert json to xml online",
    ],
    order: 4,
    controlsConfig: {
      ...showAllControls,
      showTabSizeControl: false,
      revertPath: PAGE_PATHS.xmlToJson,
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
    additionalContent: (
      <ConverterAdditionalContent>
        <Posts.JsonToXml />
      </ConverterAdditionalContent>
    ),
  },
  xmlToJson: {
    name: "XML to Json Online Converter",
    shortName: "XML to Json",
    description:
      "Convert XML into JSON using the best online tool designed for this task. It's quick, easy, and effective.",
    path: PAGE_PATHS.xmlToJson,
    keywords: [
      "xml to json",
      "xml to json converter",
      "xml to json online",
      "change xml to json",
      "convert to xml to json",
      "turn xml into json",
      "from xml to json",
      "json formatter xml",
    ],
    order: 5,
    controlsConfig: {
      ...showAllControls,
      showUploadControl: false,
      showConvertToControl: false,
      showCreateLinkControl: false,
      revertPath: PAGE_PATHS.jsonToXml,
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
    additionalContent: (
      <ConverterAdditionalContent>
        <Posts.XmlToJson />
      </ConverterAdditionalContent>
    ),
  },
  jsonToYaml: {
    name: "Json to YAML Online Converter",
    shortName: "Json to YAML",
    description:
      "Easily convert JSON data into YAML format with our fast, free, and reliable online toolt. Perfect for developers and data enthusiasts.",
    path: PAGE_PATHS.jsonToYaml,
    keywords: [
      "json to yaml",
      "json to yaml converter",
      "json to yaml online",
      "convert json to yaml online",
      "from json to yaml",
    ],
    order: 6,
    controlsConfig: {
      ...showAllControls,
      showTabSizeControl: false,
      revertPath: PAGE_PATHS.yamlToJson,
    },
    additionalContent: (
      <ConverterAdditionalContent>
        <Posts.JsonToYaml />
      </ConverterAdditionalContent>
    ),
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
    keywords: [
      "yaml to json",
      "convert yaml to json",
      "online yaml to json",
      "yaml to json converter online",
      "yaml to json online",
    ],
    order: 7,
    controlsConfig: {
      ...showAllControls,
      showUploadControl: false,
      showConvertToControl: false,
      showCreateLinkControl: false,
      revertPath: PAGE_PATHS.jsonToYaml,
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
    additionalContent: (
      <ConverterAdditionalContent>
        <Posts.YamlToJson />
      </ConverterAdditionalContent>
    ),
  },
} as const;
