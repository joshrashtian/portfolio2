"use client";
import React from "react";
import { motion } from "framer-motion";
import { useCardContext } from "@/app/contexts/CardContext";
import Image from "next/image";

const BlogCard = () => {
  const { card, position } = useCardContext();

  return (
    <motion.div
      className="fixed top-0 flex h-fit w-fit flex-col rounded-lg bg-purple-50/50 p-3 shadow-lg backdrop-blur-lg dark:bg-zinc-900"
      style={{
        translateX: position?.x,
        translateY: position?.y,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        translateX: position?.x,
        translateY: position?.y - 50,
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
      <h1 className="text-lg font-semibold">{card.Name.title[0].plain_text}</h1>
      <p className="text-sm text-zinc-500">
        {card.Type.select.name} - {card.Published.date.start}
      </p>
    </motion.div>
  );
};

export default BlogCard;
