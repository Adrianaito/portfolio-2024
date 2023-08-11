import Link from "next/link";

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex">
      <nav className="flex items-center justify-between h-screen w-28 flex-wrap bg-gray-800 p-6">
        <ul className="flex flex-col gap-20">
          <Link href="/" className="-rotate-90">
            <li>linkedin</li>
          </Link>
          <Link href="/contact" className="-rotate-90">
            <li>github</li>
          </Link>
          <Link href="/contact" className="-rotate-90">
            <li>email</li>
          </Link>
        </ul>
        <span className="-rotate-90">/2023</span>
      </nav>
      {children}
    </div>
  );
}
