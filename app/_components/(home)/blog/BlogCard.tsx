"use client";
import React from "react";
import { motion } from "framer-motion";
import { useCardContext } from "@/app/contexts/CardContext";

const BlogCard = () => {
  const { card, position } = useCardContext();

  return (
    <motion.div
      className="fixed top-0 h-24 w-24 bg-white shadow-lg"
      style={{
        translateX: `${position?.x}px`,
        translateY: `${position?.y}px`,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        translateX: `${position?.x}px`,
        translateY: `${position?.y}px`,
      }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>{card.Name.title[0].plain_text}</h1>
    </motion.div>
  );
};

export default BlogCard;
