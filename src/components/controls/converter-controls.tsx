import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TabSizes } from "@/types";
import Link from "next/link";
import { ArrowRightLeft, DownloadIcon, LinkIcon, TrashIcon, UploadIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChangeEvent } from "react";
import { Control } from "./control";
import { ButtonControl } from "./button-control";

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
  onReset?: () => void;
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
  onDownload,
  onReset,
}: BeautifierControlsProps) => {
  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value === undefined || value === null || isNaN(+value)) return;

    const numericValue = +value;

    if (numericValue < 0 || numericValue > 10) return;

    if (changeTabSize) changeTabSize(numericValue as TabSizes);
  };

  const handleReset = () => {
    if (!!onReset) onReset();
  };

  const revertLink = revertPath && (
    <Link
      href={revertPath}
      className="justify-center md:w-[110px] flex flex-row items-center font-semibold bg-white rounded-lg p-2 gap-2 shadow text-sm"
    >
      <span className="hidden md:inline"> Switch </span>{" "}
      <ArrowRightLeft width={"20px"} height={"20px"} />
    </Link>
  );

  return (
    <div className="flex flex-row flex-wrap xl:flex-col items-center p-2 gap-2">
      {revertLink}
      <ButtonControl
        variant="default"
        text="Upload data"
        icon={<UploadIcon />}
        isVisible={showUploadControl}
      />
      <Control label="Theme:" isVisible={showThemeControl}>
        <Select onValueChange={changeTheme} value={theme}>
          <SelectTrigger className="w-[100px] md:w-[110px] bg-white" aria-label="Select theme">
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
      </Control>
      <Control label="Tab size:" isVisible={showTabSizeControl && !!handleValueChange}>
        <Input
          className="w-[60px] text-sm md:text-md md:w-[110px] bg-white"
          type="number"
          value={tabSize}
          onChange={handleValueChange}
        />
      </Control>
      <Control label="Convert to:" isVisible={showConvertToControl}>
        <Select>
          <SelectTrigger
            className="w-[100px] md:w-[110px] bg-white"
            aria-label="Convert to another formar"
          >
            <SelectValue placeholder="Convert to" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="csv"> CSV </SelectItem>
            <SelectItem value="xml"> XML </SelectItem>
            <SelectItem value="yaml"> YAML </SelectItem>
          </SelectContent>
        </Select>
      </Control>
      <ButtonControl
        variant="link"
        text="Create link"
        icon={<LinkIcon />}
        isVisible={showCreateLinkControl}
      />
      <ButtonControl
        variant="default"
        text="Download"
        icon={<DownloadIcon />}
        isVisible={showDownloadControl}
        onClick={onDownload}
      />
      <ButtonControl
        variant="destructive"
        text="Clear"
        icon={<TrashIcon />}
        isVisible={showClearControl}
        onClick={handleReset}
      />
    </div>
  );
};
