"use client";
import Image from "next/image";
import { IoArrowForward, IoChatbox, IoHammer } from "react-icons/io5";
import About from "./_components/(home)/about/About";
import { useRef } from "react";
import Link from "next/link";
import Blog from "./_components/(home)/blog/Blog";
import Skillset from "./_components/(home)/Skillset";
import React from "react";

export default function Home() {
  const AboutRef = useRef<any>(null);
  const BlogRef = useRef<any>(null);
  const SkillRef = useRef<any>(null);

  return (
    <>
      <section className="flex min-h-[120vh] flex-col justify-center p-12 lg:min-h-[80vh] lg:justify-between lg:p-24 lg:py-32">
        <article className="flex flex-row gap-x-2 rounded-3xl border-zinc-800/30 bg-gradient-to-tr from-slate-300 to-blue-200 p-4 text-slate-100 shadow-2xl dark:from-blue-800 dark:to-purple-900">
          <Image
            src={require("../app/(assets)/images/IMG_9034.png")}
            alt="Joshua Rashtian"
            width={200}
            className="scale-[0.8] rounded-[3rem] duration-500 lg:scale-100 lg:hover:scale-105"
            height={150}
          />
          <ul className="flex flex-col justify-end">
            <h1 className="text-3xl font-black drop-shadow-[0_2.0px_3px_rgba(0,0,0,0.8)] lg:text-6xl">
              Joshua Rashtian.
            </h1>
            <h3 className="text-lg font-light text-black lg:text-3xl dark:text-slate-300">
              Software Developer / Full Stack Engineer / Computer Science
              Student
            </h3>
          </ul>
        </article>
        <section className="flex h-64 w-full flex-col justify-between rounded-3xl">
          <footer className="mb-20 flex flex-col gap-3 lg:flex-row">
            <button
              onClick={() => {
                //@ts-ignore
                AboutRef?.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group w-full flex-col rounded-2xl border-2 border-dashed p-4 transition-all ease-out hover:scale-105 hover:border-purple-400 lg:w-fit"
            >
              <h4 className="text-left text-lg lg:text-2xl">
                Learn More About Me{" "}
                <IoArrowForward className="duration-200 group-hover:translate-x-1" />
              </h4>
            </button>
            <button
              onClick={() => {
                //@ts-ignore
                BlogRef?.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex w-full flex-col rounded-2xl border-2 border-dashed p-4 transition-all ease-out hover:scale-105 hover:border-purple-400 lg:w-fit"
            >
              <h4 className="text-lg lg:text-2xl">
                Blog{" "}
                <IoChatbox className="duration-200 group-hover:translate-x-1" />
              </h4>
            </button>
            <button
              onClick={() => {
                //@ts-ignore
                SkillRef?.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex w-full flex-col rounded-2xl border-2 border-dashed p-4 transition-all ease-out hover:scale-105 hover:border-purple-400 lg:w-fit"
            >
              <h4 className="text-lg lg:text-2xl">
                My Skillset{" "}
                <IoChatbox className="duration-200 group-hover:translate-x-1" />
              </h4>
            </button>
            <Link
              href="/projects"
              className="group flex w-full flex-col rounded-2xl border-2 border-dashed p-4 transition-all ease-out hover:scale-105 hover:border-purple-400 lg:w-fit"
            >
              <h4 className="text-lg lg:text-2xl">
                My Work
                <IoHammer className="duration-200 group-hover:translate-x-1" />
              </h4>
            </Link>
          </footer>
        </section>
      </section>
      <About ref={AboutRef} />
      <Skillset ref={SkillRef} />
      <Blog ref={BlogRef} />
    </>
  );
}
