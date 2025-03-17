import { ReactNode } from "react";
import Link from "next/link";

import DocumentationHome from "../../../posts/documentation/home.mdx";
import { GeneralComponents, HeaderComponents } from "./mdx-config";

export default async function Page() {
  return (
    <DocumentationHome
      components={{
        ...HeaderComponents,
        ...GeneralComponents,
        a: ({ href, children }: { children: ReactNode; href: string }) => (
          <Link
            href={href}
            className="p-4 no-underline bg-gray-100 hover:bg-gray-200 rounded shadow my-3 block-inline float-left mr-4"
          >
            {children}{" "}
          </Link>
        ),
      }}
    />
  );
}
