import { Metadata } from "next";
import { TechArticle, WithContext } from "schema-dts";
import Script from "next/script";

import { HomeEditor, HomeHeading, HomeLinks } from "@/components/home";

export const metadata: Metadata = {
  title: "JSONs Formatter - Beautify, Minify, and Convert JSON Online",
  description:
    "Discover the premier online JSON formatter, featuring a cutting-edge editor design and extensive customization options. This tool allows you to effortlessly beautify, minify, and convert your JSON into XML, YAML, and string formats.",
  metadataBase: new URL("https://jsonsformatter.com"),
  keywords: [
    "son formatter",
    "json formatter online",
    "best json formatter",
    "json data formatter",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: `JSONs Formatter`,
    description: "",
  },
  bookmarks: `https://jsonsformatter.com`,
  category: "Technology",
};

const jsonLd: WithContext<TechArticle> = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline:
    "Discover the premier online JSON formatter, featuring a cutting-edge editor design and extensive customization options. This tool allows you to effortlessly beautify, minify, and convert your JSON into XML, YAML, and string formats.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://jsonsformatter.com`,
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
    "son formatter",
    "json formatter online",
    "best json formatter",
    "json data formatter",
  ],
  about: {
    "@type": "WebApplication",
    name: "JSON Formatter",
    url: `https://jsonsformatter.com`,
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

export default function Home() {
  return (
    <>
      <Script
        id="json-formatter-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col flex-1 mb-24 gap-8 mt-6">
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-4 max-w-[900px]">
            <HomeHeading />
            <HomeLinks />
          </div>
        </div>
        <HomeEditor />
      </div>
    </>
  );
}
