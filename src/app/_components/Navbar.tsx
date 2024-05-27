"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion as m } from "framer-motion";
import { cn } from "../_lib/utils";
import { navItems } from "@/data/menuItems";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <m.div
      initial={{ y: "100%" }}
      // initial={pathname == "/contact" ? { y: "1000%" } : { y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, easy: "easeOut", delay: 0.5 }}
      className="lg:h-screen flex flex-col lg:flex-row font-common font-bold text-sm z-10 fixed top-0 left-0"
    >
      <nav
        className={cn(
          "flex",
          "flex-wrap",
          "justify-between",
          "items-center",
          "uppercase",
          "tracking-widest",
          "h-16",
          "w-screen",
          // "bg-gray-950",
          "bg-background",
          "p-6",
          "z-50",
          "relative",
          "border-b-2",
          "border-border",
          "text-link-hover",
          "tracking-widest",
          "lg:content-between",
          "lg:justify-end",
          "lg:pr-0",
          "lg:h-screen",
          "lg:w-28",
          "lg:border-b-0",
          "lg:border-r-2"
        )}
      >
        <div
          className={cn("lg:flex lg:flex-col gap-14", {
            "lg:gap-24": pathname == "/",
          })}
        >
          <ul className={cn("flex gap-5 lg:flex-col lg:gap-20 lg:mt-10", {})}>
            {pathname !== "/" ? (
              <>
                <Link
                  href="/"
                  className="lg:-rotate-90 hover:underline cursor-default lg:pb-5"
                >
                  <li>home</li>
                </Link>
              </>
            ) : (
              <>
                <a
                  href="https://www.linkedin.com/in/adriana-ito/"
                  target="_blank"
                  className="lg:-rotate-90 hover:underline hover:text-link cursor-default"
                >
                  <li>linkedin</li>
                </a>
                <a
                  href="https://github.com/Adrianaito"
                  target="_blank"
                  className="lg:-rotate-90 hover:underline hover:text-link cursor-default"
                >
                  <li>github</li>
                </a>
                <a
                  href="mailto:contact@adrianaito.com"
                  className="lg:-rotate-90 hover:underline hover:text-link cursor-default"
                >
                  <li>email</li>
                </a>
                {/* {navItems.map((item) => (
                  <Link href={item.href} key={item.href} className="lg:hidden">
                    <li>{item.name}</li>
                  </Link>
                ))} */}
              </>
            )}
          </ul>
          <div
            className={cn(
              "lg:w-[0.5px] lg:bg-link-hover lg:h-[100px] lg:self-center",
              {
                "lg:mr-5": pathname !== "/",
              }
            )}
          ></div>
        </div>
        <span className="lg:-rotate-90 lg:pb-5 lg:mb-5">©/2024</span>
      </nav>
      {/* {children} */}
    </m.div>
  );
}
