"use client";

import { useCallback } from "react";

import { SourceChangeFn, useCommonConverterStuff } from "@/hook/useCommonConverterStuff";
import { TabSizes } from "@/types";
import { useTabSize } from "@/hook/useTabSize";
import { ThreeColumnsLayout } from "../layout";
import { Editor, EditorConfiguration } from "../editor";
import { ControlsConfig, ConvertControls } from "../controls";

export type ConverterEditorConfiguration = Omit<
  EditorConfiguration,
  "isReady" | "tabSize" | "theme"
>;

export type ConverterEditorConfigurations = {
  [0]: ConverterEditorConfiguration;
  [1]: ConverterEditorConfiguration;
};

export type ConverterProps = {
  initialTabSize: TabSizes;
  configurations: ConverterEditorConfigurations;
  converterControlsConfig: ControlsConfig;
  sourceChangeFn: SourceChangeFn;
};

export const Converter = ({
  configurations,
  sourceChangeFn,
  initialTabSize,
  converterControlsConfig,
}: ConverterProps) => {
  const { tabSize, setTabSize } = useTabSize(initialTabSize);

  const { isReadyToLoadEditor, source, result, theme, setTheme, handleSourceChange } =
    useCommonConverterStuff({
      initalSourceValue: configurations[0].value,
      initialResultValue: configurations[1].value,
      sourceChangeFn,
    });

  const handleTabSizeChange = useCallback(
    (tabSize: TabSizes) => {
      if (!converterControlsConfig.showTabSizeControl) return;
      setTabSize(tabSize);
      handleSourceChange(source, tabSize);
    },
    [converterControlsConfig.showTabSizeControl, handleSourceChange, setTabSize, source]
  );

  const handleDownload = useCallback(async () => {
    const blob = new Blob([result], { type: configurations[1].mode });
    const url = URL.createObjectURL(blob);
    const fileName = `jsons_formatter-${new Date().toISOString().replace(/[:.]/g, "-")}.${configurations[1].mode}`;

    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = fileName;
    anchor.click();

    // Clean up the object URL
    URL.revokeObjectURL(url);
  }, [configurations, result]);

  const handleReset = useCallback(() => {
    handleSourceChange("");
  }, [handleSourceChange]);

  return (
    <ThreeColumnsLayout>
      <Editor
        id={configurations[0].id}
        isReady={isReadyToLoadEditor}
        value={source}
        theme={theme}
        readonly={configurations[0].readonly}
        mode={configurations[0].mode}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(val) => handleSourceChange((val as any).detail as string, tabSize)}
      />
      <ConvertControls
        tabSize={tabSize}
        theme={theme}
        changeTabSize={handleTabSizeChange}
        changeTheme={setTheme}
        {...converterControlsConfig}
        onUrlConversion={() => {}}
        onDownload={handleDownload}
        onReset={handleReset}
      />
      <Editor
        id={configurations[0].id}
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
