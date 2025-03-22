"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui";
import { PAGES_CONFIG } from "@/config/formatter";
import { cn } from "@/lib/utils";
import { FormatterPageKeys } from "@/types";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MobileNavigation } from "./mobile-navigation";
import { NavigationHamburger } from "../ui/navigation-hamburget";

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  return (
    <>
      <header className="flex w-full">
        <NavigationMenu className="w-full max-w-full justify-start">
          <NavigationMenuList className="flex flex-row justify-between w-full p-2">
            <div className="">
              <NavigationMenuItem
                className="text-3xl text-black"
                style={{ fontFamily: "var(--font-kumar_one_outline), sans-serif" }}
              >
                <Link href="/">JSONs Formatter</Link>
              </NavigationMenuItem>
            </div>
            <div className="flex-row gap-2 relative hidden lg:flex pr-11">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="shadow-md bg-white">Tools</NavigationMenuTrigger>
                <NavigationMenuContent className="">
                  <ul className="grid grid-cols-[1fr,1fr] p-2 gap-2 text-sm">
                    {Object.keys(PAGES_CONFIG).map((pageKey: string) => (
                      <Link
                        key={`header_nav_${PAGES_CONFIG[pageKey as FormatterPageKeys].path}`}
                        href={PAGES_CONFIG[pageKey as FormatterPageKeys].path}
                        title={PAGES_CONFIG[pageKey as FormatterPageKeys].shortName}
                        className="p-4 hover:bg-gray-100 rounded min-w-[120px]"
                      >
                        {PAGES_CONFIG[pageKey as FormatterPageKeys].shortName}
                      </Link>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/documentation" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "shadow-md bg-white")}
                  >
                    Documentation
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </div>
            <div className="flex lg:hidden">
              <NavigationHamburger onClick={() => setShowMobileMenu(true)} />
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      {showMobileMenu && (
        <MobileNavigation onCloseMenu={() => setShowMobileMenu(false)}>
          {Object.keys(PAGES_CONFIG).map((pageKey: string) => (
            <Link
              key={`header_nav_${PAGES_CONFIG[pageKey as FormatterPageKeys].path}`}
              href={PAGES_CONFIG[pageKey as FormatterPageKeys].path}
              title={PAGES_CONFIG[pageKey as FormatterPageKeys].shortName}
              className="p-4 hover:bg-gray-100 rounded min-w-[120px] font-electrolize font-semibold text-lg"
            >
              {PAGES_CONFIG[pageKey as FormatterPageKeys].shortName}
            </Link>
          ))}
          <Link
            href="/documentation"
            className="p-4 hover:bg-gray-100 rounded min-w-[120px] font-electrolize font-semibold text-lg"
          >
            Documentation
          </Link>
        </MobileNavigation>
      )}
    </>
  );
};
