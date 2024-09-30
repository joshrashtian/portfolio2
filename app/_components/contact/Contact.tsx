"use client";
import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.ul
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      exit={{ opacity: 0, scaleY: 0 }}
      transition={{
        duration: 0.5,
        type: "spring",
        delay: 0.1,
        bounce: 0.7,
      }}
      className="m-2 h-full w-full origin-bottom-right rounded-3xl bg-zinc-100/40 p-4"
    >
      <h1 className="text-xl font-bold">Contact Information</h1>
      <p>Manual Email: joshrashtian1@gmail.com</p>
      <p>Automatic Coming Soon</p>
    </motion.ul>
  );
};

export default Contact;
