import Link from "next/link";

import { PAGES_CONFIG } from "@/config/formatter";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 flex-wrap bg-orange-100 w-full border-t-4 border-orange-400 items-center">
      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-4 xl:grid-cols-5 gap-4 w-full lg:max-w-[800px] lg:justify-center p-4 ">
        <div className="flex flex-col gap-2">
          <h6 className="font-bold text-lg"> JSON </h6>
          <Link href={PAGES_CONFIG.jsonBeautify.path} className="text-sm text-stone-700">
            JSON Beautify
          </Link>
          <Link href={PAGES_CONFIG.jsonMinify.path} className="text-sm text-stone-700">
            JSON Minify
          </Link>
          <Link href={PAGES_CONFIG.jsonToString.path} className="text-sm text-stone-700">
            JSON to String
          </Link>
          <Link href={PAGES_CONFIG.jsonToXml.path} className="text-sm text-stone-700">
            JSON to XML
          </Link>
          <Link href={PAGES_CONFIG.jsonToYaml.path} className="text-sm text-stone-700">
            JSON to YAML
          </Link>
          {/* <Link href={PAGES_CONFIG..path} className="text-sm text-stone-700">
              JSON to CSV
            </Link> */}
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="font-bold text-lg"> XML </h6>
          <Link href={PAGES_CONFIG.xmlToJson.path} className="text-sm text-stone-700">
            XML to JSON
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="font-bold text-lg"> YAML </h6>
          <Link href={PAGES_CONFIG.yamlToJson.path} className="text-sm text-stone-700">
            YAML to JSON
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className="font-bold text-lg"> Other </h6>
          <Link href={PAGES_CONFIG.stringToJson.path} className="text-sm text-stone-700">
            String to JSON
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/documentation" className="text-sm text-stone-700">
            Webeditors Documentation
          </Link>
        </div>
      </div>
      <div className="bg-stone-800 px-4 py-1 text-xs text-white w-full">JsonsFormatter 2025</div>
    </footer>
  );
};
