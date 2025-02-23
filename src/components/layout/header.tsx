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
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      {/* <Icons.logo className="h-6 w-6" /> */}
                      <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components that you can copy and paste into your apps.
                        Accessible. Customizable. Open Source.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <Link href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </Link>
                <Link href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </Link>
                <Link href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </Link>
              </ul>
              <NavigationMenuLink> Link </NavigationMenuLink>
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
