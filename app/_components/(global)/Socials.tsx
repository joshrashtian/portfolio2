"use client";
import React from "react";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";

const Socials = () => {
  return (
    <ul className="fixed bottom-0 flex w-full items-center justify-center">
      <motion.section
        initial={{ y: 70, opacity: 0 }}
        animate={{ y: -30, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{
          y: { delay: 0.5 },
          opacity: { delay: 0.2, duration: 1.2 },
          duration: 1.2,
          type: "spring",
        }}
        className="flex h-[56px] w-fit -translate-y-10 flex-row items-center justify-center gap-2 place-self-center rounded-3xl border-2 bg-white px-10 shadow-xl dark:border-zinc-800 dark:bg-zinc-600 dark:shadow-md dark:shadow-blue-700/50"
      >
        <Link
          className="flex items-center justify-center rounded-md p-0.5 text-3xl duration-300 hover:scale-125 hover:shadow-lg"
          href="https://github.com/joshrashtian"
        >
          <IoLogoGithub className="rounded-full duration-300 hover:shadow-sm hover:shadow-white/50 active:scale-90" />
        </Link>
        <Link
          className="flex items-center justify-center p-0.5 text-3xl duration-300 hover:scale-125 hover:shadow-lg"
          href="https://www.linkedin.com/in/joshrashtian/"
        >
          <IoLogoLinkedin className="duration-300 hover:text-blue-500 hover:shadow-sm hover:shadow-blue-400/70 active:scale-90" />
        </Link>
        <Link
          className="flex items-center justify-center p-0.5 text-3xl duration-300 hover:scale-125 hover:shadow-lg"
          href="https://www.instagram.com/joshuajrashtian/"
        >
          <IoLogoInstagram className="rounded-xl duration-300 hover:text-pink-500 hover:shadow-sm hover:shadow-purple-600/70 active:scale-90" />
        </Link>
      </motion.section>
    </ul>
  );
};

export default Socials;
