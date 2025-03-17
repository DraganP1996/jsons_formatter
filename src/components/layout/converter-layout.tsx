"use client";

import { PAGE_PATHS, PageConfiguration, PageKeys } from "@/app/types";
import { Converter } from "../converter";
import { PAGES_CONFIG } from "@/pages-configurations/config";

export const ConverterLayout = ({ path }: { path: string }) => {
  const pageKey = Object.keys(PAGE_PATHS).find((key) => path === PAGE_PATHS[key as PageKeys])!;
  const configuration: PageConfiguration = PAGES_CONFIG[pageKey as PageKeys];

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
