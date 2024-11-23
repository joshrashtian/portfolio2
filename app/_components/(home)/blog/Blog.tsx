import { fetchBlogs } from "@/app/utils/notion";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";
import { forwardRef, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
import { useCardContext } from "@/app/contexts/CardContext";

const Blog = forwardRef((props, ref: React.Ref<HTMLElement>) => {
  // Add a display name for the component
  Blog.displayName = "Blog";

  const { hovered, CreateCard } = useCardContext();

  const [blog, setBlog] = useState<QueryDatabaseResponse>();
  useEffect(() => {
    async function fetchBlog() {
      let blogs = await fetchBlogs();
      setBlog(blogs);
    }
    fetchBlog();
  }, []);

  return (
    <motion.section
      ref={ref}
      className="flex h-screen min-h-fit flex-col bg-zinc-100 p-8 pb-24 xl:p-24 dark:bg-zinc-800/40"
    >
      <h1 className="drop-shadow-microglow mb-12 text-5xl font-bold lg:text-6xl">
        {"<"}
        <span className="text-green-700 dark:text-rose-500">Journal</span> {">"}
      </h1>
      <div className="flex flex-col gap-1">
        {blog?.results.map((blog: any, index: number) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5 * index,
              ease: "easeInOut",
            }}
            key={blog.id}
          >
            <Link
              href={`/blog/${blog.id}`}
              onMouseMove={(e) => hovered(e)}
              onMouseOver={() => CreateCard(blog.properties)}
              onMouseLeave={() => hovered(null)}
              className="drop-shadow-microglow flex flex-col rounded-3xl duration-300 hover:bg-zinc-200/30 active:scale-90 dark:hover:bg-transparent"
            >
              <h2 className="group flex -translate-x-12 flex-row p-4 text-4xl duration-300 hover:translate-x-3 hover:text-slate-500 dark:hover:text-rose-500">
                <IoArrowForward className="origin-left scale-0 duration-100 ease-linear group-hover:-translate-x-3 group-hover:scale-100" />{" "}
                {(blog as any).properties.Name.title[0].plain_text}
              </h2>
            </Link>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,

            ease: "easeInOut",
          }}
        >
          <Link
            href={`/blog`}
            className="flex flex-col rounded-3xl duration-300 hover:bg-zinc-200/30 active:scale-90 dark:hover:bg-zinc-800/10"
          >
            <h2 className="group flex -translate-x-12 flex-row p-4 text-4xl duration-300 hover:translate-x-3 hover:text-slate-500">
              <IoArrowForward className="origin-left scale-0 duration-100 ease-linear group-hover:-translate-x-3 group-hover:scale-100" />{" "}
              More Blog Posts
            </h2>
          </Link>
        </motion.div>
      </div>
      <h1 className="drop-shadow-microglow mt-12 text-5xl font-bold lg:text-6xl">
        {"</"}
        <span className="text-green-700 dark:text-rose-500">Journal</span> {">"}
      </h1>
    </motion.section>
  );
});

export default Blog;
