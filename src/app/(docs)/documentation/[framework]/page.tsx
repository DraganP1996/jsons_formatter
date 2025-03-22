import { Metadata } from "next";
import { TechArticle, WithContext } from "schema-dts";
import Script from "next/script";

import { Framework } from "@/types";
import { FRAMEWORK_HOME_CONFIGS } from "@/config";

type PageProps = {
  params: Promise<{ framework: Framework }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { framework } = await params;
  const configuration = FRAMEWORK_HOME_CONFIGS[framework];

  return {
    title: configuration.name,
    description: configuration.description,
    authors: [{ name: "Dragan Petrovic", url: "https://github.com/DraganP1996" }],
    creator: "Dragan Petrovic",
    publisher: "Dragan Petrovic",
    alternates: {
      canonical: `documentation/${configuration.path}`,
    },
    keywords: configuration.keywords,
    openGraph: {
      title: configuration.name,
      description: configuration.description,
      url: `https://jsonsformatter.com/documentation/${configuration.path}`,
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
    bookmarks: `https://jsonsformatter.com/documentation/${configuration.path}`,
  };
}

export default async function Page({ params }: PageProps) {
  const { framework } = await params;
  const configuration = FRAMEWORK_HOME_CONFIGS[framework];
  const Post = configuration.post;

  const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: configuration.name,
    description: configuration.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://jsonsformatter.com/documentation/${configuration.path}`,
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
      {Post}
    </>
  );
}
