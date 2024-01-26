import { cn } from "@/app/_lib/utils";
import { ArrowUpRightSquare } from "lucide-react";

type ContentProps = {
  children: React.ReactNode;
  subtitle: string;
  title: string;
  link: string | "#";
};

export function Content({ children, subtitle, title, link }: ContentProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex",
        "items-baseline",
        "font-common",
        "leading-tight",
        "text-link",
        "lg:group-hover/root:text-link-hover",
        "group/link text-base",
        "lg:group-hover/link:cursor-pointer"
      )}
    >
      <div className="z-10 sm:col-span-6">
        <h3 className="leading-snug text-link lg:group-hover/root:text-link-hover">
          <span className="text-md flex">
            {title}
            <ArrowUpRightSquare
              size={16}
              className="inline-block pl-1 self-center group-hover/link:self-start"
            />
          </span>
          <div className="text-content-1 font-common">{subtitle}</div>
        </h3>
        {/* <p className="mt-2 text-sm leading-normal text-content-2">{children}</p> */}
        {children}
      </div>
    </a>
  );
}
