"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

const JsonEditor = dynamic(() => import("webeditors-react").then((m) => m.JsonEditor), {
  ssr: false,
});

export const CodeSample = ({ children }: { children: ReactNode }) => {
  return <JsonEditor value={children?.toString()} readonly />;
};

export const MDXCodeSample = ({
  theme,
  height,
  readonly,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  theme: any;
  height: string;
  readonly: boolean;
}) => {
  const testObjs = {
    name: "JSON Editor",
    description: "Example of JSON Editor",
  };

  return (
    <div
      style={{
        height,
      }}
      className="my-2"
    >
      <JsonEditor
        value={JSON.stringify(testObjs, null, 2)}
        theme={theme}
        mode="json"
        readonly={readonly}
      />
    </div>
  );
};
