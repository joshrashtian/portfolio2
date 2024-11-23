"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import BlogCard from "../_components/(home)/blog/BlogCard";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

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

  const pathname = usePathname();

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
          x: e.clientX + 20,
          y: e.clientY + 20,
          hovered: true,
        });
      }
    },
  };

  useEffect(() => {
    setPosition({
      ...position,
      hovered: false,
    });
  }, [pathname]);

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
