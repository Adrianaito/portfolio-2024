import { cn } from "@lib/utils";

export const Content = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("container mx-auto p-6 bg-white", className)}>
      {children}
    </div>
  );
};
