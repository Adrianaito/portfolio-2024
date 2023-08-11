"use client";
import Link from "next/link";
import { motion as m } from "framer-motion";

export default function Contact() {
  return (
    <m.div
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, easy: "easeOut" }}
      className="flex flex-col items-start justify-center w-full h-full"
    >
      <div className="m-24 overflow-hidden">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ duration: 0.5, easy: "easeOut", delay: 0.75 }}
          className="text-6xl font-sans text-center lg:text-right lg:text-9xl"
        >
          Let&apos;s talk!
        </m.h1>
      </div>
      <div className="flex flex-col gap-2 pl-24 font-montserrat">
        <div className="lg-text-2xl text-base">
          <h4>
            Email:
            <a href="mailto:ito.dri@gmail.com" className="pl-2 hover:underline">
              ito.dri@gmail.com
            </a>
          </h4>
        </div>
        <div className="lg-text-2xl text-base">
          <h4 className="flex">
            On the Internet:
            <span className="flex pl-2">
              <a
                href="https://www.linkedin.com/in/adriana-ito/"
                target="_blank"
                className="underline"
              >
                <div>linkedin</div>
              </a>
              <span className="px-2"> / </span>
              <a
                href="https://github.com/Adrianaito"
                className="underline"
                target="_blank"
              >
                <div>github</div>
              </a>
            </span>
          </h4>
        </div>
      </div>
    </m.div>
  );
}
