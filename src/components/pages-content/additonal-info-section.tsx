import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type AdditionalInfoSectionProps = {
  className?: string;
  children: ReactNode;
};

export const AdditionalInfoSection = ({ className, children }: AdditionalInfoSectionProps) => {
  return (
    <section className={cn("flex flex-col", className)}>
      <article className="">
        <div className="py-2 font-anta">{children}</div>
      </article>
    </section>
  );
};
