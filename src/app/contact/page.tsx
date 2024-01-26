"use client";
import { motion as m } from "framer-motion";

export default function Contact() {
  return (
    <m.div
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      // initial={{ height: 0, opacity: 0 }}
      // animate={{ opacity: 1, height: "100%" }}
      transition={{ duration: 0.5, easy: "easeOut", delay: 0 }}
      className="flex flex-col items-start justify-center w-full absolute left:0 lg:left-28 top-0 ml-auto min-h-screen bg-background/75 overflow-hidden"
    >
      <div className="mx-10 mt-24 mb-10 lg:m-24 overflow-hidden">
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ duration: 0.5, easy: "easeOut", delay: 1 }}
          className="text-6xl font-sans text-left lg:text-right lg:text-9xl"
        >
          Let&apos;s talk!
        </m.h1>
      </div>
      <div className="flex flex-col gap-2 pl-10 lg:pl-24 font-common">
        <div className="lg-text-2xl text-lg">
          <h4>
            Email:
            <a href="mailto:ito.dri@gmail.com" className="pl-2 hover:underline">
              ito.dri@gmail.com
            </a>
          </h4>
        </div>
        <div className="lg-text-2xl text-lg">
          <h4 className="flex">
            On the Internet:
            <span className="flex pl-2">
              <a
                href="https://www.linkedin.com/in/adriana-ito/"
                target="_blank"
                className="hover:underline"
              >
                <div>linkedin</div>
              </a>
              <span className="px-2"> / </span>
              <a
                href="https://github.com/Adrianaito"
                className="hover:underline"
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
