/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

const JsonEditor = dynamic(() => import("webeditors-react").then((m) => m.JsonEditor), {
  ssr: false,
});

const JavascriptEditor = dynamic(() => import("webeditors-react").then((m) => m.JavascriptEditor), {
  ssr: false,
});

const YamlEditor = dynamic(() => import("webeditors-react").then((m) => m.YamlEditor), {
  ssr: false,
});

const XmlEditor = dynamic(() => import("webeditors-react").then((m) => m.XmlEditor), {
  ssr: false,
});

type MdxCodeEditorProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  theme: any;
  height: string;
  readonly: boolean;
  type: "json" | "javascript" | "yaml" | "xml";
  value: string;
  footerConfig?: any;
  showActionsPanel: boolean;
};

export const Editor = ({
  theme,
  readonly,
  type,
  value,
  footerConfig,
  showActionsPanel,
}: Omit<MdxCodeEditorProps, "height">) => {
  switch (type) {
    case "json": {
      return (
        <JsonEditor
          value={value}
          theme={theme}
          mode="json"
          readonly={readonly}
          footerConfig={footerConfig}
          showActionsPanel={showActionsPanel}
        >
          {showActionsPanel && <div slot="panel"> Actions Panel Content </div>}
        </JsonEditor>
      );
    }
    case "javascript": {
      return (
        <JavascriptEditor
          value={value}
          theme={theme}
          readonly={readonly}
          footerConfig={footerConfig}
          showActionsPanel={showActionsPanel}
        >
          {showActionsPanel && <div slot="panel"> Actions Panel Content </div>}
        </JavascriptEditor>
      );
    }
    case "yaml": {
      return (
        <YamlEditor
          value={value}
          theme={theme}
          readonly={readonly}
          footerConfig={footerConfig}
          showActionsPanel={showActionsPanel}
        >
          {showActionsPanel && <div slot="panel"> Actions Panel Content </div>}
        </YamlEditor>
      );
    }
    case "xml": {
      return (
        <XmlEditor
          value={value}
          theme={theme}
          readonly={readonly}
          footerConfig={footerConfig}
          showActionsPanel={showActionsPanel}
        >
          {showActionsPanel && <div slot="panel"> Actions Panel Content </div>}
        </XmlEditor>
      );
    }
    default:
      return (
        <JsonEditor
          value={value}
          theme={theme}
          mode="json"
          readonly={readonly}
          footerConfig={footerConfig}
          showActionsPanel={showActionsPanel}
        >
          {showActionsPanel && <div slot="panel"> Actions Panel Content </div>}
        </JsonEditor>
      );
  }
};

export const CodeSample = ({ children }: { children: ReactNode }) => {
  return <JsonEditor value={children?.toString()} readonly />;
};

export const MdxCodeEditor = ({
  theme,
  height,
  readonly,
  type,
  value,
  footerConfig,
  showActionsPanel,
}: MdxCodeEditorProps) => {
  return (
    <div
      style={{
        height,
      }}
      className="my-2"
    >
      <Editor
        value={value}
        theme={theme}
        readonly={readonly}
        type={type}
        footerConfig={footerConfig}
        showActionsPanel={showActionsPanel}
      />
    </div>
  );
};
