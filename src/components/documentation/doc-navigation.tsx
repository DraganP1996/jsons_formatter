import { LIbraryInfo } from "@/types";
import { HeaderNavigation } from "./navigation-header";
import { NavigationList } from "./navigation-list";

export type DocNavigationProps = {
  libraries: LIbraryInfo[];
};

export const DocNavigation = ({ libraries }: DocNavigationProps) => {
  return (
    <aside className="flex flex-col bg-stone-100 w-[250px] shadow gap-2">
      <div className="flex flex-col p-4">
        <h1 className="font-electrolize text-4xl font-bold mb-0"> Webeditors </h1>
        <p className="text-xs pt-0 italic text-stone-600">
          Webeditor components for all the frameworks
        </p>
      </div>
      <HeaderNavigation libraries={libraries} />
      <NavigationList libraries={libraries} />
    </aside>
  );
};
