"use client";

import { Converter } from "../converter";
import { PAGES_CONFIG } from "@/config/formatter";
import { FORMATTER_PATHS, FormatterPageConfiguration, FormatterPageKeys } from "@/types";

export const ConverterLayout = ({ path }: { path: string }) => {
  const pageKey = Object.keys(FORMATTER_PATHS).find(
    (key) => path === FORMATTER_PATHS[key as FormatterPageKeys]
  )!;
  const configuration: FormatterPageConfiguration = PAGES_CONFIG[pageKey as FormatterPageKeys];

  return (
    <div className="flex flex-col">
      <Converter
        configurations={configuration.converterConfig}
        sourceChangeFn={configuration.sourceChangeFn}
        initialTabSize={2}
        converterControlsConfig={configuration.controlsConfig}
      />
    </div>
  );
};
