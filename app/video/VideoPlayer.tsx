"use client";
import React from "react";
import { useVideoContext } from "./VideoContext";
import { IoClose, IoLogoYoutube, IoPlay } from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";

const VideoPlayer = () => {
  const { video, setVideo } = useVideoContext();
  if (!video) return null;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mb-5 flex h-full w-full origin-bottom flex-col items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-900 dark:text-white"
    >
      <iframe
        src={`https://www.youtube.com/embed/${video?.snippet?.resourceId?.videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        width="70%"
        height="600"
        className="rounded-3xl"
      />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center gap-2 p-5"
      >
        <h1 className="text-2xl font-bold">{video?.snippet?.title}</h1>
        {
          //@ts-ignore
          video?.snippet?.description && (
            <p className="text-sm">{video?.snippet?.description}</p>
          )
        }
      </motion.div>
      <div className="flex w-full flex-row items-center justify-center gap-2 p-5">
        <button
          onClick={() => {
            setVideo(null);
          }}
          className="flex flex-row items-center justify-center gap-2 rounded-full bg-zinc-200 p-2 px-5 text-3xl duration-300 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600"
        >
          <IoClose />
          <p>Close</p>
        </button>
        <Link
          href={`https://www.youtube.com/watch?v=${video?.snippet?.resourceId?.videoId}`}
          target="_blank"
          className="flex flex-row items-center justify-center gap-2 rounded-full bg-zinc-200 p-2 px-5 text-3xl duration-300 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600"
        >
          <IoLogoYoutube />
          <p>Watch on Youtube</p>
        </Link>
      </div>
    </motion.div>
  );
};

export default VideoPlayer;
