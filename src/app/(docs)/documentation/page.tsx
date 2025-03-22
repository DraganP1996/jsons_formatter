import { ReactNode } from "react";
import Link from "next/link";
import { Metadata } from "next";
import { TechArticle, WithContext } from "schema-dts";
import Script from "next/script";

import DocumentationHome from "../../../posts/documentation/home.mdx";
import { GeneralComponents, HeaderComponents } from "./mdx-config";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Webeditors Documentation",
    description:
      "Discover the documentation of the best framework agnostic components library for web editors components",
    authors: [{ name: "Dragan Petrovic", url: "https://github.com/DraganP1996" }],
    creator: "Dragan Petrovic",
    publisher: "Dragan Petrovic",
    alternates: {
      canonical: `documentation`,
    },
    keywords: [
      "web editors",
      "web editors component library",
      "web editors vanilla",
      "web editors react",
    ],
    openGraph: {
      title: "Webeditors Documentation",
      description:
        "Discover the documentation of the best framework agnostic components library for web editors components",
      url: `https://jsonsformatter.com/documentation`,
      siteName: "JSONs Formatter",
      locale: "en",
      type: "article",
      authors: ["Dragan Petrovic"],
    },
    twitter: {
      card: "summary_large_image",
      title: `Webeditors Documentation`,
      description:
        "Discover the documentation of the best framework agnostic components library for web editors components",
    },
    bookmarks: `https://jsonsformatter.com/documentation`,
  };
}

export default async function Page() {
  const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Webeditors Documentation",
    description:
      "Discover the documentation of the best framework agnostic components library for web editors components",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://jsonsformatter.com/documentation`,
    },
    author: {
      "@type": "Person",
      name: "Dragan Petrovic",
      url: "https://github.com/DraganP1996",
    },
    publisher: {
      "@type": "Person",
      name: "Dragan Petrovic",
      url: "https://github.com/DraganP1996",
    },
    keywords: [
      "web editors",
      "web editors component library",
      "web editors vanilla",
      "web editors react",
    ],
  };
  return (
    <>
      <Script
        id="json-formatter-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  );
}
