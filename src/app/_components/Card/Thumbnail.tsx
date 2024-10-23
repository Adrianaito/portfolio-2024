import { cn } from "@/app/_lib/utils";
import Image from "next/image";

type ThumbnailProps = {
  src: string;
  alt: string;
  className?: string;
};

export function Thumbnail({ src, alt, className }: ThumbnailProps) {
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
        "text-content-2",
        "sm:col-span-2",
        "flex",
        "items-center",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={150}
        height={100}
        className="object-contain border border-text-secondary/20 rounded hidden md:block"
      />
    </div>
  );
}
