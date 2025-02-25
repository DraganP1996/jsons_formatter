"use client";

import dynamic from "next/dynamic";

import { Controlled } from "react-codemirror2";
import { jsonLanguage } from "@codemirror/lang-json";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "../../styles/editor.css";
import "codemirror/addon/lint/lint.css";

/* eslint-disable @typescript-eslint/no-require-imports */

if (typeof navigator !== "undefined") {
  require("codemirror/mode/javascript/javascript");
  require("codemirror/addon/lint/lint");
  require("codemirror/addon/lint/json-lint");
  require("codemirror/addon/search/search");
  require("codemirror/addon/search/searchcursor");
  require("codemirror/addon/dialog/dialog");
  require("codemirror/addon/search/jump-to-line");
  require("codemirror/addon/selection/mark-selection");
  require("codemirror/addon/selection/active-line.js");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).jsonlint = require("jsonlint-mod");
}

type EditorProps = {
  value: string;
  isReady: boolean;
  tabSize?: number;
  onChange: (value: string) => void;
};

export const Editor = ({ value, isReady, tabSize = 2, onChange }: EditorProps) => {
  const handleChange = (editor: unknown, data: unknown, value: string) => {
    onChange(value);
  };

  return (
    isReady && (
      <Controlled
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          mode: "application/json",
          json: true,
          languages: [jsonLanguage],
          lineNumbers: true,
          gutters: ["CodeMirror-lint-markers"],
          theme: "material",
          tabSize: tabSize,
        }}
        className="h-full"
      />
    )
  );
};
