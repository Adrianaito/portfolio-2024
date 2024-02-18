import { cn } from "@/app/_lib/utils";

type TimeLineProps = {
  start: string;
  end: string;
};

export function TimeLine({ start, end }: TimeLineProps) {
  return (
    <div
      className={cn(
        "z-10",
        "mb-2",
        "mt-0",
        "text-lg",
        "font-semibold",
        "font-ms-dos",
        "uppercase",
        "tracking-wide",
        "text-slate-400",
        "sm:col-span-2"
      )}
    >
      {`${start} - ${end}`}
    </div>
  );
}
