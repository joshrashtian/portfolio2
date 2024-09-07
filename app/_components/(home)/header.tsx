"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoBook, IoHammer } from "react-icons/io5";
const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
      className="fixed left-0 top-0 z-50 flex h-20 w-full flex-row items-center gap-3 bg-zinc-200 p-3 px-5 drop-shadow-lg dark:bg-zinc-700/80"
    >
      <Link href={"/"} className="flex flex-row gap-1">
        <Image
          width={40}
          height={40}
          alt="icon"
          className="h-8 w-8 self-center transition-transform hover:scale-110 dark:invert"
          src={require("../../(assets)/jjr.png")}
        />
        <Image
          src={require("../../(assets)/joshrashtian.png")}
          className="translate-y-1 invert dark:invert-0"
          alt="Logo"
          width={200}
          height={100}
        />
      </Link>
      <motion.ul className="flex h-full w-full flex-row items-center justify-end gap-7 px-20">
        <Link
          href="/journey"
          className="group flex flex-row items-center gap-2 p-0.5 transition-all duration-300 hover:scale-105 hover:text-teal-800 hover:dark:text-teal-300"
        >
          {" "}
          <IoBook className="rounded-full p-0.5 duration-700 group-hover:scale-125 group-hover:bg-white" />{" "}
          journey
        </Link>
        <Link
          className="group flex flex-row items-center gap-2 p-0.5 transition-all duration-300 hover:scale-105 hover:text-orange-800 hover:dark:text-orange-400"
          href="/projects"
        >
          {" "}
          <IoHammer className="rounded-full p-0.5 duration-700 group-hover:scale-125 group-hover:bg-white" />{" "}
          projects
        </Link>
      </motion.ul>
    </motion.header>
  );
};

export default Header;
