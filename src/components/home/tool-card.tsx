import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  path: string;
};

export const ToolCard = ({ title, description, path }: ToolCardProps) => {
  return (
    <Link className="bg-gray-100 rounded shadow cursor-pointer hover:bg-gray-200 p-2" href={path}>
      <h3 className="text-xl font-bold font-electrolize"> {title} </h3>
      <p className="p-0 text-gray-600 leading-5">{description}</p>
    </Link>
  );
};
