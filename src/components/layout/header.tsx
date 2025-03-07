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

export const Header = () => {
  return (
    <header className="bg-white">
      <NavigationMenu className="w-full p-2 border-b max-w-full justify-start">
        <NavigationMenuList>
          <NavigationMenuItem className="font-bold">JSON FORMATTER </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger> Tools </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-2 gap-4 p-2 md:w-[200px] lg:w-[270px] lg:grid-cols-[.75fr_1fr] text-sm">
                {Object.keys(PAGES_CONFIG).map((pageKey: string) => (
                  <Link
                    key={`header_nav_${PAGES_CONFIG[pageKey as PageKeys].path}`}
                    href={PAGES_CONFIG[pageKey as PageKeys].path}
                    title={PAGES_CONFIG[pageKey as PageKeys].name}
                  >
                    {PAGES_CONFIG[pageKey as PageKeys].name}
                  </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Learn
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>FAQ</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
