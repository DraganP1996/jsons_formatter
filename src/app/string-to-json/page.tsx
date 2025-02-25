/* eslint-disable @typescript-eslint/no-require-imports */
"use client";

import { Controlled } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/ayu-dark.css";
import { useEffect, useState } from "react";
import { jsonLanguage } from "@codemirror/lang-json";

if (typeof navigator !== "undefined") {
  require("codemirror/mode/xml/xml");
  require("codemirror/mode/css/css");
  require("codemirror/mode/javascript/javascript");
}

export default function Home() {
  const testObj = {
    name: "Dragan",
    surname: "Petrovic",
  };

  const [original, setOriginal] = useState('\'{"name":"Dragan","age":28}\'');
  const [result, setResult] = useState("");
  const [isClient, setIsClient] = useState(false);

  const handleChange = (editor: unknown, data: unknown, value: string) => {
    console.log("Value", { editor, data, value });

    setOriginal(value);

    // const formatted = value.;

    // console.log("Formattd", formatted);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="">
      <main className="grid grid-cols-2 min-h-full">
        {isClient && (
          <>
            <Controlled
              onBeforeChange={handleChange}
              value={original}
              options={{
                lineWrapping: true,
                lint: true,
                // mode: "text",
                // json: true,
                // languages: [jsonLanguage],
                lineNumbers: true,
                theme: "ayu-dark",
              }}
            />
            <Controlled
              onBeforeChange={handleChange}
              value={result}
              options={{
                lineWrapping: true,
                lint: true,
                mode: "javascript",
                json: true,
                languages: [jsonLanguage],
                lineNumbers: true,
              }}
            />
          </>
        )}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
