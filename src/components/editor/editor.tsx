import { CollapseAllIcon, ExpandAllIcon } from "@/icons";
import { JsonEditor } from "webeditors-react";
import { Button } from "../ui/button";

type EditorProps = {
  value: string;
  isReady: boolean;
  tabSize?: number;
  mode?: EditorModes;
  theme: string;
  readonly?: boolean;
};

type EditorModes = "application/json" | "text/plain";

export const Editor = ({
  value,
  isReady,
  tabSize = 2,
  mode = "application/json",
  theme,
  readonly = false,
}: EditorProps) => {
  console.log({ value, tabSize, mode });

  return (
    isReady && (
      <div className="max-h-[1000px] overflow-hidden border-dashed border-blue-200 m-2 rounded-xl shadow-sm shadow-slate-400">
        <JsonEditor theme={theme} value={value} readonly={readonly}>
          <div slot="panel" className="flex flex-row p-1">
            <Button variant="ghost" className="p-2">
              <CollapseAllIcon />
            </Button>
            <Button variant="ghost" className="p-2">
              <ExpandAllIcon />
            </Button>
          </div>
        </JsonEditor>
      </div>
    )
  );
};
