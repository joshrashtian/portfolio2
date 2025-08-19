"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface BlogPostHeroProps {
  title: string;
  publishedDate: string;
  tags: Array<{ name: string; id: string }>;
  coverImageUrl: string;
}

const BlogPostHero = ({
  title,
  publishedDate,
  tags,
  coverImageUrl,
}: BlogPostHeroProps) => {
  // Parallax scroll effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <motion.div
      className="relative z-10 h-[60vh] min-h-[400px] w-full overflow-hidden"
      style={{ y, opacity }}
    >
      <Image
        src={coverImageUrl}
        alt="Blog Post Hero"
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
              {title}
            </h1>
            <div className="text-white/90">
              <p className="mb-3 text-sm opacity-80 sm:text-base">
                Published {publishedDate}
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm sm:text-sm"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostHero;
