import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  path: string;
  target?: string;
};

export const ToolCard = ({ title, description, path, target }: ToolCardProps) => {
  return (
    <Link
      className="bg-gray-100 rounded shadow cursor-pointer hover:bg-gray-200 p-2"
      href={path}
      target={target ?? "_self"}
    >
      <h3 className="text-lg sm:text-xl font-bold font-electrolize"> {title} </h3>
      <p className="text-sm sm:text-md p-0 text-gray-600 leading-5">{description}</p>
    </Link>
  );
};
