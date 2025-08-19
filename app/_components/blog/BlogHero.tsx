"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface BlogHeroProps {
  heroBlog: PageObjectResponse;
}

const BlogHero = ({ heroBlog }: BlogHeroProps) => {
  // Parallax scroll effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  // Get the hero image
  const heroImage =
    heroBlog?.properties.coverImage &&
    "files" in heroBlog.properties.coverImage &&
    heroBlog.properties.coverImage.files?.[0] &&
    "file" in heroBlog.properties.coverImage.files[0] &&
    heroBlog.properties.coverImage.files[0].file?.url;

  if (!heroImage) return null;

  return (
    <motion.div
      className="relative h-[60vh] min-h-[400px] w-full overflow-hidden"
      style={{ y, opacity }}
    >
      <Image
        src={heroImage}
        alt="Blog Hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex items-end">
        <div className="w-full p-6 sm:p-8 lg:p-12 xl:p-16 2xl:p-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="mb-4 text-4xl font-bold text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
              My Journal
            </h1>
            <div className="text-white/90">
              <h2 className="mb-2 text-xl font-semibold drop-shadow-md sm:text-2xl">
                {"title" in heroBlog.properties.Name &&
                  heroBlog.properties.Name.title[0]?.plain_text}
              </h2>
              <p className="text-sm opacity-80 sm:text-base">
                {"date" in heroBlog.properties.Published &&
                  heroBlog.properties.Published.date?.start &&
                  new Date(
                    heroBlog.properties.Published.date.start,
                  ).toLocaleDateString()}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogHero;
