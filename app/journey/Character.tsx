"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Character = () => {
  const positionX = useSpring(0);
  const positionY = useMotionValue(0);
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        positionX.set(positionX.get() + 10);
      }

      if (e.key === "ArrowLeft") {
        positionX.set(positionX.get() - 10);
      }
    });
  }, []);
  return (
    <motion.ul
      style={{ x: positionX, y: positionY }}
      className="h-16 w-16 rounded-3xl bg-black p-3"
    />
  );
};

export default Character;
