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
        "text-slate-200",
        "lg:group-hover/root:text-teal-300",
        "group/link text-base",
        "lg:group-hover/link:cursor-pointer"
      )}
    >
      <div className="z-10 sm:col-span-6">
        <h3 className="leading-snug text-slate-200 lg:group-hover/root:text-teal-300">
          <span className="text-md flex">
            {title}
            <span className="inline-block pl-1 self-center group-hover/link:self-start">
              <ArrowUpRightSquare size={16} />
            </span>
          </span>
          <div className="text-slate-500 font-common">{subtitle}</div>
        </h3>
        {/* <p className="mt-2 text-sm leading-normal text-slate-400">{children}</p> */}
        {children}
      </div>
    </a>
  );
}
