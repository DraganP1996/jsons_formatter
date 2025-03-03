"use client";

import { useCallback, useEffect } from "react";
import { Editor } from "../editor";
import { BeautifierControls } from "../controls";
import { useClientSideChecker, useSourceResultEditors } from "@/hook";

type JSONMinifyProps = {
  initialValue: string;
};

export const JSONMinify = ({ initialValue }: JSONMinifyProps) => {
  const isReadyToLoadEditor = useClientSideChecker();
  const { source, result, setSource, setResult } = useSourceResultEditors();

  const handleSourceChange = useCallback(
    (value: string) => {
      try {
        setSource(value);

        const formatted = JSON.stringify(JSON.parse(value), null, 0);

        setResult(formatted);
      } catch (err) {
        console.log(err);
        setResult("");
      }
    },
    [setResult, setSource]
  );

  useEffect(() => {
    setSource(initialValue);
    setResult(JSON.stringify(JSON.parse(initialValue), null, 0));
  }, [initialValue, setResult, setSource]);

  return (
    <div className="grid grid-cols-[2fr,1fr,2fr] h-[calc(100vh-99px)] overflow-hidden">
      <Editor isReady={isReadyToLoadEditor} value={source} onThemeChange={handleSourceChange} />
      <BeautifierControls />
      <Editor isReady={isReadyToLoadEditor} value={result} onThemeChange={() => {}} />
    </div>
  );
};
