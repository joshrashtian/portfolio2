"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const textVariants = [
  "joshua rashtian.",
  "josué rashtian.",
  "约书亚·拉什蒂安",
  "جاشوا رشتیان",
  "Τζόσουα Ραστιάν",
  "ジョシュア・ラシュティアン",
  "جوشوا راشتيان",
  "ג'ושוע ראשטיאן",
  "giosuè Rastian.",
  "Джошуа Раштиан.",
];

export default function TitleComponent() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % textVariants.length),
      7000,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative inline-block">
      <AnimatePresence mode="wait" initial={false}>
        <motion.h1
          key={textVariants[index]}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{
            duration: 0.3,
            stiffness: 100,
            damping: 10,
            type: "spring",
            ease: "easeIn",
          }}
          whileDrag={{
            scale: 1.1,
          }}
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          dragElastic={0.1}
          className="animate-gradient bg-300% active:drop-shadow-3xl h-20 translate-y-7 bg-gradient-to-r from-[#8126af] via-red-500 to-blue-600 bg-clip-text text-left text-4xl font-bold text-transparent drop-shadow-lg select-none active:mix-blend-difference lg:translate-y-0 lg:text-7xl"
        >
          {textVariants[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
