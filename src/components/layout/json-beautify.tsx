"use client";

import { useCallback, useEffect, useState } from "react";
import { Editor } from "../editor";
import { BeautifierControls } from "../controls";
import { TabSizes } from "@/types";
import { useClientSideChecker, useSourceResultEditors } from "@/hook";
import { useTabSize } from "@/hook/useTabSize";
import { jsonToUrlConversion } from "@/lib/json-to-url";

type JSONBeautifierProps = {
  initialValue: string;
};

const INITIAL_TAB_SIZE = 2;

export const JSONBeautifier = ({ initialValue }: JSONBeautifierProps) => {
  const isReadyToLoadEditor = useClientSideChecker();
  const { source, result, setSource, setResult } = useSourceResultEditors();
  const [theme, setTheme] = useState("espresso");

  const handleSourceChange = useCallback(
    (value: string, tabSize: number) => {
      try {
        setSource(value);

        const formatted =
          tabSize === 0
            ? JSON.stringify(JSON.parse(value))
            : JSON.stringify(JSON.parse(value), null, tabSize);

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

  const handleThemeChange = useCallback((theme: string) => {
    setTheme(theme);
  }, []);

  const handleUrlConversion = () => {
    const params = jsonToUrlConversion(source);
    const jsParams = Object.fromEntries(params.entries());

    console.log(JSON.parse(JSON.stringify(jsParams)));
  };

  const { tabSize, setTabSize } = useTabSize(2, handleTabSizeChange);

  useEffect(() => {
    setSource(initialValue);
    setResult(JSON.stringify(JSON.parse(initialValue), null, INITIAL_TAB_SIZE));
  }, [initialValue, setResult, setSource]);

  return (
    <div className="grid grid-cols-[2fr,auto,2fr] h-[calc(100vh-99px)] overflow-hidden">
      <Editor isReady={isReadyToLoadEditor} value={source} theme={theme} />
      <BeautifierControls
        tabSize={tabSize}
        theme={theme}
        changeTabSize={setTabSize}
        changeTheme={handleThemeChange}
        onUrlConversion={handleUrlConversion}
      />
      <Editor isReady={isReadyToLoadEditor} value={result} theme={theme} readonly={true} />
    </div>
  );
};
