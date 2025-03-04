import { useCallback, useEffect } from "react";
import { useClientSideChecker } from "./useClientSideChecker";
import { useTheme } from "./useTheme";
import { useSourceResultEditors } from "./useSourceResultEditors";
import { TabSizes } from "@/types";

export type SourceChangeFn = (serializedJSON: string, tabSize?: TabSizes) => string;

export type UseCommonConverterStuffProps = {
  initalSourceValue: string;
  initialResultValue: string;
  sourceChangeFn: SourceChangeFn;
};

export const useCommonConverterStuff = ({
  initalSourceValue,
  initialResultValue,
  sourceChangeFn,
}: UseCommonConverterStuffProps) => {
  const isReadyToLoadEditor = useClientSideChecker();
  const [theme, setTheme] = useTheme();
  const { source, result, setSource, setResult } = useSourceResultEditors();

  const handleSourceChange = useCallback(
    (value: string, tabSize?: TabSizes) => {
      try {
        setSource(value);

        const formatted = sourceChangeFn(value, tabSize);

        setResult(formatted);
      } catch (err) {
        console.log(err);
        setResult("");
      }
    },
    [setResult, setSource, sourceChangeFn]
  );

  useEffect(() => {
    setSource(initalSourceValue);
    setResult(initialResultValue);
  }, [initalSourceValue, initialResultValue, setResult, setSource]);

  return {
    isReadyToLoadEditor,
    theme,
    source,
    result,
    setTheme,
    setSource,
    setResult,
    handleSourceChange,
  };
};
