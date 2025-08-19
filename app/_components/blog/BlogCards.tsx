"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface BlogCardsProps {
  blogs: PageObjectResponse[];
}

const BlogCards = ({ blogs }: BlogCardsProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link href={`/video`}>
          <h2 className="mb-4 text-3xl font-bold transition-colors hover:text-purple-600">
            My Videos
          </h2>
        </Link>
      </motion.div>

      <motion.ol
        className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {blogs.map((blog, index) => {
          return (
            <motion.li
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <Link
                href={`/blog/${blog.id}`}
                className="group relative flex h-48 flex-col justify-between overflow-hidden rounded-3xl bg-zinc-100 ring-zinc-300 duration-300 hover:scale-[1.02] hover:ring-2 dark:bg-zinc-700"
              >
                <ul className="relative h-32 w-full">
                  {
                    //@ts-ignore
                    blog.properties.coverImage.files[0] && (
                      <Image
                        objectFit="cover"
                        src={
                          //@ts-ignore
                          blog.properties.coverImage.files[0].file.url
                        }
                        alt="object"
                        fill
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    )
                  }
                </ul>
                <ul className="absolute bottom-0 max-h-16 w-full rounded-b-3xl bg-white/90 p-3 duration-700 group-hover:h-fit group-hover:max-h-40 dark:bg-zinc-800/90 dark:group-hover:bg-black/50">
                  <h3 className="font-bold">
                    {
                      //@ts-ignore
                      blog.properties.Name.title[0].plain_text
                    }
                  </h3>
                  <p className="translate-y-5 text-xs opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {
                      //@ts-ignore
                      blog.properties.Published.date.start.toString()
                    }{" "}
                    <span className="dark:text-slate-300">
                      {
                        //@ts-ignore
                        blog.properties.tags.multi_select
                          .splice(0, 3)
                          .map((e: { name: string; id: string }) =>
                            e.name.toUpperCase(),
                          )
                          .join(", ")
                      }
                    </span>
                  </p>
                </ul>
              </Link>
            </motion.li>
          );
        })}
      </motion.ol>
    </>
  );
};

export default BlogCards;
