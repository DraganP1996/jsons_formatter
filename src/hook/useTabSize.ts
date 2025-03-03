import { TabSizes } from "@/types";
import { useCallback, useState } from "react";

export const useTabSize = (
  initialValue: TabSizes,
  callback?: (tabSize: TabSizes, data?: unknown) => void
) => {
  const [tabSize, setTabSize] = useState<TabSizes>(initialValue);

  const handlTabSizeChange = useCallback(
    (tabSize: TabSizes) => {
      setTabSize(() => {
        if (callback) {
          callback(tabSize);
        }

        return tabSize;
      });
    },
    [callback]
  );

  return { tabSize, setTabSize: handlTabSizeChange };
};
