"use client";

import { CollapseAllIcon, ExpandAllIcon } from "@/icons";
import { JsonEditor, XmlEditor, YamlEditor } from "webeditors-react";
import { useRef } from "react";
import { TooltipProvider, TooltipTrigger, TooltipContent, Tooltip } from "../ui/tooltip";

export type EditorConfiguration = {
  value: string;
  isReady: boolean;
  tabSize?: number;
  mode?: EditorModes;
  theme: string;
  readonly?: boolean;
  id: string;
};

export type EditorEvents = {
  onChange: (value: unknown) => void;
};

export type EditorProps = EditorConfiguration & EditorEvents;

export type EditorModes = "json" | "txt" | "xml" | "yaml";

export const Editor = ({
  id,
  value,
  isReady,
  mode = "json",
  theme,
  readonly = false,
  onChange,
}: EditorProps) => {
  const editorRef = useRef<HTMLJsonEditorElement>(null);
  const showActionsPanel = mode !== "txt";
  const showFooter = mode !== "txt";

  const handleFoldAll = () => {
    if (!editorRef.current) return;

    editorRef.current.foldAll();
  };

  const handleUnfoldAll = () => {
    if (!editorRef.current) return;

    editorRef.current.unfoldAll();
  };

  const renderPanelActions = () => {
    return (
      <div slot="panel" className="flex flex-row p-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className="p-2 hover:bg-white hover:text-black rounded"
              onClick={handleFoldAll}
            >
              <CollapseAllIcon />
            </TooltipTrigger>
            <TooltipContent>
              <p>Fold all</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              className="p-2 hover:bg-white hover:text-black rounded"
              onClick={handleUnfoldAll}
            >
              <ExpandAllIcon />
            </TooltipTrigger>
            <TooltipContent>
              <p>Unfold all</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  };

  const editorProps = {
    id,
    ref: editorRef,
    theme,
    value,
    readonly,
    onEditorChange: onChange,
    footerConfig: {
      backgroundColor: "oklch(0.809 0.105 251.813)",
      color: "black",
    },
    showActionsPanel,
    showFooter,
  };

  const renderEditor = () => {
    switch (mode) {
      case "json":
      case "txt": {
        return (
          <JsonEditor {...editorProps} mode={mode === "txt" ? "text" : "json"}>
            {showActionsPanel && renderPanelActions()}
          </JsonEditor>
        );
      }
      case "xml": {
        return <XmlEditor {...editorProps}>{showActionsPanel && renderPanelActions()}</XmlEditor>;
      }
      case "yaml": {
        return (
          <YamlEditor {...editorProps}>{showActionsPanel && renderPanelActions()} </YamlEditor>
        );
      }

      default:
        break;
    }
  };

  return (
    true && (
      <div className="max-h-[1000px] overflow-hidden m-2 rounded-xl shadow-sm shadow-slate-400">
        {isReady ? renderEditor() : <textarea defaultValue="Placeholder for the editor" />}
      </div>
    )
  );
};
