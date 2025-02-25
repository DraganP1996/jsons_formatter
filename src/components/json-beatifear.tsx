"use client";

import { useCallback, useEffect, useState } from "react";
import { Editor } from "./editor";
import { BeautifierControls } from "./controls";
import { TabSizes } from "@/types";

type JSONBeautifierProps = {
  initialValue: string;
};

export const JSONBeautifier = ({ initialValue }: JSONBeautifierProps) => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const [source, setSource] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [tabSize, setTabSize] = useState<TabSizes>(2);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setSource(initialValue);
  }, [initialValue]);

  const handleSourceChange = useCallback((value: string, tabSize: number) => {
    try {
      setSource(value);

      const formatted = JSON.stringify(JSON.parse(value), null, tabSize);

      setResult(formatted);
    } catch (err) {
      console.log(err);
      setResult("");
    }
  }, []);

  const handleTabSizeChange = useCallback(
    (tabSize: TabSizes) => {
      setTabSize(() => {
        handleSourceChange(source, tabSize);
        return tabSize;
      });
    },
    [source, handleSourceChange]
  );

  return (
    <div className="grid grid-cols-[2fr,1fr,2fr] h-[calc(100vh-99px)] overflow-hidden">
      {isClient && (
        <>
          <Editor
            isReady={isClient}
            value={source}
            onChange={(value) => handleSourceChange(value, tabSize)}
          />
          <BeautifierControls tabSize={tabSize} changeTabSize={handleTabSizeChange} />
          <Editor isReady={isClient} value={result} onChange={() => {}} />
        </>
      )}
    </div>
  );
};
