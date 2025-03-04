"use client";

import { SourceChangeFn, useCommonConverterStuff } from "@/hook/useCommonConverterStuff";
import { ThreeColumnsLayout } from "../layout";
import { useTabSize } from "@/hook/useTabSize";
import { TabSizes } from "@/types";
import { Editor, EditorConfiguration } from "../editor";
import { BeautifierControls } from "../controls";

export type ConverterEditorConfiguration = Omit<
  EditorConfiguration,
  "isReady" | "tabSize" | "theme"
>;

export type ConverterEditorConfigurations = {
  [0]: ConverterEditorConfiguration;
  [1]: ConverterEditorConfiguration;
};

export type ConverterProps = {
  allowTabSizeChange?: boolean;
  initialTabSize: TabSizes;
  configurations: ConverterEditorConfigurations;
  sourceChangeFn: SourceChangeFn;
};

export const Converter = ({
  configurations,
  sourceChangeFn,
  initialTabSize,
  allowTabSizeChange = false,
}: ConverterProps) => {
  const { tabSize, setTabSize } = useTabSize(initialTabSize);

  const { isReadyToLoadEditor, source, result, theme, setTheme, handleSourceChange } =
    useCommonConverterStuff({
      initalSourceValue: configurations[0].value,
      initialResultValue: configurations[1].value,
      sourceChangeFn,
    });

  const handleTabSizeChange = (tabSize: TabSizes) => {
    if (!allowTabSizeChange) return;
    setTabSize(tabSize);
    handleSourceChange(source, tabSize);
  };

  return (
    <ThreeColumnsLayout>
      <Editor
        isReady={isReadyToLoadEditor}
        value={source}
        theme={theme}
        readonly={configurations[0].readonly}
        mode={configurations[0].mode}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(val) => handleSourceChange((val as any).detail as string, tabSize)}
      />
      <BeautifierControls
        tabSize={tabSize}
        theme={theme}
        changeTabSize={handleTabSizeChange}
        changeTheme={setTheme}
        onUrlConversion={() => {}}
      />
      <Editor
        isReady={isReadyToLoadEditor}
        value={result}
        theme={theme}
        readonly={configurations[1].readonly}
        mode={configurations[1].mode}
        onChange={() => {}}
      />
    </ThreeColumnsLayout>
  );
};
