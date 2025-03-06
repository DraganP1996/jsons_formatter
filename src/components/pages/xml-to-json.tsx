"use client";

import { useCallback } from "react";
import { Converter, ConverterEditorConfigurations } from "../converter";
import { TabSizes } from "@/types";
import { ControlsConfig } from "../controls";
import { XMLParser } from "fast-xml-parser";

const mockXML = `<catalog>
<product description="Cardigan Sweater" product_image="cardigan.jpg">
   <catalog_item gender="Men's">
      <item_number>QWZ5671</item_number>
      <price>39.95</price>
      <size description="Medium">
         <color_swatch image="red_cardigan.jpg">Red</color_swatch>
         <color_swatch image="burgundy_cardigan.jpg">Burgundy</color_swatch>
      </size>
      <size description="Large">
         <color_swatch image="red_cardigan.jpg">Red</color_swatch>
         <color_swatch image="burgundy_cardigan.jpg">Burgundy</color_swatch>
      </size>
   </catalog_item>
   <catalog_item gender="Women's">
      <item_number>RRX9856</item_number>
      <price>42.50</price>
      <size description="Small">
         <color_swatch image="red_cardigan.jpg">Red</color_swatch>
         <color_swatch image="navy_cardigan.jpg">Navy</color_swatch>
         <color_swatch image="burgundy_cardigan.jpg">Burgundy</color_swatch>
      </size>
      <size description="Medium">
         <color_swatch image="red_cardigan.jpg">Red</color_swatch>
         <color_swatch image="navy_cardigan.jpg">Navy</color_swatch>
         <color_swatch image="burgundy_cardigan.jpg">Burgundy</color_swatch>
         <color_swatch image="black_cardigan.jpg">Black</color_swatch>
      </size>
      <size description="Large">
         <color_swatch image="navy_cardigan.jpg">Navy</color_swatch>
         <color_swatch image="black_cardigan.jpg">Black</color_swatch>
      </size>
      <size description="Extra Large">
         <color_swatch image="burgundy_cardigan.jpg">Burgundy</color_swatch>
         <color_swatch image="black_cardigan.jpg">Black</color_swatch>
      </size>
   </catalog_item>
</product>
</catalog>`;

const converterControlsConfig: ControlsConfig = {
  showTabSizeControl: true,
  showUploadControl: false,
  showThemeControl: true,
  showConvertToControl: false,
  showCreateLinkControl: false,
  showDownloadControl: true,
  showClearControl: true,
};

const parser = new XMLParser();

export const XMLToJSONPageLayout = () => {
  const parsedValue = parser.parse(mockXML);

  console.log("TEST", parsedValue);

  const configurations: ConverterEditorConfigurations = {
    0: {
      id: "json_editor_origin_item",
      value: mockXML,
      mode: "xml",
      readonly: false,
    },
    1: {
      id: "json_editor_result_item",
      value: JSON.stringify(parser.parse(mockXML), null, 2),
      mode: "json",
      readonly: true,
    },
  };

  const sourceChangeFn = useCallback((value: string, tabSize?: TabSizes) => {
    const formattedValue =
      tabSize !== undefined
        ? JSON.stringify(parser.parse(value), null, tabSize)
        : JSON.stringify(parser.parse(value));

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
