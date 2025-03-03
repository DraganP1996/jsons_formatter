import { JsonEditor } from "webeditors-react";

type EditorProps = {
  value: string;
  isReady: boolean;
  tabSize?: number;
  mode?: EditorModes;
  theme: string;
};

type EditorModes = "application/json" | "text/plain";

export const Editor = ({
  value,
  isReady,
  tabSize = 2,
  mode = "application/json",
  theme,
}: EditorProps) => {
  console.log({ value, tabSize, mode });

  return (
    isReady && (
      <div className="max-h-[800px] overflow-auto">
        <JsonEditor theme={theme} value={value} />
      </div>
    )
  );
};
