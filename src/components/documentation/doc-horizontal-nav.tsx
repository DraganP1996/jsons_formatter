"use client";

import { useEffect, useMemo, useState } from "react";
import { NavigationHamburger } from "../ui/navigation-hamburget";
import { DocBreadcumb } from "./doc-breadcumb";
import { MobileNavigation } from "../layout/mobile-navigation";
import { DOC_PATHS, DocPageKeys, DocPagePaths, Framework } from "@/types";
import { DOC_PAGE_CONFIG } from "@/config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const DocHorizontalNav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const pathname = usePathname();

  const getPageName = useMemo(
    () => (path: DocPagePaths, framework: Framework) => {
      const frameworkConfig = DOC_PAGE_CONFIG[framework];

      const pageKey = Object.keys(frameworkConfig).find(
        (key) => frameworkConfig[key as DocPageKeys].path === path
      );

      if (!pageKey) return;

      const name = frameworkConfig[pageKey as DocPageKeys].name;

      return name;
    },
    []
  );

  const vanillaLinks = Object.values(DOC_PATHS).map((path) => (
    <Link
      href={`${process.env.NEXT_PUBLIC_BASE_URL}/documentation/vanilla/${path}`}
      key={path}
      className="w-full pl-4 py-3 hover:bg-stone-200 cursor-pointer text-lg font-electrolize font-bold"
    >
      {getPageName(path, "vanilla")}
    </Link>
  ));

  useEffect(() => {
    setShowMobileNav(false);
  }, [pathname]);

  const reactLinks = Object.values(DOC_PATHS).map((path) => (
    <Link
      href={`${process.env.NEXT_PUBLIC_BASE_URL}/documentation/react/${path}`}
      key={path}
      className="w-full pl-4 py-3 hover:bg-stone-200 cursor-pointer text-lg font-electrolize font-bold"
    >
      {getPageName(path, "react")}
    </Link>
  ));

  return (
    <div className="flex flex-row justify-between items-center">
      <DocBreadcumb />
      <div className="flex items-center lg:hidden">
        <NavigationHamburger onClick={() => setShowMobileNav(true)} />
      </div>{" "}
      {showMobileNav && (
        <MobileNavigation onCloseMenu={() => setShowMobileNav(false)}>
          <div className="flex flex-col">
            <Link
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/documentation/vanilla`}
              className="w-full pl-4 py-3 hover:bg-stone-200 cursor-pointer text-lg font-electrolize font-bold"
            >
              Vanilla
            </Link>
            <div className="flex flex-col">{vanillaLinks}</div>
            <Link
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/documentation/react`}
              className="w-full pl-4 py-3 hover:bg-stone-200 cursor-pointer text-lg font-electrolize font-bold"
            >
              React
            </Link>
            <div className="flex flex-col">{reactLinks}</div>
          </div>
        </MobileNavigation>
      )}
    </div>
  );
};
