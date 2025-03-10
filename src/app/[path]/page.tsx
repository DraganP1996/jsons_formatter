import { Metadata } from "next";
import { PAGE_PATHS, PageConfiguration, PageKeys, PagePaths } from "../types";
import { ConverterLayout } from "@/components/layout/converter-layout";
import { PAGES_CONFIG } from "../config";

type PageProps = {
  params: Promise<{ path: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { path } = await params;

  const pageKey = Object.keys(PAGE_PATHS).find((key) => path === PAGE_PATHS[key as PageKeys])!;
  const configuration: PageConfiguration = PAGES_CONFIG[pageKey as PageKeys];

  return {
    title: configuration.name,
    description: configuration.description,
    authors: [{ name: "Dragan Petrovic", url: "https://github.com/DraganP1996" }],
    creator: "Dragan Petrovic",
    publisher: "Dragan Petrovic",
    alternates: {
      canonical: `${configuration.path}`,
    },
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
      // siteId: "1467726470533754880",
      // creator: "@nextjs",
      // creatorId: "1467726470533754880",
      // images: ["https://nextjs.org/og.png"], // Must be an absolute URL
    },
    bookmarks: `https://jsonsformatter.com/${configuration.path}`,
  };
}

export async function generateStaticParams() {
  const paths: PagePaths[] = Object.values(PAGE_PATHS);

  return paths.map((path) => ({
    path,
  }));
}

export default async function Page({ params }: PageProps) {
  const { path } = await params;
  const pageKey = Object.keys(PAGE_PATHS).find((key) => path === PAGE_PATHS[key as PageKeys])!;
  const configuration: PageConfiguration = PAGES_CONFIG[pageKey as PageKeys];

  return (
    <div className="flex flex-col gap-2">
      <div className="px-4 pt-2">
        <h1
          className=" text-4xl text-center font-bold font-electrolize
        "
        >
          {configuration.name}
        </h1>
      </div>
      <ConverterLayout path={path} />
      {!!configuration?.additionalContent && configuration.additionalContent}
    </div>
  );
}
