"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { IoLogoJavascript, IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link";
const SimulatorContext = createContext<unknown>(null);

const Simulator = ({ children }: { children?: React.ReactNode }) => {
  const [stack, setStack] = useState(new Map<string, React.ReactNode>());

  useEffect(() => {
    console.log("Simulator loaded");
    setStack((prevMap) =>
      new Map(prevMap).set(
        "Tutorial",
        <>
          <p className="w-48 p-3">
            Hello, welcome to my expriences! Click on any object to see the
            skill and details about it :)
          </p>
          <p>P.S. This simulator was written from boredom</p>
        </>,
      ),
    );
  }, []);

  const func = useMemo(() => {
    return {
      test: () => console.log("test"),
    };
  }, []);

  return (
    <SimulatorContext.Provider value={func}>
      <section className="relative flex h-[500px] w-full flex-col flex-wrap items-center justify-center gap-3 bg-zinc-950 p-10">
        <Image
          fill
          className="object-cover"
          src={"https://512pixels.net/downloads/macos-wallpapers/10-12.jpg"}
          alt="Picture of me"
        />
        <ul className="absolute left-3 top-3 flex h-full flex-col flex-wrap gap-4">
          <IoLogoJavascript
            onClick={() =>
              setStack((prevMap) =>
                new Map(prevMap).set(
                  "JavaScript.html",
                  <ul className="p-3 font-sans">
                    <p className="mb-5 font-mono">
                      <i>&quot;JavaScript Is My Passion&quot;</i>
                    </p>
                    <ul>
                      <li>Exprience: 2 years</li>
                      <li>Fluent in React, NextJS, React Native, Vanilla</li>
                      <li>
                        This portfolio is written in TypeScript using NextJS.
                      </li>
                    </ul>
                    <p>
                      Now time for a little story.{`\n`} JavaScript was the
                      first language I learned.
                    </p>
                    <p>ok thats the end of the story.</p>
                  </ul>,
                ),
              )
            }
            className="z-20 text-5xl text-yellow-200 hover:bg-white/20"
          />
          <IoLogoLinkedin
            onClick={() =>
              setStack((prevMap) =>
                new Map(prevMap).set(
                  "LinkedIn.md",
                  <ul className="bg-slate-300/40 p-2 font-sans">
                    <p className="mb-5 font-mono">
                      Access My LinkedIn Right Here v
                    </p>
                    <Link
                      className="mt-4 bg-blue-400 p-2 px-4 text-white hover:bg-blue-300/40"
                      href={"https://linkedin.com/in/joshrashtian"}
                    >
                      Visit My LinkedIn
                    </Link>
                  </ul>,
                ),
              )
            }
            className="z-20 text-5xl text-blue-200 hover:bg-white/20"
          />
        </ul>
        <AnimatePresence>
          {Array.from(stack).map((value, index) => (
            <motion.div
              exit={{ opacity: 0 }}
              drag
              dragConstraints={{
                top: -100,
                bottom: 100,
                left: -(window.innerWidth / 2) + 240,
                right: window.innerWidth / 2 - 240,
              }}
              key={index}
              className="relative z-30 h-fit w-fit rounded-xl bg-zinc-50 text-black"
            >
              <header className="absolute left-0 top-0 flex h-5 w-full flex-row items-center rounded-t-xl bg-white px-4 text-black">
                {value[0]}
                <button
                  onClick={() =>
                    setStack((prevMap) => {
                      prevMap.delete(value[0]);
                      return new Map(prevMap);
                    })
                  }
                  className="absolute right-2 h-2 w-2 rounded-full bg-red-500"
                />
              </header>
              <ul className="h-full rounded-xl pt-5"> {value[1]}</ul>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>
    </SimulatorContext.Provider>
  );
};

export default Simulator;
