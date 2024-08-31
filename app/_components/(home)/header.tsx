"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../assets/joshrashtian.png";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
      className="fixed top-0 flex h-20 w-full items-center bg-zinc-50 bg-zinc-800/40 p-3"
    >
      <Image
        src={Logo}
        className="invert dark:invert-0"
        alt="Logo"
        width={200}
        height={80}
      />
    </motion.header>
  );
};

export default Header;
