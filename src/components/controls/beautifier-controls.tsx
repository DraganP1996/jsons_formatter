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

type BeautifierControlsProps = {
  tabSize?: TabSizes;
  theme: string;
  changeTabSize?: (tabSize: TabSizes) => void;
  changeTheme: (theme: string) => void;
  onUrlConversion: () => void;
};

export const BeautifierControls = ({
  tabSize,
  theme,
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
            {" "}
            {theme}{" "}
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
    <div className="flex flex-col items-center p-2 gap-2">
      <Button className="w-[180px]">Upload data</Button>
      {themeSelect}
      {changeTabSize && tabSizeSelect}
      {convertTo}
      <Button variant="link" className="w-[180px]" onClick={onUrlConversion}>
        Create link{" "}
      </Button>
      <Button className="w-[180px]"> Download </Button>
      <Button variant="destructive" className="w-[180px]">
        {" "}
        Clear{" "}
      </Button>
    </div>
  );
};
