import { cn } from "@/app/_lib/utils";
import { Link2 } from "lucide-react";

type ContentLinkProps = {
  title: string;
  link: string | "#";
};

export function CardLink({ title, link }: ContentLinkProps) {
  return (
    <div className="z-10 sm:col-span-6 group/link-bottom mt-4">
      <div className="leading-snug text-slate-200 ">
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
            "lg:group-hover/link-bottom:text-teal-300"
          )}
        >
          <span className="text-md flex">
            {title}
            <span className="inline-block pl-1 self-center">
              <Link2 size={12} />
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}
