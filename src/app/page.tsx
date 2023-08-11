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
          className="flex flex-row justify-between items-center w-full h-full px-20"
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
          <div className="pr-24">
            <Link href="/" className="font-sans font-bold">
              <p className="text-6xl hover:italic text-left lg:text-9xl pb-10">
                Work
              </p>
            </Link>
            <Link href="/" className="font-sans font-bold">
              <p className="text-6xl hover:italic text-left lg:text-9xl pb-10">
                About
              </p>
            </Link>
            <Link href="/contact" className="font-sans font-bold">
              <p className="text-6xl hover:italic text-left lg:text-9xl pb-10">
                Contact
              </p>
            </Link>
          </div>
        </m.div>
      </main>
    </AnimatePresence>
  );
}
