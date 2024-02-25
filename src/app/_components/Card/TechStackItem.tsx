import { cn } from "@/app/_lib/utils";

interface TechStackItemProps {
  name: string;
}
export function TechStackItem({ name }: TechStackItemProps) {
  return (
    <li className="mr-1.5 mt-2">
      <div
        className={cn(
          "flex",
          "items-center",
          "rounded-full",
          "bg-background-hover/10",
          "px-3",
          "py-1",
          "font-common",
          "text-sm",
          "leading-5",
          "text-link-hover"
        )}
      >
        {name}
      </div>
    </li>
  );
}
