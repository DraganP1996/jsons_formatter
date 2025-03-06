import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TabSizes } from "@/types";
import { Button } from "../ui/button";

const THEMES = [
  "amy",
  "ayuLight",
  "barf",
  "bespin",
  "birdsOfParadise",
  "boysAndGirls",
  "clouds",
  "cobalt",
  "coolGlow",
  "dracula",
  "espresso",
  "noctisLilac",
  "rosePineDawn",
  "smoothy",
  "solarizedLight",
  "tomorrow",
];

export type ControlsConfig = {
  showTabSizeControl: boolean;
  showUploadControl: boolean;
  showThemeControl: boolean;
  showConvertToControl: boolean;
  showCreateLinkControl: boolean;
  showDownloadControl: boolean;
  showClearControl: boolean;
};

type BeautifierControlsProps = {
  tabSize?: TabSizes;
  theme: string;
  changeTabSize?: (tabSize: TabSizes) => void;
  changeTheme: (theme: string) => void;
  onUrlConversion: () => void;
} & ControlsConfig;

export const ConvertControls = ({
  tabSize,
  theme,
  showTabSizeControl,
  showUploadControl,
  showThemeControl,
  showConvertToControl,
  showCreateLinkControl,
  showDownloadControl,
  showClearControl,
  changeTabSize,
  changeTheme,
  onUrlConversion,
}: BeautifierControlsProps) => {
  const handleValueChange = (value: string) => {
    const numericValue = +value;

    if (isNaN(numericValue)) return;

    if (changeTabSize) changeTabSize(numericValue as TabSizes);
  };

  const themeSelect = (
    <Select onValueChange={changeTheme} value={theme}>
      <SelectTrigger className="w-[180px] bg-white">
        <SelectValue placeholder="Editor theme" />
      </SelectTrigger>
      <SelectContent>
        {THEMES.map((theme) => (
          <SelectItem key={theme} value={theme}>
            {theme}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );

  const tabSizeSelect = (
    <Select onValueChange={handleValueChange} value={`${tabSize}`}>
      <SelectTrigger className="w-[180px] bg-white">
        <SelectValue placeholder="Space Tab" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">1 Space Tab </SelectItem>
        <SelectItem value="2">2 Space Tab</SelectItem>
        <SelectItem value="3">3 Space Tab</SelectItem>
        <SelectItem value="4">4 Space Tab</SelectItem>
        <SelectItem value="0">Compact</SelectItem>
      </SelectContent>
    </Select>
  );

  const convertTo = (
    <Select>
      <SelectTrigger className="w-[180px] bg-white">
        <SelectValue placeholder="Convert to" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="csv"> CSV </SelectItem>
        <SelectItem value="xml"> XML </SelectItem>
        <SelectItem value="yaml"> YAML </SelectItem>
      </SelectContent>
    </Select>
  );

  return (
    <div className="flex flex-row flex-wrap xl:flex-col items-center p-2 gap-2">
      {showUploadControl && <Button className="w-[180px]">Upload data</Button>}
      {showThemeControl && themeSelect}
      {showTabSizeControl && changeTabSize && tabSizeSelect}
      {showConvertToControl && convertTo}
      {showCreateLinkControl && (
        <Button variant="link" className="w-[180px]" onClick={onUrlConversion}>
          Create link
        </Button>
      )}
      {showDownloadControl && <Button className="w-[180px]"> Download </Button>}
      {showClearControl && (
        <Button variant="destructive" className="w-[180px]">
          Clear
        </Button>
      )}
    </div>
  );
};
