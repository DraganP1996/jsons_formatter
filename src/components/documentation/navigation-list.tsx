"use client";

import { DOC_PAGE_CONFIG } from "@/pages-configurations";
import { LIbraryInfo } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type DocNavigationProps = {
  libraries: LIbraryInfo[];
};

export const NavigationList = ({ libraries }: DocNavigationProps) => {
  const pathname = usePathname();
  const activeLib = libraries.find((lib) => pathname.includes(lib.path));

  return (
    <div className="flex flex-col">
      {activeLib &&
        DOC_PAGE_CONFIG.map((page) => (
          <Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/documentation/${activeLib.path}/${page.path}`}
            key={page.path}
            className="w-full p-2 py-3 hover:bg-stone-200 cursor-pointer text-sm"
          >
            {page.name}
          </Link>
        ))}
    </div>
  );
};
