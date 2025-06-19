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
import { Figtree, Space_Mono } from "next/font/google";
import General from "./_components/(home)/General";
import { motion } from "framer-motion";
import ImageStack from "./_components/(home)/ImageStack";

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
      <motion.section className="relative flex min-h-[100vh] flex-col p-4 text-center lg:justify-end lg:gap-10 lg:px-24 2xl:min-h-[100vh]">
        <ImageStack />
        <article className="relative flex flex-row gap-x-2 rounded-3xl border-zinc-800/30">
          {/*<ul className="absolute inset-2 bg-linear-to-tl from-blue-400 to-red-400 blur-xl lg:bg-linear-to-br dark:from-blue-300 dark:to-red-300 lg:dark:to-pink-400" />
           */}

          <div className="relative flex w-full flex-row items-center justify-center gap-x-3 rounded-3xl text-slate-100 dark:from-black dark:to-black/80 lg:dark:from-slate-950">
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
            <ul
              className={`relative flex w-full flex-col items-center justify-center gap-3`}
            >
              <TitleComponent />
              <h3
                className={`drop-shadow-glow text-center text-base font-extralight text-slate-700 selection:bg-purple-300/20 md:text-2xl lg:text-3xl dark:text-slate-300 dark:selection:bg-slate-300/20`}
              >
                living and capturing each moment, then using that to build the
                best tomorrow.
              </h3>
              <h4 className="text-center text-base font-extralight text-slate-700 md:text-xl lg:text-2xl dark:text-slate-300">
                student, developer, and creator.
              </h4>
              <ol
                className={`flex flex-row items-center justify-center gap-x-2 font-black`}
              >
                <p className="flex flex-row items-center gap-2 font-extralight text-slate-500 lg:text-lg dark:text-slate-300">
                  <IoCode /> 5 Years of Exprience
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
      </motion.section>
      <General />

      <AboutDynamic />
      <ul ref={SkillRef} />
      <SkillsDynamic />

      <ul ref={BlogRef} />
      <BlogDynamic />
    </>
  );
}
