import { DocNavigation } from "@/components/documentation/doc-navigation";

export default function DocumentationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row min-h-[90vh] p-2">
      <DocNavigation />
      <div className="flec flex-col flex-1 p-2">{children} </div>
    </div>
  );
}
