// app/sitemap.ts
import { DOC_PAGE_CONFIG, FRAMEWORK_HOME_CONFIGS, PAGES_CONFIG } from "@/config";
import { DocPageKeys, FormatterPageKeys, Framework } from "@/types";
import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const homePath = {
    url: `${BASE_URL}`,
    lastModified: new Date(),
  };

  const formatterConfigKeys = Object.keys(PAGES_CONFIG);
  const formatterUrls = formatterConfigKeys.map((key: string) => ({
    url: `${BASE_URL}/${PAGES_CONFIG[key as FormatterPageKeys].path}`,
    lastModified: new Date(),
  }));

  const docPath = {
    url: `${BASE_URL}/documentation`,
    lastModified: new Date(),
  };

  const frameworkKeys = Object.keys(FRAMEWORK_HOME_CONFIGS);
  const docUrls = frameworkKeys.flatMap((frameworkKey: string) => {
    const mainPath = {
      url: `${BASE_URL}/documentation/${FRAMEWORK_HOME_CONFIGS[frameworkKey as string].path}`,
      lastModified: new Date(),
    };

    const frameworkPageKeys = Object.keys(DOC_PAGE_CONFIG[frameworkKey as Framework]);
    const frameworkPaths = frameworkPageKeys.map((pageKey: string) => ({
      url: `${BASE_URL}/documentation/${frameworkKey}/${DOC_PAGE_CONFIG[frameworkKey as Framework][pageKey as DocPageKeys].path}`,
      lastModified: new Date(),
    }));
    return [mainPath, ...frameworkPaths];
  });

  return [homePath, ...formatterUrls, docPath, ...docUrls];
}
