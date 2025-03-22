import { Metadata } from "next";
import Script from "next/script";
import { WithContext, TechArticle } from "schema-dts";

import { ConverterLayout } from "@/components/layout/converter-layout";
import { PAGES_CONFIG } from "../../../config/formatter";
import {
  FORMATTER_PATHS,
  FormatterPageConfiguration,
  FormatterPageKeys,
  FormatterPagePaths,
} from "@/types";

type PageProps = {
  params: Promise<{ path: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { path } = await params;

  const pageKey = Object.keys(FORMATTER_PATHS).find(
    (key) => path === FORMATTER_PATHS[key as FormatterPageKeys]
  )!;
  const configuration: FormatterPageConfiguration = PAGES_CONFIG[pageKey as FormatterPageKeys];

  return {
    title: configuration.name,
    description: configuration.description,
    authors: [{ name: "Dragan Petrovic", url: "https://github.com/DraganP1996" }],
    creator: "Dragan Petrovic",
    publisher: "Dragan Petrovic",
    alternates: {
      canonical: `${configuration.path}`,
    },
    keywords: configuration.keywords,
    openGraph: {
      title: configuration.name,
      description: configuration.description,
      url: `https://jsonsformatter.com/${configuration.path}`,
      siteName: "JSONs Formatter",
      locale: "en",
      type: "article",
      authors: ["Dragan Petrovic"],
    },
    twitter: {
      card: "summary_large_image",
      title: `JSONs Formatter | ${configuration.name}`,
      description: configuration.description,
    },
    bookmarks: `https://jsonsformatter.com/${configuration.path}`,
  };
}

export async function generateStaticParams() {
  const paths: FormatterPagePaths[] = Object.values(FORMATTER_PATHS);

  return paths.map((path) => ({
    path,
  }));
}

export const dynamicParams = false;

export default async function Page({ params }: PageProps) {
  const { path } = await params;
  const pageKey = Object.keys(FORMATTER_PATHS).find(
    (key) => path === FORMATTER_PATHS[key as FormatterPageKeys]
  )!;
  const configuration: FormatterPageConfiguration = PAGES_CONFIG[pageKey as FormatterPageKeys];

  const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: configuration.name,
    description: configuration.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://jsonsformatter.com/${configuration.path}`,
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
    about: {
      "@type": "WebApplication",
      name: configuration.shortName,
      url: `https://jsonsformatter.com/${configuration.path}`,
      browserRequirements: "Requires modern browsers (Chrome, Firefox, Safari)",
      applicationCategory: "Utilities",
      operatingSystem: "All",
      offers: {
        "@type": "Offer",
        price: "0.00",
        priceCurrency: "EUR",
      },
    },
  };

  return (
    <>
      <Script
        id="json-formatter-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col gap-2">
        <div className="px-4">
          <h1
            className="text-2xl md:text-4xl text-center font-bold font-electrolize
      "
          >
            {configuration.name}
          </h1>
        </div>
        <ConverterLayout path={path} />
        {!!configuration?.post && configuration.post}
      </div>
    </>
  );
}
