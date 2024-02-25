import Link from "next/link";
import { cn } from "../_lib/utils";

type NavItem = {
  name: string;
  href: string;
};

type MenuListProps = {
  navItems: NavItem[];
};

export default function MenuList({ navItems }: MenuListProps) {
  return (
    <nav className="nav hidden lg:block pb-10 h-3/4 text-content-1 font-common uppercase font-bold text-md">
      <ul className="mt-16 w-max">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="group flex items-center py-3">
              <span
                className={cn(
                  "nav-text",
                  "font-bold",
                  "uppercase",
                  "tracking-widest",
                  "group-hover:bg-link-hover",
                  "group-hover:p-1",
                  "group-hover:py-0",
                  "group-hover:text-gray-950"
                  // "group-focus-visible:green-ms-dos"
                )}
              >
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
