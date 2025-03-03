import { useState } from "react";

export const useSourceResultEditors = () => {
  const [source, setSource] = useState<string>("");
  const [result, setResult] = useState<string>("");

  return {
    source,
    result,
    setSource,
    setResult,
  };
};
