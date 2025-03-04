"use client";

import { CollapseAllIcon, ExpandAllIcon } from "@/icons";
import { JsonEditor } from "webeditors-react";
import { Button } from "../ui/button";
import { useRef } from "react";

export type EditorConfiguration = {
  value: string;
  isReady: boolean;
  tabSize?: number;
  mode?: EditorModes;
  theme: string;
  readonly?: boolean;
};

export type EditorEvents = {
  onChange: (value: unknown) => void;
};

export type EditorProps = EditorConfiguration & EditorEvents;

type EditorModes = "json" | "text";

export const Editor = ({
  value,
  isReady,
  tabSize = 2,
  mode = "json",
  theme,
  readonly = false,
  onChange,
}: EditorProps) => {
  const editorRef = useRef<HTMLJsonEditorElement>(null);
  console.log({ value, tabSize, mode });

  const handleFoldAll = () => {
    if (!editorRef.current) return;

    editorRef.current.foldAll();
  };

  const handleUnfoldAll = () => {
    if (!editorRef.current) return;

    editorRef.current.unfoldAll();
  };

  return (
    isReady && (
      <div className="max-h-[1000px] overflow-hidden m-2 rounded-xl shadow-sm shadow-slate-400">
        <JsonEditor
          ref={editorRef}
          theme={theme}
          value={value}
          readonly={readonly}
          onEditorChange={onChange}
          footerConfig={{
            backgroundColor: "oklch(0.809 0.105 251.813)",
            color: "black",
          }}
          mode={mode}
        >
          <div slot="panel" className="flex flex-row p-1">
            <Button variant="ghost" className="p-2" onClick={handleFoldAll}>
              <CollapseAllIcon />
            </Button>
            <Button variant="ghost" className="p-2" onClick={handleUnfoldAll}>
              <ExpandAllIcon />
            </Button>
          </div>
        </JsonEditor>
      </div>
    )
  );
};
