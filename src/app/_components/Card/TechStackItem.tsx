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
          "bg-teal-400/10",
          "px-3",
          "py-1",
          "font-common",
          "text-xs",
          "leading-5",
          "text-teal-300"
        )}
      >
        {name}
      </div>
    </li>
  );
}
