"use client";
import ImageStack from "./_components/(home)/ImageStack";
import TitleComponent from "./_components/(home)/TitleComponent";
import General from "./_components/(home)/General";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa6";
import { IoCode, IoSchool, IoPin } from "react-icons/io5";
import Link from "next/link";
import Skills from "./_components/(home)/Skillset";
import Blog from "./_components/(home)/blog/Blog";

export default function Home() {
  // 1. Create refs for every "page section" you want a dot for:
  const HeroRef = useRef<HTMLElement>(null);
  const AboutRef = useRef<HTMLElement>(null);
  const SkillRef = useRef<HTMLElement>(null);
  const BlogRef = useRef<HTMLElement>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  // 2. Active section state
  const [active, setActive] = useState(0);

  // 3. Put them in an array for easy mapping
  const sections = [
    { ref: HeroRef, label: "Home" },
    { ref: AboutRef, label: "About" },
    { ref: SkillRef, label: "Skills" },
    { ref: BlogRef, label: "Blog" },
  ];

  // 4. IntersectionObserver to detect which section is in view
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.findIndex(
              (s) => s.ref.current === entry.target,
            );
            if (idx >= 0) setActive(idx);
          }
        });
      },
      { threshold: 0.6 }, // 60% of the section must be visible
    );

    sections.forEach((sec) => {
      if (sec.ref.current) obs.observe(sec.ref.current);
    });

    return () => {
      sections.forEach((sec) => {
        if (sec.ref.current) obs.unobserve(sec.ref.current);
      });
    };
  }, []);

  return (
    <>
      {/* NAVIGATION */}
      <div className="fixed top-1/2 right-4 z-50 flex -translate-y-1/2 transform flex-col gap-3">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              sections[i].ref.current?.scrollIntoView({ behavior: "smooth" });
              setActive(i);
            }}
            className={`h-2 w-2 rounded-full transition-all ${active === i ? "scale-150 bg-indigo-600" : "bg-gray-400"} `}
            aria-label={`Go to ${sections[i].label}`}
          />
        ))}
      </div>

      {/* PAGE SECTIONS */}
      <motion.section
        ref={HeroRef}
        className="relative flex min-h-[100vh] flex-col justify-center p-4 text-center lg:gap-6 lg:px-8 xl:px-16 2xl:px-24"
      >
        <ImageStack />
        <article className="mx-auto max-w-5xl rounded-3xl bg-white/5 p-6 text-slate-100">
          <ul
            className={`relative flex w-full flex-col items-center justify-center gap-3`}
          >
            <TitleComponent />
            <h3 className="drop-shadow-glow text-center text-base font-extralight text-slate-700 selection:bg-purple-300/20 md:text-2xl lg:text-3xl dark:text-slate-300 dark:selection:bg-slate-300/20">
              embracing the revolution, one line of code at a time.
            </h3>
            <h4 className="text-center text-base font-extralight text-slate-700 md:text-xl lg:text-2xl dark:text-slate-300">
              student, developer, and creator.
            </h4>
            <div className="flex justify-center gap-6 text-slate-400">
              <p className="flex items-center gap-2">
                <IoCode />5 Years Experience
              </p>
              <p className="flex items-center gap-2">
                <IoSchool />
                College of the Canyons
              </p>
              <p className="flex items-center gap-2">
                <IoPin />
                Los Angeles, CA
              </p>
            </div>
            <Link
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-600 px-4 py-2 font-medium text-white duration-300 hover:scale-105 hover:border-purple-500 hover:opacity-90 hover:ring-2 hover:ring-purple-500 hover:ring-offset-2"
            >
              <FaDownload /> Download Resume
            </Link>
          </ul>
        </article>
      </motion.section>

      <motion.section ref={scrollRef}>
        <section ref={AboutRef}>
          <General />
        </section>

        <section ref={SkillRef}>
          <Skills />
        </section>

        <section ref={BlogRef}>
          <Blog />
        </section>
      </motion.section>
    </>
  );
}
