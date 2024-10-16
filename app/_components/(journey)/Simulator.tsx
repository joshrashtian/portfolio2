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
const SimulatorContext = createContext<unknown>(null);

const Simulator = ({ children }: { children?: React.ReactNode }) => {
  const [stack, setStack] = useState(new Map<string, React.ReactNode>());

  useEffect(() => {
    console.log("Simulator loaded");
    setStack((prevMap) =>
      new Map(prevMap).set(
        "Tutorial",
        <p>
          Hello, welcome to my expriences! Click on any object to see the skill
          and details about it :)
        </p>,
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
      <section className="relative flex h-[500px] w-full flex-row items-center justify-center bg-zinc-950 p-10">
        <Image
          fill
          className="object-cover"
          src={"https://512pixels.net/downloads/macos-wallpapers/10-12.jpg"}
          alt="Picture of me"
        />
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
              className="relative h-64 w-64 rounded-xl bg-zinc-50 text-black"
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
              <ul className="h-full rounded-xl bg-gradient-to-br from-slate-200 to-zinc-200 pt-5">
                {" "}
                {value[1]}
              </ul>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>
    </SimulatorContext.Provider>
  );
};

export default Simulator;
