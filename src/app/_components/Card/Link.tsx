import { cn } from "@/app/_lib/utils";

type ContentLinkProps = {
  title: string;
  link: string | "#";
  icon?: React.ReactNode;
  className?: string;
  download?: boolean;
};

export function CardLink({
  title,
  link,
  icon,
  className,
  download,
}: ContentLinkProps) {
  return (
    <div className="z-10 sm:col-span-6 group/link-bottom mt-4">
      <div className="leading-snug text-slate-200 ">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          download={download}
          className={
            (cn(
              "inline-flex",
              "items-baseline",
              "font-common",
              "leading-tight",
              "text-slate-200",
              "lg:group-hover/link-bottom:text-teal-300"
            ),
            className)
          }
        >
          <span className="text-md flex">
            {title}
            <span className="inline-block pl-1 self-center">{icon}</span>
          </span>
        </a>
      </div>
    </div>
  );
}
