import { cn } from "@/app/_lib/utils";
import Image from "next/image";

type ThumbnailProps = {
  src: string;
  alt: string;
};

export function Thumbnail({ src, alt }: ThumbnailProps) {
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
        "sm:col-span-2",
        "flex",
        "items-center"
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        className="object-contain"
      />
    </div>
  );
}
