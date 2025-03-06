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
    <header className="bg-white">
      <NavigationMenu className="w-full p-2 border-b max-w-full justify-start">
        <NavigationMenuList>
          <NavigationMenuItem className="font-bold">JSON FORMATTER </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger> Tools </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid grid-cols-2 gap-4 p-2 md:w-[200px] lg:w-[270px] lg:grid-cols-[.75fr_1fr] text-sm">
                <Link href="/string-to-json" title="Introduction" className="leading-4">
                  String to JSON
                </Link>
                <Link href="/json-to-string" title="Installation" className="leading-4">
                  JSON to string
                </Link>
                <Link href="/json-beautify" title="Typography" className="leading-4">
                  JSON Beautify
                </Link>
                <Link href="/json-minify" title="Typography" className="leading-4">
                  JSON Minify
                </Link>
                <Link href="/csv-to-json" className="leading-4">
                  JSON to CSV conversion
                </Link>
                <Link href="/json-to-csv" className="leading-4">
                  CSV to JSON conversion
                </Link>
                <Link href="/json-to-yaml" className="leading-4">
                  JSON to YAML conversion
                </Link>
                <Link href="/yaml-to-json" className="leading-4">
                  YAML to JSON conversion
                </Link>
                <Link href="/json-to-xml" className="leading-4">
                  JSON to XML conversion
                </Link>
                <Link href="/xml-to-json" className="leading-4">
                  XML to JSON conversion
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
