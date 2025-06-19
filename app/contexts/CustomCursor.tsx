"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const CustomCursor = ({
  children,
  hoverTargets = ["a", "button", "input", "[data-cursor]"],
}: {
  children: React.ReactNode;
  hoverTargets?: string[];
}) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [variant, setVariant] = useState<"default" | "focus" | "click">(
    "default",
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 8, y: e.clientY - 8 });
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setVariant(
        el && hoverTargets.some((sel) => (el as Element).matches(sel))
          ? "focus"
          : "default",
      );
    };
    const handleMouseDown = () => setVariant("click");
    const handleMouseUp = (e: MouseEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setVariant(
        el && hoverTargets.some((sel) => (el as Element).matches(sel))
          ? "focus"
          : "default",
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [hoverTargets]);

  const variants = {
    default: { scale: 1.5, borderColor: "#fff" },
    focus: { scale: 2, borderColor: "#fff" },
    click: { scale: 1.2, borderColor: "#fff" },
  };

  return (
    <div className="cursor-none">
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-6 w-6 rounded-full border border-dashed bg-transparent mix-blend-difference"
        style={{ x: position.x, y: position.y }}
        variants={variants}
        animate={variant}
        transition={{ type: "spring" }}
      />
      {children}
    </div>
  );
};

export default CustomCursor;
