import { cn } from "@/app/_lib/utils";

type TechStackContentContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function TechStackContentContainer({
  className,
  children,
}: TechStackContentContainerProps) {
  return <div className={cn("z-10 sm:col-span-6", className)}>{children}</div>;
}
