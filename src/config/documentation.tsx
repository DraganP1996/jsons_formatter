import { DOC_PATHS, DocPagesDefinition, FrameworkPageDefinition } from "@/types";

import { DocPosts } from "./doc-posts";

import {
  BoxLink,
  GeneralComponents,
  HeaderComponents,
} from "@/app/(docs)/documentation/mdx-config";
import { ReactNode } from "react";

const MDX_COMPONENTS = {
  ...HeaderComponents,
  ...GeneralComponents,
  code: ({ children }: { children: ReactNode }) => (
    <span className="p-1 bg-stone-200 rounded shadow"> {children} </span>
  ),
};

export const FRAMEWORK_HOME_CONFIGS: { [key: string]: FrameworkPageDefinition } = {
  vanilla: {
    path: "vanilla",
    order: 1,
    name: "Introduction",
    shortName: "Introduction",
    description:
      "Documentation of the webeditors-vanilla package, instruction to install and start to use the package.",
    keywords: ["web component editor", "web element editor", "framework agnostic web editor"],
    post: <DocPosts.VanillaInstallation components={MDX_COMPONENTS} />,
  },
  react: {
    path: "react",
    order: 1,
    name: "Introduction",
    shortName: "Introduction",
    description:
      "Introductions to the webeditors-rect package with instructions about the installation of the component library.",
    keywords: ["react editor", "web editor react"],
    post: <DocPosts.ReactInstallation components={{ ...MDX_COMPONENTS, ...BoxLink }} />,
  },
};

export const DOC_PAGE_CONFIG: DocPagesDefinition = {
  react: {
    jsonEditor: {
      path: DOC_PATHS.jsonEditor,
      order: 1,
      name: "JSON Editor",
      shortName: "JSON Editor",
      description:
        "This is a guide for the JSON editor component within the webeditors-react library. It provides a straightforward method for integrating a JSON editor into your react application.",
      keywords: [
        "json editor",
        "jsoneditor react",
        "json editor react",
        "react json editor with schema validation",
      ],
      post: <DocPosts.ReactJsonEditor components={MDX_COMPONENTS} />,
    },
    xmlEditor: {
      path: DOC_PATHS.xmlEditor,
      order: 1,
      name: "XML Editor",
      shortName: "XML Editor",
      description:
        "This is a guide for the XML editor component within the webeditors-react library. It provides a straightforward method for integrating a XML editor into your react application.",
      keywords: ["xml editor", "xml editor react"],
      post: <DocPosts.ReactXmlEditor components={MDX_COMPONENTS} />,
    },
    yamlEditor: {
      path: DOC_PATHS.yamlEditor,
      order: 1,
      name: "YAML Editor",
      shortName: "YAML Editor",
      description:
        "This is a guide for the YAML editor component within the webeditors-react library. It provides a straightforward method for integrating a YAML editor into your react application.",
      keywords: ["yaml editor", "react yaml editor"],
      post: <DocPosts.ReactYamlEditor components={MDX_COMPONENTS} />,
    },
  },
  vanilla: {
    jsonEditor: {
      path: DOC_PATHS.jsonEditor,
      order: 1,
      name: "JSON Editor",
      shortName: "JSON Editor",
      description:
        "This is a guide for the JSON editor component within the webeditors-vanilla library. It provides a straightforward method for integrating a framework agnostic YAML editor into your application.",
      keywords: [],
      post: <DocPosts.VanillaJsonEditor components={MDX_COMPONENTS} />,
    },
    xmlEditor: {
      path: DOC_PATHS.xmlEditor,
      order: 1,
      name: "XML Editor",
      shortName: "XML Editor",
      description:
        "This is a guide for the XML editor component within the webeditors-vanilla library. It provides a straightforward method for integrating a framework agnostic XML editor into your application.",
      keywords: [],
      post: <DocPosts.VanillaXmlEditor components={MDX_COMPONENTS} />,
    },
    yamlEditor: {
      path: DOC_PATHS.yamlEditor,
      order: 1,
      name: "YAML Editor",
      shortName: "YAML Editor",
      description:
        "This is a guide for the YAML editor component within the webeditors-vanilla library. It provides a straightforward method for integrating a framework agnostic YAML editor into your application.",
      keywords: [],
      post: <DocPosts.VanillaYamlEditor components={MDX_COMPONENTS} />,
    },
  },
};
