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
import { PAGES_CONFIG } from "@/app/config";
import { PageKeys } from "@/app/types";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header className="flex w-full">
      <NavigationMenu className="w-full max-w-full justify-start">
        <NavigationMenuList className="flex flex-row justify-between w-full p-2">
          <div className="">
            <NavigationMenuItem
              className="text-3xl text-black"
              style={{ fontFamily: "var(--font-bungee_shade), sans-serif" }}
            >
              <Link href="/">JSONs Formatter</Link>
            </NavigationMenuItem>
          </div>
          <div className="flex flex-row gap-2 relative">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="shadow-md bg-white"> Tools </NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <ul className="grid grid-cols-[1fr,1fr] p-2 gap-2 text-sm">
                  {Object.keys(PAGES_CONFIG).map((pageKey: string) => (
                    <Link
                      key={`header_nav_${PAGES_CONFIG[pageKey as PageKeys].path}`}
                      href={PAGES_CONFIG[pageKey as PageKeys].path}
                      title={PAGES_CONFIG[pageKey as PageKeys].shortName}
                      className="p-4 hover:bg-gray-100 rounded min-w-[120px]"
                    >
                      {PAGES_CONFIG[pageKey as PageKeys].shortName}
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "shadow-md bg-white")}
                >
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "shadow-md bg-white")}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "shadow-md bg-white")}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
