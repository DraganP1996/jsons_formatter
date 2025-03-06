"use client";

import { useCallback } from "react";
import { Converter, ConverterEditorConfigurations } from "../converter";
import { TabSizes } from "@/types";
import { ControlsConfig } from "../controls";

const mockJSON2 = {
  name: "Dragan",
};

const converterControlsConfig: ControlsConfig = {
  showTabSizeControl: true,
  showUploadControl: false,
  showThemeControl: true,
  showConvertToControl: false,
  showCreateLinkControl: false,
  showDownloadControl: true,
  showClearControl: true,
};

export const StringToJSONPageLayout = () => {
  const configurations: ConverterEditorConfigurations = {
    0: {
      id: "json_editor_origin_item",
      value: JSON.stringify(JSON.stringify(mockJSON2)),
      mode: "text",
      readonly: false,
    },
    1: {
      id: "json_editor_result_item",
      value: JSON.stringify(mockJSON2, null, 2),
      mode: "json",
      readonly: true,
    },
  };

  const sourceChangeFn = useCallback((value: string, tabSize?: TabSizes) => {
    console.log("***** ORIGINAL VALUE", value);

    const formattedValue =
      tabSize !== undefined
        ? JSON.stringify(JSON.parse(value), null, 2)
        : JSON.stringify(JSON.parse(value));

    return formattedValue;
  }, []);

  return (
    <Converter
      configurations={configurations}
      sourceChangeFn={sourceChangeFn}
      initialTabSize={2}
      converterControlsConfig={converterControlsConfig}
      allowTabSizeChange
    />
  );
};
