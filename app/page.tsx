"use client";
import Image from "next/image";
import Header from "./_components/(home)/header";
import { IoArrowForward, IoChatbox, IoHammer } from "react-icons/io5";
import About from "./_components/(home)/about/About";
import { useRef } from "react";
import Link from "next/link";
import Blog from "./_components/(home)/blog/Blog";

export default function Home() {
  const AboutRef = useRef<any>(null);
  const BlogRef = useRef<any>(null);
  return (
    <>
      <section className="flex min-h-screen flex-col justify-between p-12 py-32 lg:p-24">
        <article className="flex flex-row gap-x-2">
          <Image
            src={require("../app/(assets)/images/IMG_9034.png")}
            alt="Joshua Rashtian"
            width={400}
            className="rounded-[3rem] duration-500 hover:scale-105"
            height={220}
          />
        </article>
        <section className="flex h-64 w-full flex-col justify-between rounded-3xl">
          <ul>
            <h1 className="text-6xl font-black">Joshua Rashtian.</h1>
            <h3 className="text-3xl font-light dark:text-slate-300">
              &quot;inspiring quote&quot;.
            </h3>
          </ul>
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
      <Blog ref={BlogRef} />
    </>
  );
}
