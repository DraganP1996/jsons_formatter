"use client";

import { useEffect, useState } from "react";
import { Editor } from "./editor";

type JSONBeautifierProps = {
  initialValue: string;
};

export const JSONBeautifier = ({ initialValue }: JSONBeautifierProps) => {
  const [isClient, setIsClient] = useState(false);
  const [source, setSource] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setSource(initialValue);
  }, [initialValue]);

  const handleSourceChange = (value: string) => {
    try {
      console.log("Value", value);

      setSource(value);

      const formatted = JSON.stringify(JSON.parse(value), null, 2);

      setResult(formatted);
    } catch (err) {
      console.log(err);
      setResult("");
    }
  };

  return (
    <div className="grid grid-cols-[2fr,1fr,2fr] h-[calc(100vh-99px)] overflow-hidden">
      {isClient && (
        <>
          <Editor isReady={isClient} value={source} onChange={handleSourceChange} />
          <div className="bg-slate-600"></div>
          <Editor isReady={isClient} value={result} onChange={() => {}} />
        </>
      )}
    </div>
  );
};
