"use client";
import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  IoBook,
  IoGameController,
  IoHammer,
  IoMenu,
  IoPerson,
} from "react-icons/io5";
import { useHeader } from "@/app/contexts/HeaderMenuContext";
import { useDarkMode } from "@/app/contexts/DarkModeContext";
const Header = () => {
  const Menu = useHeader();
  const { scrollY } = useScroll();

  const shadowOpacity = useTransform(scrollY, [0, 400, 800], [0, 0.3, 1]);
  return (
    <div className="fixed top-0 left-0 z-30 flex h-20 w-full flex-row items-center justify-center lg:top-4">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
        style={{ boxShadow: shadowOpacity }}
        className="relative flex h-20 w-full items-center justify-between gap-3 bg-slate-100/70 p-3 drop-shadow-lg backdrop-blur-xl md:rounded-3xl lg:h-16 lg:w-1/2 lg:px-10 dark:bg-zinc-700/80"
      >
        <Link href={"/"} className="flex flex-row gap-1">
          <Image
            width={52}
            height={40}
            alt="icon"
            className="h-8 w-8 self-center transition-transform hover:scale-110"
            src={require("../../(assets)/jjr.png")}
          />
        </Link>

        <motion.ul className="flex h-full items-center justify-end text-white mix-blend-difference lg:gap-7 lg:px-10">
          <ul className="hidden gap-7 duration-300 xl:flex">
            <Link
              href="/journey"
              className="group z-40 flex flex-row items-center p-0.5 transition-all duration-300 hover:scale-105 hover:text-teal-800 lg:gap-2 dark:hover:text-teal-300"
            >
              {" "}
              <IoPerson className="rounded-full p-0.5 duration-700 group-hover:scale-125 group-hover:bg-white" />{" "}
              journey
            </Link>
            <Link
              className="group z-40 flex flex-row items-center p-0.5 transition-all duration-300 hover:scale-105 hover:text-orange-800 lg:gap-2 dark:hover:text-orange-400"
              href="/projects"
            >
              {" "}
              <IoHammer className="rounded-full p-0.5 duration-700 group-hover:scale-125 group-hover:bg-white" />{" "}
              projects
            </Link>
            <Link
              className="group z-40 flex flex-row items-center p-0.5 transition-all duration-300 hover:scale-105 hover:text-orange-800 lg:gap-2 dark:hover:text-orange-400"
              href="/blog"
            >
              {" "}
              <IoBook className="rounded-full p-0.5 duration-700 group-hover:scale-125 group-hover:bg-white" />{" "}
              journal
            </Link>
            <Link
              className="group z-40 flex flex-row items-center p-0.5 transition-all duration-300 hover:scale-105 hover:text-orange-800 lg:gap-2 dark:hover:text-orange-400"
              href="/projects/game"
            >
              {" "}
              <IoGameController className="rounded-full p-0.5 duration-700 group-hover:scale-125 group-hover:bg-white" />{" "}
              games
            </Link>
          </ul>
        </motion.ul>

        <button
          onClick={() => {
            Menu.toggleMenu();
          }}
        >
          <IoMenu
            className={`text-2xl duration-300 hover:scale-105 hover:text-orange-500`}
          />
        </button>
      </motion.header>
    </div>
  );
};

export default Header;
