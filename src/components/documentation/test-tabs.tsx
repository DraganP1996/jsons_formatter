import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

type Tab = {
  value: string;
  name: string;
  content: ReactNode;
};

type TestTabsProps = {
  tabs: Tab[];
};

export const TestTabs = ({ tabs }: TestTabsProps) => {
  return (
    <Tabs defaultValue={tabs[0].value} className="">
      <TabsList>
        <TabsTrigger value={tabs[0].value}>{tabs[0].name}</TabsTrigger>
        <TabsTrigger value={tabs[1].value}>{tabs[1].name}</TabsTrigger>
      </TabsList>
      <TabsContent value={tabs[0].value}>{tabs[0].content}</TabsContent>
      <TabsContent value={tabs[1].value}>{tabs[1].content}</TabsContent>
    </Tabs>
  );
};
