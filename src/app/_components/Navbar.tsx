"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="h-screen flex">
      <nav className="flex items-center justify-between h-screen w-28 flex-wrap bg-gray-800 p-6 z-20 relative">
        <ul className="flex flex-col gap-20">
          {pathname !== "/" ? (
            <Link
              href="/"
              className="-rotate-90 hover:underline cursor-default"
            >
              <li>home</li>
            </Link>
          ) : (
            <>
              <a
                href="https://www.linkedin.com/in/adriana-ito/"
                target="_blank"
                className="-rotate-90 hover:underline cursor-default"
              >
                <li>linkedin</li>
              </a>
              <a
                href="https://github.com/Adrianaito"
                target="_blank"
                className="-rotate-90 hover:underline cursor-default"
              >
                <li>github</li>
              </a>
              <a
                href="mailto:ito.dri@gmail.com"
                className="-rotate-90 hover:underline cursor-default"
              >
                <li>email</li>
              </a>
            </>
          )}
        </ul>
        <span className="-rotate-90">© / 2023</span>
      </nav>
      {children}
    </div>
  );
}
