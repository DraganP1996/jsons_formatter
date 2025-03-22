import { Metadata } from "next";
import Script from "next/script";
import { TechArticle, WithContext } from "schema-dts";

import { DOC_PAGE_CONFIG } from "@/config";
import { DOC_PATHS, DocPageKeys, DocPagePaths, Framework } from "@/types";

type PageProps = {
  params: Promise<{ slug: DocPagePaths; framework: Framework }>;
};

export async function generateStaticParams() {
  const paths = Object.values(DOC_PATHS).map((path) => ({
    slug: path,
  }));

  return paths;
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { framework, slug } = await params;
  const pageKey = Object.keys(DOC_PAGE_CONFIG[framework]).find(
    (key: string) => DOC_PAGE_CONFIG[framework][key as DocPageKeys].path === slug
  );
  const configuration = DOC_PAGE_CONFIG[framework][pageKey as DocPageKeys];

  return {
    title: configuration.name,
    description: configuration.description,
    authors: [{ name: "Dragan Petrovic", url: "https://github.com/DraganP1996" }],
    creator: "Dragan Petrovic",
    publisher: "Dragan Petrovic",
    alternates: {
      canonical: `documentation/${framework}/${configuration.path}`,
    },
    keywords: configuration.keywords,
    openGraph: {
      title: configuration.name,
      description: configuration.description,
      url: `https://jsonsformatter.com/documentation/${framework}/${configuration.path}`,
      siteName: "JSONs Formatter",
      locale: "en",
      type: "article",
      authors: ["Dragan Petrovic"],
    },
    twitter: {
      card: "summary_large_image",
      title: `Webeditors ${framework} | ${configuration.name}`,
      description: configuration.description,
    },
    bookmarks: `https://jsonsformatter.com/documentation/${framework}/${configuration.path}`,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug, framework } = await params;
  const pageKey = Object.keys(DOC_PAGE_CONFIG[framework]).find(
    (key: string) => DOC_PAGE_CONFIG[framework][key as DocPageKeys].path === slug
  );
  const configuration = DOC_PAGE_CONFIG[framework][pageKey as DocPageKeys];
  const post = configuration.post;

  const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: configuration.name,
    description: configuration.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://jsonsformatter.com/documentation/${framework}/${configuration.path}`,
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
    keywords: configuration.keywords,
  };

  return (
    <>
      <Script
        id="json-formatter-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {post}
    </>
  );
}
