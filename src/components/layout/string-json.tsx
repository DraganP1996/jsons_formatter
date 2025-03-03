"use client";

import { useCallback, useEffect } from "react";
import { Editor } from "../editor";
import { BeautifierControls } from "../controls";
import { TabSizes } from "@/types";
import { useClientSideChecker, useSourceResultEditors } from "@/hook";
import { useTabSize } from "@/hook/useTabSize";

type JSONStringProps = {
  initialValue: string;
};

export const StringJSON = ({ initialValue }: JSONStringProps) => {
  const isReadyToLoadEditor = useClientSideChecker();
  const { source, result, setSource, setResult } = useSourceResultEditors();

  const handleSourceChange = useCallback(
    (value: string, tabSize: number) => {
      try {
        setSource(value);

        const formatted = JSON.stringify(JSON.parse(value), null, tabSize);

        setResult(formatted);
      } catch (err) {
        console.log(err);
        setResult("");
      }
    },
    [setResult, setSource]
  );

  const handleTabSizeChange = useCallback(
    (tabSize: TabSizes) => {
      handleSourceChange(source, tabSize);
    },
    [handleSourceChange, source]
  );

  const { tabSize, setTabSize } = useTabSize(2, handleTabSizeChange);

  useEffect(() => {
    setSource(initialValue);
    setResult(JSON.stringify(JSON.parse(initialValue), null, tabSize));
  }, [initialValue, setResult, setSource, tabSize]);

  return (
    <div className="grid grid-cols-[2fr,1fr,2fr] h-[calc(100vh-99px)] overflow-hidden">
      <Editor isReady={isReadyToLoadEditor} value={source} theme="" mode="text/plain" />
      <BeautifierControls tabSize={tabSize} changeTabSize={setTabSize} changeTheme={() => {}} />
      <Editor isReady={isReadyToLoadEditor} value={result} theme="" />
    </div>
  );
};
