"use client";
import React from "react";
import { Tilt } from "react-tilt";
import Image from "next/image";
import { useVideoContext } from "./VideoContext";
const VideoComponent = ({ item }: { item: any }) => {
  const { setVideo } = useVideoContext();
  const { medium } = item.snippet.thumbnails;
  return (
    <button
      onClick={() => {
        setVideo(item);
      }}
      key={item.id}
    >
      <Tilt
        options={{
          reverse: false,
          max: 10,
          perspective: 1000,
          scale: 1,
          transition: true,
          reset: true,
          easing: "cubic-bezier(.03,.98,.52,.99)",
        }}
        className="group flex h-64 w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl border-2 border-zinc-200 bg-white drop-shadow-lg dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
      >
        <Image
          src={medium.url}
          alt={item.snippet.title}
          width={medium.width}
          height={medium.height}
        />
        <h2
          style={{
            width: medium.width - 20,
          }}
          className="text-center text-sm font-bold"
        >
          {item.snippet.title}
        </h2>
        <p className="text-center text-xs text-wrap">
          {item.snippet.description}
        </p>
      </Tilt>
    </button>
  );
};

export default VideoComponent;
