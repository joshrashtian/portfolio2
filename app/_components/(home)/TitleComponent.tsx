"use client";
import React from "react";
import { motion } from "framer-motion";
import { Sora } from "next/font/google";
const space = Sora({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});
const TitleComponent = () => {
  return (
    <div
      className={`flex h-16 w-full flex-col items-center justify-center drop-shadow-glow lg:flex-row lg:gap-2`}
    >
      <h1 className={`flex flex-row`}>
        {`Joshua`.split("").map((char, i) => (
          <motion.span
            initial={{
              opacity: 0,
              y: 40 * Math.random(),
              color: "#000",
            }}
            animate={{
              opacity: 1,
              y: 0,
              color:
                i < 3
                  ? `#ED71AD`
                  : i < 6
                    ? "#D472BB"
                    : i < 10
                      ? "#B474CD"
                      : "#9375DF",
            }}
            transition={{
              type: "spring",
              duration: 1.5,
              delay: 0.2 * i + 0.5,
              color: { delay: 0.2 * i + 1 },
            }}
            key={i}
            className="inline-flex bg-linear-to-r from-[#B429F9] to-[#239EAB] bg-clip-text text-4xl font-bold text-black drop-shadow-2xl lg:text-6xl dark:text-white"
          >
            {char}
          </motion.span>
        ))}
      </h1>
      <ul className="mx-1" />
      <h1 className={`flex flex-row font-bold`}>
        {`Rashtian.`.split("").map((char, i) => (
          <motion.span
            initial={{
              opacity: 0,
              y: 40 * Math.random(),
              color: "#000",
            }}
            animate={{
              opacity: 1,
              y: 0,
              color: i < 3 ? "#B474CD" : "#9375DF",
            }}
            transition={{
              type: "spring",
              duration: 1.5,
              delay: 0.2 * i + 2.7,
              color: { delay: 0.2 * i + 2.5 },
            }}
            key={i}
            className="inline-flex bg-linear-to-r from-[#B429F9] to-[#239EAB] bg-clip-text text-4xl font-bold text-black drop-shadow-2xl lg:text-6xl dark:text-white"
          >
            {char === "_" ? `\n` : char}
          </motion.span>
        ))}
      </h1>
    </div>
  );
};

export default TitleComponent;