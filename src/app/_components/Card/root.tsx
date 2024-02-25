import { cn } from "@/app/_lib/utils";

interface CardRootProps {
  children: React.ReactNode;
  className?: string;
}

export function CardRoot({ children, className }: CardRootProps) {
  return (
    <div className="mb-12">
      <div
        className={cn(
          "group/root",
          "relative",
          "grid",
          "pb-1",
          "transition-all",
          "sm:grid-cols-8",
          "sm:gap-8",
          "md:gap-4",
          "lg:hover:!opacity-100",
          "lg:group-hover/list:opacity-50",
          className
        )}
      >
        <div
          className={cn(
            "absolute",
            "-inset-x-4",
            "-inset-y-4",
            "z-0",
            "hidden",
            "rounded-md",
            "transition",
            "motion-reduce:transition-none",
            "lg:-inset-x-6",
            "lg:block",
            // "lg:group-hover/root:bg-slate-800/50",
            "lg:group-hover/root:bg-background-secondary/30",
            "lg:group-hover/root:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]",
            "lg:group-hover/root:drop-shadow-lg"
          )}
        ></div>
        {children}
      </div>
    </div>
  );
}
