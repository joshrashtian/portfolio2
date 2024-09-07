"use client";
import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";

const Socials = () => {
  return (
    <ul className="fixed bottom-0 flex w-full items-center justify-center">
      <motion.section
        initial={{ y: 70, opacity: 0 }}
        animate={{ y: -30, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2, type: "spring" }}
        className="flex h-[56px] w-fit -translate-y-10 flex-row items-center justify-center gap-2 place-self-center rounded-3xl border-2 bg-white px-10 shadow-xl"
      >
        <Link
          className="flex items-center justify-center rounded-md p-0.5 text-3xl duration-300 hover:scale-125 hover:shadow-lg"
          href="https://github.com/joshrashtian"
        >
          <IoLogoGithub />
        </Link>
        <Link
          className="flex items-center justify-center rounded-md p-0.5 text-3xl duration-300 hover:scale-125 hover:shadow-lg"
          href="https://www.linkedin.com/in/joshrashtian/"
        >
          <IoLogoLinkedin className="duration-300 hover:text-blue-500" />
        </Link>
      </motion.section>
    </ul>
  );
};

export default Socials;
