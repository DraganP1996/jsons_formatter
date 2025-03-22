"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { capitalizeWord } from "@/utils/capitalizeWord";

const DocBreadcumbLink = ({ path }: { path: string }) => {
  const paths = path.split("/");
  const pathname = paths[paths.length - 1];
  const name = capitalizeWord(pathname);

  return (
    <>
      <BreadcrumbItem>
        <BreadcrumbLink href={`${process.env.NEXT_PUBLIC_BASE_URL}/${path}`}>{name}</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
    </>
  );
};

const convertPathToPageName = (path: string) => {
  const pathWords = path.split("-");

  console.log("Path words", pathWords);

  const formattedPathWords = pathWords.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1, word.length);
  });

  return formattedPathWords.join(" ");
};

const DocBreadcumbPage = ({ path }: { path: string }) => {
  const paths = path.split("/");
  const pathname = paths[paths.length - 1];
  const name = convertPathToPageName(pathname);

  return (
    <BreadcrumbItem>
      <BreadcrumbPage>{name}</BreadcrumbPage>
    </BreadcrumbItem>
  );
};

export const DocBreadcumb = () => {
  const pathname = usePathname();
  const formattedPaths = pathname
    .split("/")
    .reduce<string[]>((acc, curr, currIndex) => {
      const formattedPath = pathname
        .split("/")
        .filter((_, index) => index <= currIndex)
        .join("/");

      if (!formattedPath) return acc;

      acc.push(formattedPath);

      return acc;
    }, [])
    .filter((path) => !!path);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {formattedPaths.map((path, index) => {
          if (index !== formattedPaths.length - 1) {
            return <DocBreadcumbLink key={path} path={path} />;
          } else {
            return <DocBreadcumbPage key={path} path={path} />;
          }
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
