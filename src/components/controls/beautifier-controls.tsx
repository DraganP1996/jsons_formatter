import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TabSizes } from "@/types";

const THEMES = [
  "default",
  "3024-day",
  "3024-night",
  "abcdef",
  "ambiance",
  "base16-dark",
  "base16-light",
  "bespin",
  "blackboard",
  "cobalt",
  "colorforth",
  "dracula",
  "duotone-dark",
  "duotone-light",
  "eclipse",
  "elegant",
  "erlang-dark",
  "hopscotch",
  "icecoder",
  "isotope",
  "lesser-dark",
  "liquibyte",
  "material",
  "mbo",
  "mdn-like",
  "midnight",
  "monokai",
  "neat",
  "neo",
  "night",
  "panda-syntax",
  "paraiso-dark",
  "paraiso-light",
  "pastel-on-dark",
  "railscasts",
  "rubyblue",
  "seti",
  "solarized dark",
  "solarized light",
  "the-matrix",
  "tomorrow-night-bright",
  "tomorrow-night-eighties",
  "ttcn",
  "twilight",
  "vibrant-ink",
  "xq-dark",
  "xq-light",
  "yeti",
  "zenburn",
];

type BeautifierControlsProps = {
  tabSize: TabSizes;
  changeTabSize: (tabSize: TabSizes) => void;
};

export const BeautifierControls = ({ tabSize, changeTabSize }: BeautifierControlsProps) => {
  const handleValueChange = (value: string) => {
    const numericValue = +value;

    console.log(numericValue);

    if (isNaN(numericValue)) return;

    console.log("It is a numeric value");

    changeTabSize(numericValue as TabSizes);
  };

  return (
    <div className="flex flex-col items-center py-2 gap-2">
      <Select>
        <SelectTrigger className="w-[180px]">
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
      <Select onValueChange={handleValueChange} value={`${tabSize}`}>
        <SelectTrigger className="w-[180px]">
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
    </div>
  );
};
