"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoChatbubble, IoMailUnread } from "react-icons/io5";
import { SubmitEmail } from "./action";
import { Email } from "../emailtemplate";

const Contact = () => {
  const [email, setEmail] = useState<Email | any>({
    email: null,
    message: null,
    subject: null,
  });

  return (
    <motion.ul
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1 }}
      exit={{ opacity: 0, scaleY: 0 }}
      transition={{
        duration: 0.3,
        opacity: { duration: 0.5 },
        ease: "easeInOut",
      }}
      className="m-2 h-full w-full origin-bottom-right rounded-3xl bg-zinc-100/40 p-5"
    >
      <h1 className="text-xl font-bold">Contact Information</h1>
      <p className="flex flex-row items-center gap-2 text-xl font-semibold">
        <IoMailUnread />
        joshrashtian1@gmail.com
      </p>
      <ul className="my-3" />

      <h2 className="flex flex-row items-center gap-2 text-xl font-semibold">
        <IoChatbubble />
        Quick Email
      </h2>
      <form
        className="flex flex-col gap-2"
        onSubmit={async () => {
          if (!email.email || !email.message || !email.subject) return;
          let res = await SubmitEmail({ ...email });

          console.log(res);
        }}
      >
        <input
          className="h-8 w-full rounded-md bg-zinc-100 p-2 duration-1000 focus:text-purple-500 dark:bg-zinc-500 dark:text-white focus:dark:text-pink-300"
          placeholder="Subject..."
          type="text"
          onChange={(e) => setEmail({ ...email, subject: e.target.value })}
          required
        />
        <input
          className="h-8 w-full rounded-md bg-zinc-100 p-2 duration-1000 focus:text-purple-500 dark:bg-zinc-500 dark:text-white focus:dark:text-pink-300"
          placeholder="Email..."
          type="email"
          onChange={(e) => setEmail({ ...email, email: e.target.value })}
          required
        />
        <textarea
          className="h-20 w-full resize-none overflow-y-scroll rounded-md bg-zinc-100 p-2 duration-1000 focus:text-purple-500 dark:bg-zinc-500 dark:text-white focus:dark:text-pink-300"
          placeholder="Message..."
          required
          onChange={(e) => setEmail({ ...email, message: e.target.value })}
        />
        <button
          type="submit"
          className="rounded-md bg-blue-400 p-2 text-white duration-300 hover:scale-105 hover:bg-blue-500"
        >
          Submit
        </button>
      </form>
    </motion.ul>
  );
};

export default Contact;
