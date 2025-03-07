import { PAGE_PATHS, PagePaths } from "../types";
import { ConverterLayout } from "@/components/layout/converter-layout";

export async function generateStaticParams() {
  const paths: PagePaths[] = Object.values(PAGE_PATHS);

  return paths.map((path) => ({
    path,
  }));
}

export default async function Page({ params }: { params: Promise<{ path: string }> }) {
  const { path } = await params;

  return <ConverterLayout path={path} />;
}
