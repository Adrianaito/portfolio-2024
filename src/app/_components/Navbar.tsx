"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion as m } from "framer-motion";
import { cn } from "../_lib/utils";
import { navItems } from "@/data/menuItems";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <m.div
//       initial={{ y: "100%" }}
//       animate={{ y: "0%" }}
//       transition={{ duration: 0.75, easy: "easeOut", delay: 0.5 }}
//       className="flex flex-col lg:flex-row font-common font-bold text-sm z-10 fixed top-0 left-0 w-full"
//     >
//       <button className="p-4 lg:hidden" onClick={toggleMenu}>
//         <svg
//           className="h-6 w-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//           ></path>
//         </svg>
//       </button>
//       <nav
//         className={cn(
//           "absolute lg:relative lg:flex",
//           isOpen ? "flex" : "hidden",
//           "flex-col lg:flex-row top-16 left-0 bg-gray-950 w-full lg:w-auto"
//         )}
//       >
//         <ul className="flex flex-col lg:flex-row">
//           {/* Dynamically render menu items */}
//           {pathname !== "/" && (
//             <li className="my-2 lg:my-0">
//               <Link href="/">
//                 <a className="block text-white py-2 px-4 hover:bg-gray-700">
//                   Home
//                 </a>
//               </Link>
//             </li>
//           )}
//           {navItems.map((item) => (
//             <li key={item.href} className="my-2 lg:my-0">
//               <Link
//                 href={item.href}
//                 className="block text-white py-2 px-4 hover:bg-gray-700"
//               >
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//           {/* Additional links */}
//           <li className="my-2 lg:my-0">
//             <a
//               href="https://www.linkedin.com/in/adriana-ito/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block text-white py-2 px-4 hover:bg-gray-700"
//             >
//               LinkedIn
//             </a>
//           </li>
//           <li className="my-2 lg:my-0">
//             <a
//               href="https://github.com/Adrianaito"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block text-white py-2 px-4 hover:bg-gray-700"
//             >
//               GitHub
//             </a>
//           </li>
//           <li className="my-2 lg:my-0">
//             <a
//               href="mailto:ito.dri@gmail.com"
//               className="block text-white py-2 px-4 hover:bg-gray-700"
//             >
//               Email
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </m.div>
//   );
// }

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <m.div
      initial={{ y: "100%" }}
      // initial={pathname == "/contact" ? { y: "1000%" } : { y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, easy: "easeOut", delay: 0.5 }}
      className="lg:h-screen flex flex-col lg:flex-row font-common font-bold text-sm z-10 fixed top-0 left-0 bg-gray-950"
    >
      <button className="p-4 lg:hidden" onClick={toggleMenu}>
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>
      <nav
        className={cn(
          "flex",
          "flex-wrap",
          "justify-between",
          "items-center",
          "uppercase",
          "text-foreground-pink",
          "tracking-widest",
          "h-16",
          "w-screen",
          "bg-gray-950",
          "p-6",
          "z-50",
          "relative",
          "lg:border-b-2",
          "border-foreground-pink",
          "text-teal-400",
          "tracking-widest",
          "lg:content-between",
          "lg:justify-end",
          "lg:pr-0",
          "lg:h-screen",
          "lg:w-28",
          "lg:border-b-0",
          "lg:border-r-2",
          "lg:flex",
          { flex: isOpen },
          { hidden: !isOpen },
          { fixed: isOpen },
          { "top-12": isOpen }

          // { "z-50": isOpen }
        )}
      >
        <div
          className={cn(
            "lg:flex lg:flex-col gap-14",
            {
              "lg:gap-24": pathname == "/",
            },
            { "w-full": isOpen }
          )}
        >
          <ul
            className={cn(
              "flex gap-5 flex-col lg:gap-20 lg:mt-10 lg:flex bg-gray-950 ",
              {
                hidden: !isOpen,
              }
            )}
          >
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
                  className="lg:-rotate-90 hover:underline hover:text-white cursor-default"
                >
                  <li>linkedin</li>
                </a>
                <a
                  href="https://github.com/Adrianaito"
                  target="_blank"
                  className="lg:-rotate-90 hover:underline hover:text-white cursor-default"
                >
                  <li>github</li>
                </a>
                <a
                  href="mailto:ito.dri@gmail.com"
                  className="lg:-rotate-90 hover:underline hover:text-white cursor-default"
                >
                  <li>email</li>
                </a>
                {navItems.map((item) => (
                  <Link href={item.href} key={item.href} className="lg:hidden">
                    <li>{item.name}</li>
                  </Link>
                ))}
              </>
            )}
          </ul>
          <div
            className={cn(
              "lg:w-[0.5px] lg:bg-teal-400 lg:h-[100px] lg:self-center",
              {
                "lg:mr-5": pathname !== "/",
              }
            )}
          ></div>
        </div>
        <span className="hidden lg:-rotate-90 lg:block lg:pb-5 lg:mb-5">
          ©/2024
        </span>
      </nav>
      {/* {children} */}
    </m.div>
  );
}
