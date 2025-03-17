"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Check, ChevronsUpDownIcon, RocketIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LIbraryInfo } from "@/types";

type HeaderNavigationProps = {
  libraries: LIbraryInfo[];
};

export const HeaderNavigation = ({ libraries }: HeaderNavigationProps) => {
  const pathname = usePathname();
  const activeLib = libraries.find((lib) => pathname.includes(lib.path));

  return (
    <div className="p-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex flex-row w-full px-1 py-2 items-center text-sm bg-stone-200 hover:bg-stone-300 rounded shadow gap-2">
          <RocketIcon className="text-orange-400" />
          <div className="flex flex-col justify-start flex-1">
            {activeLib ? (
              <>
                <span className="text-left font-bold"> {activeLib.name} </span>
                <span className="text-left text-xs"> {activeLib.version} </span>
              </>
            ) : (
              <span className=""> Select library </span>
            )}
          </div>
          <ChevronsUpDownIcon width="16px" height="16px" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-[250px]">
          {libraries.map((lib) => (
            <DropdownMenuItem key={lib.name}>
              <Link
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/documentation/${lib.path}`}
                className="flex flex-row items-center justify-between w-full"
              >
                <div className="flex flex-col">
                  <div> {lib.name} </div>
                  <div className="text-xs text-gray-500"> {lib.version}</div>
                </div>
                <div className="">
                  {activeLib?.path === lib.path && <Check className="text-orange-500" />}
                </div>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
