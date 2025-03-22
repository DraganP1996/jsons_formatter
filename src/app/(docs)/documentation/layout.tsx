import { DocHorizontalNav } from "@/components/documentation/doc-horizontal-nav";
import { DocNavigation } from "@/components/documentation/doc-navigation";
import { Footer } from "@/components/layout/footer";
import { Framework } from "@/types";
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
      framework: "vanilla" as Framework,
    },
    {
      name: "webeditors-react",
      version: reactVersion,
      path: `/react`,
      framework: "react" as Framework,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row min-h-[100vh] flex-1">
        <div className="hidden lg:flex flex-shrink-0 w-[250px]">
          <DocNavigation libraries={libraries} />
        </div>
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex flex-col flex-1 py-4 px-4 md:px-14 gap-2 overflow-auto">
            <DocHorizontalNav />
            <div className="flex flex-col flex-1"> {children}</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
