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
  const headerScale = useTransform(scrollY, [0, 500], [1, 0.95]);
  const headerY = useTransform(scrollY, [0, 500], [0, 10]);

  return (
    <div className="font-nenue fixed top-0 left-0 z-30 flex w-full flex-row items-center justify-center">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
        style={{
          boxShadow: shadowOpacity,
          scale: headerScale,
          y: headerY,
        }}
        className="flex w-full flex-row items-center justify-between gap-6 bg-transparent p-2 px-4"
      >
        {/* Logo Section */}
        <Link href={"/"} className="group flex flex-row items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="relative"
          >
            <Image
              width={52}
              height={40}
              alt="icon"
              className="h-10 w-10 self-center transition-all duration-300"
              src={require("../../(assets)/jjr.png")}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.div>
          <span className="hidden text-lg font-bold text-gray-800 lg:block dark:text-white">
            Josh Rashtian
          </span>
        </Link>

        {/* Navigation Links */}
        <motion.nav
          className="flex h-full flex-1 items-center justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ul className="hidden gap-8 duration-300 xl:flex">
            <Link
              className="group relative flex flex-row items-center gap-2 rounded-xl px-4 py-2 transition-all duration-1000 hover:bg-zinc-400/20"
              href="/projects"
            >
              <span className="font-medium text-gray-700 transition-colors duration-300 group-hover:text-orange-600 dark:text-gray-200 dark:group-hover:text-orange-400">
                Projects
              </span>
            </Link>

            <Link
              className="group relative flex flex-row items-center gap-2 rounded-xl px-4 py-2 transition-all duration-1000 hover:bg-zinc-400/20"
              href="/blog"
            >
              <span className="font-medium text-gray-700 transition-colors duration-300 group-hover:text-green-600 dark:text-gray-200 dark:group-hover:text-green-400">
                Journal
              </span>
            </Link>

            <Link
              className="group relative flex flex-row items-center gap-2 rounded-xl px-4 py-2 transition-all duration-1000 hover:bg-zinc-400/20"
              href="/projects/game"
            >
              <span className="font-medium text-gray-700 transition-colors duration-300 group-hover:text-purple-600 dark:text-gray-200 dark:group-hover:text-purple-400">
                Games
              </span>
            </Link>
          </ul>
        </motion.nav>

        <motion.button
          onClick={() => {
            Menu.toggleMenu();
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 p-3 shadow-lg transition-all duration-300 hover:from-orange-100 hover:to-red-100 dark:from-gray-800 dark:to-gray-700 dark:hover:from-orange-800/50 dark:hover:to-red-800/50"
        >
          <IoMenu className="text-xl text-gray-700 transition-colors duration-300 hover:text-orange-600 dark:text-gray-200 dark:hover:text-orange-400" />
        </motion.button>
      </motion.header>
    </div>
  );
};

export default Header;
