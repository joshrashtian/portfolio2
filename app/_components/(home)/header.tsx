"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
      className="fixed left-0 top-0 flex h-20 w-full flex-row items-center gap-3 bg-zinc-200/30 p-3 px-5 dark:bg-zinc-700/40"
    >
      <Image
        width={40}
        height={40}
        alt="icon"
        className="transition-transform hover:scale-110 dark:invert"
        src={require("../../(assets)/jjr.png")}
      />
      <Image
        src={require("../../(assets)/joshrashtian.png")}
        className="translate-y-1 invert dark:invert-0"
        alt="Logo"
        width={200}
        height={100}
      />
    </motion.header>
  );
};

export default Header;
