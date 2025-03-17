import { DocBreadcumb } from "@/components/documentation";
import { DocNavigation } from "@/components/documentation/doc-navigation";
import { getPackageLastVersion } from "@/utils/getPackageLastVersion";

export default async function DocumentationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const vanillaVersion = await getPackageLastVersion("webeditors-vanilla");
  const reactVersion = await getPackageLastVersion("webeditors-react");
  const libraries = [
    {
      name: "webeditors-vanilla",
      version: vanillaVersion,
      path: `/vanilla`,
    },
    {
      name: "webeditors-react",
      version: reactVersion,
      path: `/react`,
    },
  ];

  return (
    <div className="flex flex-row min-h-[100vh]">
      <DocNavigation libraries={libraries} />
      <div className="flex flex-col flex-1 py-4 px-14 gap-2">
        <DocBreadcumb />
        <div className="flex flex-col flex-1"> {children}</div>
      </div>
    </div>
  );
}
