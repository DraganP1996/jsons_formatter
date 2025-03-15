import { DocNavigation } from "@/components/documentation/doc-navigation";

export default function DocumentationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row min-h-[100vh]">
      <DocNavigation />
      <div className="flex flex-col flex-1 p-2">{children} </div>
    </div>
  );
}
