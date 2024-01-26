"use client";
import { useRef } from "react";
import { motion as m } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { cn } from "./_lib/utils";
import { navItems } from "@/data/menuItems";
import { aboutParagraphs } from "@/data/about";
import MenuList from "./_components/MenuList";
import ExperienceCard from "./_components/ExperienceCard";
import ProjectCard from "./_components/ProjectCard";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { Card } from "./_components/Card";
import { Download } from "lucide-react";

export default function Home() {
  const scrollContainer = useRef(null);

  return (
    <>
      {/* <Navbar /> */}
      <AnimatePresence>
        <m.main
          initial={{ height: 0, opacity: 0 }}
          animate={{ opacity: 1, height: "100%" }}
          transition={{ duration: 0.75, easy: "easeIn", delay: 0.5 }}
          className="flex h-full w-screen w-[calc(100% - 7rem)] flex-col items-center justify-between -z-10"
        >
          <m.div
            className={cn(
              "mx-auto",
              "min-h-screen",
              "max-w-screen-xl",
              "px-6",
              "py-20",
              "md:px-12",
              "md:py-20",
              "lg:pr-24",
              "lg:pl-32",
              "lg:py-0"
            )}
          >
            <div className="lg:flex lg:justify-between lg:gap-14">
              <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                <div className="w-2/3">
                  <h1 className="text-4xl tracking-wider font-main-title text-main-title uppercase pb-4 font-bold">
                    Adriana Ito
                  </h1>
                  <p className="text-lg pb-3 text-main-title font-common">
                    Fullstack Web Developer
                  </p>
                  <p className="text-lg text-content-1 font-common">
                    Currently developing full-time for
                  </p>
                  <p className="text-lg text-content-1">
                    <a
                      href="https://www.matinno.co/"
                      target="_blank"
                      className="hover:underline text-link-hover hover:text-white font-common"
                    >
                      Matinno.
                    </a>{" "}
                  </p>
                </div>
                <MenuList navItems={navItems} />
              </div>
              <div
                id="content"
                className="pt-24 lg:w-1/2 lg:py-24"
                ref={scrollContainer}
              >
                <section
                  id="about"
                  className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-content-1"
                >
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-link lg:sr-only">
                      About
                    </h2>
                  </div>
                  <div>
                    {aboutParagraphs.map((paragraph: any, index) => (
                      <p key={index} className="mb-4 font-common">
                        {paragraph.content}
                      </p>
                    ))}
                  </div>
                </section>
                <section
                  id="experience"
                  className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                >
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-link lg:sr-only">
                      Experience
                    </h2>
                  </div>
                  <div>
                    {experiences.map((exp, index) => (
                      <ExperienceCard key={index} experience={exp} />
                    ))}
                  </div>
                  <Card.CardLink
                    title="Download Full Resume"
                    link="/Adriana Ito resume.pdf"
                    icon={<Download size={16} />}
                    className="font-common underline hover:no-underline lg:group-hover/link-bottom:text-link-hover"
                  />
                </section>
                <section
                  id="projects"
                  className="section-projects h-[1000px]mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                >
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-link lg:sr-only">
                      Projects
                    </h2>
                  </div>
                  <div>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} project={project} />
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </m.div>
        </m.main>
      </AnimatePresence>
    </>
  );
}
