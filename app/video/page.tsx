"use server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tilt } from "react-tilt";
import VideoComponent from "./VideoComponent";
import VideoProvider from "./VideoContext";
import VideoPlayer from "./VideoPlayer";
import { AnimatePresence } from "framer-motion";
const YoutubeVideoPage = async () => {
  const youtubeShortsRes = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLeoZ2cqnQMIbUPwIw2qwPYiU2wc7dE-32&key=${process.env.YOUTUBE_API_KEY}`,
  );
  const youtubeShortsData = await youtubeShortsRes.json();

  return (
    <VideoProvider>
      <div className="min-h-screen p-10 pt-24 lg:p-24">
        <AnimatePresence>
          <VideoPlayer />
        </AnimatePresence>
        <p>{youtubeShortsData.items.length} Videos</p>
        <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {youtubeShortsData.items.map((item: any) => {
            return <VideoComponent item={item} key={item.id} />;
          })}
        </ol>
      </div>
    </VideoProvider>
  );
};

export default YoutubeVideoPage;
