"use client";

import { Converter } from "../converter";
import { PAGES_CONFIG } from "@/app/config";

export const HomeEditor = () => {
  const configuration = PAGES_CONFIG.jsonBeautify;

  return (
    <div className="flex flex-col">
      <h2 className="text-4xl font-electrolize font-bold text-center p-4">
        Try our JSON Formatter
      </h2>
      <Converter
        configurations={configuration.converterConfig}
        sourceChangeFn={configuration.sourceChangeFn}
        initialTabSize={2}
        converterControlsConfig={{ ...configuration.controlsConfig, revertPath: undefined }}
      />
    </div>
  );
};
