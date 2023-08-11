"use client";
import Link from "next/link";
import { motion as m } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <AnimatePresence>
      <main className="flex h-full w-screen flex-col items-center justify-between">
        <m.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ opacity: 1, height: "100%" }}
          transition={{ duration: 1, easy: "easeIn", delay: 0.5 }}
          className="flex flex-row justify-between items-center w-full h-full "
        >
          <div className="pl-24 font-montserrat">
            <div>
              <h1 className="text-2xl uppercase">Adriana Ito</h1>
              <p>Fullstack Web Developer</p>
              <p></p>
            </div>
            <div>
              <p>Currently working full-time as a Web Developer</p>
              <p>at Matinno</p>
            </div>
          </div>
          <div className="pr-24 ">
            <Link
              href="/"
              className="text-4xl font-sans  font-bold text-center"
            >
              <p className="text-6xl hover:text-7xl text-center lg:text-right lg:text-9xl lg:hover:text-[8.5rem]">
                Work
              </p>
            </Link>
            <Link href="/" className="text-4xl font-bold text-center">
              <p className="text-6xl text-center lg:text-right lg:text-9xl lg:hover:text-[8.5rem]">
                About
              </p>
            </Link>
            <Link href="/contact" className="text-4xl font-bold text-center">
              <p className="text-6xl text-center lg:text-right lg:text-9xl lg:hover:text-[8.5rem]">
                Contact
              </p>
            </Link>
          </div>
        </m.div>
      </main>
    </AnimatePresence>
  );
}
