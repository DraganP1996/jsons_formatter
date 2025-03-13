import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TabSizes } from "@/types";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRightLeft, DownloadIcon, LinkIcon, TrashIcon, UploadIcon } from "lucide-react";

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
  revertPath?: string;
};

type BeautifierControlsProps = {
  tabSize?: TabSizes;
  theme: string;
  changeTabSize?: (tabSize: TabSizes) => void;
  changeTheme: (theme: string) => void;
  onUrlConversion: () => void;
  onDownload?: () => void;
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
  revertPath,
  changeTabSize,
  changeTheme,
  onUrlConversion,
  onDownload,
}: BeautifierControlsProps) => {
  const handleValueChange = (value: string) => {
    const numericValue = +value;

    if (isNaN(numericValue)) return;

    if (changeTabSize) changeTabSize(numericValue as TabSizes);
  };

  const themeSelect = (
    <Select onValueChange={changeTheme} value={theme}>
      <SelectTrigger className="w-[120px] bg-white">
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
      <SelectTrigger className="w-[120px] bg-white">
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
      <SelectTrigger className="w-[120px] bg-white">
        <SelectValue placeholder="Convert to" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="csv"> CSV </SelectItem>
        <SelectItem value="xml"> XML </SelectItem>
        <SelectItem value="yaml"> YAML </SelectItem>
      </SelectContent>
    </Select>
  );

  const revertLink = revertPath && (
    <Link
      href={revertPath}
      className="w-[120px] flex flex-row items-center font-semibold justify-between bg-white rounded-lg px-2 py-1 shadow"
    >
      Switch <ArrowRightLeft width={"20px"} height={"20px"} />
    </Link>
  );

  const uploadButton = showUploadControl && (
    <Button className="w-[120px] flex flex-row items-center font-semibold">
      Upload data <UploadIcon />
    </Button>
  );

  const downloadBtn = showDownloadControl && (
    <Button className="w-[120px] flex flex-row items-center font-semibold" onClick={onDownload}>
      Download <DownloadIcon />
    </Button>
  );

  const clearBtn = showClearControl && (
    <Button variant="destructive" className="w-[120px] flex flex-row items-center font-semibold">
      Clear <TrashIcon />
    </Button>
  );

  const linkBtn = showCreateLinkControl && (
    <Button variant="link" className="w-[120px] font-semibold" onClick={onUrlConversion}>
      Create link <LinkIcon />
    </Button>
  );

  return (
    <div className="flex flex-row flex-wrap xl:flex-col items-center p-2 gap-2">
      {revertLink}
      {uploadButton}
      {showThemeControl && themeSelect}
      {showTabSizeControl && changeTabSize && tabSizeSelect}
      {showConvertToControl && convertTo}
      {linkBtn}
      {downloadBtn}
      {clearBtn}
    </div>
  );
};
