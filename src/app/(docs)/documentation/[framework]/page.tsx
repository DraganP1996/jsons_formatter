import { Framework, SUPPORTED_FRAMEWORDS } from "@/types";
import { HeaderComponents } from "../mdx-config";

type PageProps = {
  params: Promise<{ framework: Framework }>;
};

export async function generateStaticParams() {
  return SUPPORTED_FRAMEWORDS.map((path) => ({
    framework: path,
  }));
}

export const dynamicParams = false;

export default async function Page({ params }: PageProps) {
  const { framework } = await params;
  const { default: Post } = await import(`@/posts/documentation/${framework}/home.mdx`);

  return <Post components={HeaderComponents} />;
}
