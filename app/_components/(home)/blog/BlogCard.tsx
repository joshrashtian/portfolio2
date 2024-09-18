"use client";
import React from "react";
import { motion } from "framer-motion";
import { useCardContext } from "@/app/contexts/CardContext";
import Image from "next/image";

const BlogCard = () => {
  const { card, position } = useCardContext();

  return (
    <motion.div
      className="fixed top-0 flex h-fit w-fit flex-col items-center rounded-lg bg-white p-2 shadow-lg"
      style={{
        translateX: `${position?.x}px`,
        translateY: `${position?.y}px`,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        translateX: `${position?.x + 10}px`,
        translateY: `${position?.y + 10}px`,
      }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { duration: 0.5, type: "spring" },
        duration: 0.35,
      }}
    >
      {card.coverImage.files[0] && (
        <Image
          src={card.coverImage.files[0].file.url}
          alt="Blog Image"
          width={100}
          height={100}
        />
      )}
      <h1>{card.Name.title[0].plain_text}</h1>
      <p className="text-sm text-zinc-500">
        {card.Type.select.name} - {card.Published.date.start}
      </p>
    </motion.div>
  );
};

export default BlogCard;
