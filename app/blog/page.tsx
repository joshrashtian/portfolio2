"use server";
import React from "react";
import { fetchBlogsByNumber } from "../utils/notion";
import Image from "next/image";
import Link from "next/link";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const BlogPage = async () => {
  const res = await fetchBlogsByNumber(10);

  return (
    <main className="min-h-full p-10 pt-24 lg:p-24">
      <h1 className="mb-4 text-5xl font-bold">My Journal</h1>

      <Link href={`/video`}>
        <h2 className="mb-4 text-3xl font-bold">My Videos</h2>
      </Link>
      <ol className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        {res.results.map((blog) => {
          return (
            <Link
              href={`/blog/${blog.id}`}
              className="group relative flex h-48 flex-col justify-between rounded-3xl bg-zinc-100 ring-zinc-300 duration-300 hover:ring-2 dark:bg-zinc-700"
              key={blog.id}
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
                    />
                  )
                }
              </ul>
              <ul className="absolute bottom-0 max-h-16 w-full rounded-b-3xl p-3 duration-700 group-hover:h-fit group-hover:max-h-40 dark:group-hover:bg-black/50">
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
          );
        })}
      </ol>
    </main>
  );
};

export default BlogPage;
