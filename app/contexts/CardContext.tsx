"use client";
import React, { createContext, useContext, useMemo, useState } from "react";
import BlogCard from "../_components/(home)/blog/BlogCard";
import { AnimatePresence } from "framer-motion";

interface Card {
  title: string;
  type: string;
  description: string;
  image: string;
}

const CardContext = createContext<any>({});

const CardContextWrapper = ({ children }: { children: React.ReactNode }) => {
  const [card, CreateCard] = useState<Card>({
    title: "",
    type: "",
    description: "",
    image: "",
  });
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    hovered: false,
  });

  const functions = {
    card,
    CreateCard,
    position,
    hovered: (e: React.MouseEvent<HTMLDivElement>) => {
      if (!e) {
        setPosition({
          ...position,
          hovered: false,
        });
      } else {
        setPosition({
          x: e.clientX,
          y: e.clientY,
          hovered: true,
        });
      }
    },
  };

  return (
    <CardContext.Provider value={functions}>
      {children}
      <AnimatePresence>{position.hovered && <BlogCard />}</AnimatePresence>
    </CardContext.Provider>
  );
};

export default CardContextWrapper;

export function useCardContext() {
  return useContext(CardContext);
}