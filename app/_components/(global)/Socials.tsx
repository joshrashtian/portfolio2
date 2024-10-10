"use client";
import React, { useState } from "react";
import {
  IoChatbox,
  IoDocumentText,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoSparkles,
} from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Contact from "../contact/Contact";

const Socials = () => {
  const [contact, setContact] = useState(false);

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
        }}
        className={`z-50 flex ${contact ? "h-[450px] items-end lg:w-[500px]" : "h-[56px] w-96"} -translate-y-10 flex-col items-center justify-end gap-2 place-self-center rounded-3xl border-2 bg-white px-10 pb-2 shadow-xl duration-500 dark:border-zinc-800 dark:bg-zinc-600 dark:shadow-md dark:shadow-blue-700/50`}
      >
        <AnimatePresence>{contact && <Contact />}</AnimatePresence>
        <ul
          className={`flex flex-row items-center justify-center transition-all delay-200 duration-1000 ${contact && "rounded-3xl bg-zinc-200/40 p-2 px-5 text-teal-600"} gap-3`}
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
            className="flex items-center justify-center text-3xl duration-300 hover:scale-125"
            href="https://www.instagram.com/joshuajrashtian/"
          >
            <IoLogoInstagram className="rounded-lg duration-300 hover:text-pink-500 hover:shadow-sm hover:shadow-purple-600/70 active:scale-90" />
          </Link>
          <ul className="h-5 w-0.5 bg-slate-200" />
          <button
            className="group flex items-center justify-center gap-1 rounded-full text-xl duration-300 hover:scale-105 hover:bg-zinc-100 hover:text-blue-500 lg:p-1 lg:px-1.5"
            onClick={() => setContact(!contact)}
          >
            <IoSparkles className="rounded-xl duration-300 active:scale-90" />
            <p className="text-lg">Contact</p>
          </button>
        </ul>
      </motion.section>
    </ul>
  );
};

export default Socials;
