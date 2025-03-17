import { DOC_PAGE_CONFIG } from "@/pages-configurations";
import { HeaderComponents } from "../../mdx-config";
import { Framework } from "@/types";
import { CodeSample } from "./code-sample";

type PageProps = {
  params: Promise<{ slug: string; framework: Framework }>;
};

export async function generateStaticParams() {
  const paths = DOC_PAGE_CONFIG.map((config) => ({
    slug: config.path,
  }));

  return paths;
}

export const dynamicParams = false;

export default async function Page({ params }: PageProps) {
  const { slug, framework } = await params;
  const { default: Post } = await import(`@/posts/documentation/${framework}/${slug}.mdx`);

  return (
    <>
      <Post
        components={{
          ...HeaderComponents,
          code: CodeSample,
        }}
      />
    </>
  );
}
