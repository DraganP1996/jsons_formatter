"use client";

import { useCallback } from "react";
import { XMLBuilder } from "fast-xml-parser";

import { Converter, ConverterEditorConfigurations } from "../converter";
import { ControlsConfig } from "../controls";

const mockJSON = {
  catalog: {
    product: {
      catalog_item: [
        {
          item_number: "QWZ5671",
          price: 39.95,
          size: [
            {
              color_swatch: ["Red", "Burgundy"],
            },
            {
              color_swatch: ["Red", "Burgundy"],
            },
          ],
          "#text": "hbh",
        },
        {
          item_number: "RRX9856",
          price: 42.5,
          size: [
            {
              color_swatch: ["Red", "Navy", "Burgundy"],
            },
            {
              color_swatch: ["Red", "Navy", "Burgundy", "Black"],
            },
            {
              color_swatch: ["Navy", "Black"],
            },
            {
              color_swatch: ["Burgundy", "Black"],
            },
          ],
        },
      ],
    },
  },
};

const converterControlsConfig: ControlsConfig = {
  showTabSizeControl: false,
  showUploadControl: true,
  showThemeControl: true,
  showConvertToControl: true,
  showCreateLinkControl: true,
  showDownloadControl: false,
  showClearControl: true,
};
const builder = new XMLBuilder({
  format: true,
});

export const JSONToXMLPageLayout = () => {
  const xml = builder.build(mockJSON);

  const configurations: ConverterEditorConfigurations = {
    0: {
      id: "json_editor_origin_item",
      value: JSON.stringify(mockJSON, null, 2),
      mode: "json",
      readonly: false,
    },
    1: {
      id: "xml_editor_result_item",
      value: xml,
      mode: "xml",
      readonly: true,
    },
  };

  const sourceChangeFn = useCallback((value: string) => {
    return builder.build(JSON.parse(value));
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
