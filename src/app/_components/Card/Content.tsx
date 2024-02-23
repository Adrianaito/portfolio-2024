import { cn } from "@/app/_lib/utils";

type ContentProps = {
  children: React.ReactNode;
  subtitle: string;
  title: string;
  link: string | "#";
};

export function Content({ children, subtitle, title, link }: ContentProps) {
  return (
    <div className="z-10 sm:col-span-6">
      <h3 className="leading-snug text-slate-200 ">
        <div>
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
              "lg:group-hover:text-teal-300",
              "group/link text-base"
            )}
          >
            <span className="text-md">
              {title}
              <span className="inline-block pl-1">{">"}</span>
            </span>
          </a>
        </div>
        <div>
          <div className="text-slate-500 font-common">{subtitle}</div>
        </div>
        <div></div>
      </h3>
      {/* <p className="mt-2 text-sm leading-normal text-slate-400">{children}</p> */}
      {children}
    </div>
  );
}
