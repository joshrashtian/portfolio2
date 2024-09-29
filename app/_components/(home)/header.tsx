"use client";
import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { IoBook, IoHammer, IoMenu } from "react-icons/io5";
import { useHeader } from "@/app/contexts/HeaderMenuContext";
import { useDarkMode } from "@/app/contexts/DarkModeContext";
const Header = () => {
  const Menu = useHeader();
  const { scrollY } = useScroll();
  const { dark } = useDarkMode();
  const color = useTransform(
    scrollY,
    [0, 400, 800],
    dark ? ["#222", "#111", "#000"] : ["#fff", "#fff", "rgb(228 228 231)"],
  );

  const shadowOpacity = useTransform(scrollY, [0, 400, 800], [0, 0.3, 1]);
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
      style={{ backgroundColor: color, boxShadow: shadowOpacity }}
      className="fixed left-0 top-0 z-30 flex h-20 w-full flex-row items-center gap-3 p-3 px-5 dark:bg-zinc-700/80"
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

      <motion.ul className="flex h-full w-full flex-row items-center justify-end lg:gap-7 lg:px-10">
        <ul className="hidden gap-7 duration-300 xl:flex">
          <Link
            href="/journey"
            className="group flex flex-row items-center p-0.5 transition-all duration-300 hover:scale-105 hover:text-teal-800 lg:gap-2 hover:dark:text-teal-300"
          >
            {" "}
            <IoBook className="rounded-full p-0.5 duration-700 group-hover:scale-125 group-hover:bg-white" />{" "}
            journey
          </Link>
          <Link
            className="group flex flex-row items-center p-0.5 transition-all duration-300 hover:scale-105 hover:text-orange-800 lg:gap-2 hover:dark:text-orange-400"
            href="/projects"
          >
            {" "}
            <IoHammer className="rounded-full p-0.5 duration-700 group-hover:scale-125 group-hover:bg-white" />{" "}
            projects
          </Link>
        </ul>
        <ul className="flex gap-7">
          <button
            onClick={() => {
              Menu.toggleMenu();
            }}
          >
            <IoMenu
              className={`text-2xl duration-300 hover:scale-105 hover:text-orange-500`}
            />
          </button>
        </ul>
      </motion.ul>
    </motion.header>
  );
};

export default Header;
