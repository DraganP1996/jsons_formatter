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

export const Header = () => {
  return (
    <header>
      <NavigationMenu className="w-full p-2 border-b max-w-full justify-start">
        <NavigationMenuList>
          <NavigationMenuItem className="font-bold">JSON FORMATTER </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger> Tools </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-2 gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {/* <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components that you can copy and paste into your apps.
                        Accessible. Customizable. Open Source.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li> */}
                <Link href="/string-to-json" title="Introduction">
                  String to JSON
                </Link>
                <Link href="/json-to-string" title="Installation">
                  JSON to string
                </Link>
                <Link href="/json-beautify" title="Typography">
                  JSON Beautify
                </Link>
                <Link href="/json-minify" title="Typography">
                  JSON Minify
                </Link>
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
