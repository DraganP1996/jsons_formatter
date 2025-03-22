"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { DOC_PATHS, DocPageKeys, DocPagePaths, LIbraryInfo } from "@/types";
import { DOC_PAGE_CONFIG } from "@/config";
import { useMemo } from "react";

export type DocNavigationListProps = {
  libraries: LIbraryInfo[];
};

export const NavigationList = ({ libraries }: DocNavigationListProps) => {
  const pathname = usePathname();
  const activeLib = useMemo(
    () => libraries.find((lib) => pathname.includes(lib.path)),
    [libraries, pathname]
  );

  const getPageName = useMemo(
    () => (path: DocPagePaths) => {
      if (!activeLib) return;

      const frameworkConfig = DOC_PAGE_CONFIG[activeLib.framework];
      const pageKey = Object.keys(frameworkConfig).find(
        (key) => frameworkConfig[key as DocPageKeys].path === path
      );

      if (!pageKey) return;

      const name = frameworkConfig[pageKey as DocPageKeys].name;

      return name;
    },
    [activeLib]
  );

  return (
    <div className="flex flex-col">
      {activeLib &&
        Object.values(DOC_PATHS).map((path) => (
          <Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/documentation/${activeLib.path}/${path}`}
            key={path}
            className="w-full p-2 py-3 hover:bg-stone-200 cursor-pointer text-sm"
          >
            {getPageName(path)}
          </Link>
        ))}
    </div>
  );
};
