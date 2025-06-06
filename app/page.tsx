"use client";
import Image from "next/image";
import {
  IoArrowForward,
  IoChatbox,
  IoClipboard,
  IoCode,
  IoHammer,
  IoLogoYoutube,
  IoPin,
  IoSchool,
} from "react-icons/io5";
import { useRef } from "react";
import Link from "next/link";
import React from "react";
import TitleComponent from "./_components/(home)/TitleComponent";
import dynamic from "next/dynamic";
import { BsDownload } from "react-icons/bs";
import { FaDownload } from "react-icons/fa6";
import { Space_Mono } from "next/font/google";
import General from "./_components/(home)/General";
import { motion } from "framer-motion";

const Space = Space_Mono({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export default function Home() {
  const AboutRef = useRef<any>(null);
  const BlogRef = useRef<any>(null);
  const SkillRef = useRef<any>(null);

  const BlogDynamic = dynamic(() => import("./_components/(home)/blog/Blog"));
  const SkillsDynamic = dynamic(() => import("./_components/(home)/Skillset"));
  const AboutDynamic = dynamic(
    () => import("./_components/(home)/about/About"),
  );

  return (
    <>
      <motion.section className="relative flex min-h-screen flex-col gap-10 text-center lg:justify-end lg:px-24">
        <article className="relative flex flex-row gap-x-2 rounded-3xl border-zinc-800/30">
          {/*<ul className="absolute inset-2 bg-linear-to-tl from-blue-400 to-red-400 blur-xl lg:bg-linear-to-br dark:from-blue-300 dark:to-red-300 lg:dark:to-pink-400" />
           */}
          <div className="text-slate-100dark:from-black relative flex w-full flex-row items-center gap-x-2 rounded-3xl p-4 pt-20 pr-3 dark:to-black/80 lg:dark:from-slate-950">
            {/* 
            <Image
              src={require("../app/(assets)/images/IMG_9034.png")}
              alt="Joshua Rashtian"
              width={200}
              priority
              className="scale-[0.8] rounded-3xl duration-500 lg:scale-100 lg:hover:scale-105"
              height={150}
              placeholder="blur-sm"
              blurDataURL=""
            /> */}
            <ul className="relative flex w-full flex-col justify-end gap-3 text-center lg:p-3">
              <TitleComponent />
              <h3
                className={`drop-shadow-glow text-left text-base font-extralight text-slate-700 md:text-2xl lg:text-3xl dark:text-slate-300`}
              >
                Full Stack Engineer / Media Creator / Computer Science Student
              </h3>
              <ol className={`${Space.className} text-center font-black`}>
                <h4
                  className={`flex ${Space.className} flex-row items-center gap-2 font-extralight text-slate-700 lg:text-xl dark:text-slate-300`}
                ></h4>
                <p className="flex flex-row items-center gap-2 font-extralight text-slate-500 lg:text-lg dark:text-slate-300">
                  <IoCode /> 3 Years of Exprience
                </p>
                <p className="flex flex-row items-center gap-2 font-extralight text-slate-500 lg:text-lg dark:text-slate-300">
                  <IoSchool /> Studying At College of the Canyons
                </p>
                <p className="flex flex-row items-center gap-2 font-extralight text-slate-500 lg:text-lg dark:text-slate-300">
                  <IoPin /> Los Angeles, CA
                </p>
              </ol>
              <Link
                href={"/resume.pdf"}
                className="flex w-fit flex-row items-center gap-2 rounded-lg border-2 border-slate-200 bg-linear-to-r from-[#B597F6] to-[#96C6EA] p-1 px-3 text-white duration-300 hover:border-purple-400 dark:from-[#EF566A] dark:to-[#627AF7]"
              >
                <FaDownload /> Download Resume
              </Link>
            </ul>
          </div>
        </article>

        <section className="flex h-64 w-full flex-col justify-between rounded-3xl">
          <footer className="mt-7 mb-20 flex w-full flex-col gap-6 lg:flex-row">
            <button
              onClick={() => {
                //@ts-ignore
                AboutRef?.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:drop-shadow-glowcyan group drop-shadow-glow w-full flex-col rounded-2xl border-dashed p-4 transition-all ease-out hover:border-purple-400 hover:text-purple-700 lg:w-fit lg:hover:scale-105 dark:hover:text-purple-300"
            >
              <h4 className="flex flex-row items-center gap-3 text-left text-lg md:flex-col-reverse lg:justify-center lg:text-2xl">
                Learn More About Me{" "}
                <IoArrowForward className="duration-200 group-hover:translate-x-1" />
              </h4>
            </button>
            <button
              onClick={() => {
                //@ts-ignore
                BlogRef?.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:drop-shadow-glowcyan group drop-shadow-glow flex w-full flex-col rounded-2xl border-dashed p-4 transition-all ease-out hover:border-purple-400 hover:text-purple-700 lg:w-fit lg:hover:scale-105 dark:hover:text-purple-300"
            >
              <h4 className="flex flex-row items-center gap-3 text-left text-lg md:flex-col-reverse lg:justify-center lg:text-2xl">
                Blog{" "}
                <IoChatbox className="duration-200 group-hover:translate-x-1" />
              </h4>
            </button>
            <button
              onClick={() => {
                //@ts-ignore
                SkillRef?.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="hover:drop-shadow-glowcyan group drop-shadow-glow flex w-full flex-col rounded-2xl border-dashed p-4 transition-all ease-out hover:border-purple-400 hover:text-purple-700 lg:w-fit lg:hover:scale-105 dark:hover:text-purple-300"
            >
              <h4 className="flex flex-row items-center gap-3 text-left text-lg md:flex-col-reverse lg:justify-center lg:text-2xl">
                My Skillset{" "}
                <IoHammer className="duration-200 group-hover:translate-x-1" />
              </h4>
            </button>
            <Link
              href="/projects"
              className="hover:drop-shadow-glowcyan drop-shadow-glowcyan group dark:drop-shadow-glow flex w-full flex-col rounded-2xl border-dashed p-4 transition-all ease-out hover:border-purple-400 hover:text-purple-700 lg:w-fit lg:hover:scale-105 dark:hover:text-purple-300"
            >
              <h4 className="flex flex-row items-center gap-3 text-left text-lg md:flex-col-reverse lg:justify-center lg:text-2xl">
                My Work
                <IoClipboard className="duration-200 group-hover:translate-x-1" />
              </h4>
            </Link>
            <Link
              href="/video"
              className="hover:drop-shadow-glowcyan drop-shadow-glowcyan group dark:drop-shadow-glow flex w-full flex-col rounded-2xl border-dashed p-4 transition-all ease-out hover:border-purple-400 hover:text-purple-700 lg:w-fit lg:hover:scale-105 dark:hover:text-purple-300"
            >
              <h4 className="flex flex-row items-center gap-3 text-left text-lg md:flex-col-reverse lg:justify-center lg:text-2xl">
                Youtube Videos
                <IoLogoYoutube className="duration-200 group-hover:translate-x-1" />
              </h4>
            </Link>
          </footer>
        </section>
      </motion.section>
      <ul ref={AboutRef} />
      <General />

      <ul ref={AboutRef} />
      <AboutDynamic />
      <ul ref={SkillRef} />
      <SkillsDynamic />

      <ul ref={BlogRef} />
      <BlogDynamic />
    </>
  );
}
