import { PAGES_CONFIG } from "@/app/config";
import { ToolCard } from "./tool-card";

export const HomeLinks = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl md:text-4xl font-electrolize font-bold"> TOOLS</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {Object.values(PAGES_CONFIG).map((page) => (
            <ToolCard
              key={page.path}
              title={page.shortName}
              description={page.description}
              path={page.path}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl md:text-4xl font-electrolize font-bold">
          Webeditors Component Library
        </h3>
        <div className="grid sm:grid-cols-2 gap-2">
          <ToolCard
            title="Documentation"
            description="Explore the documentation of the webeditors components"
            path=""
          />
          <ToolCard
            title="Contribute"
            description="Feel free to contribute if you have any suggestion"
            path=""
          />
        </div>
      </div>
    </div>
  );
};
