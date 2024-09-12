import { fetchBlogs } from "@/app/utils/notion";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";
import { forwardRef, useEffect, useMemo, useState } from "react";

const Blog = forwardRef((props, ref: React.Ref<HTMLElement>) => {
  // Add a display name for the component
  Blog.displayName = "Blog";

  const [blog, setBlog] = useState<QueryDatabaseResponse>();
  useEffect(() => {
    async function fetchBlog() {
      let blogs = await fetchBlogs();
      console.log(blogs);
      setBlog(blogs);
    }
    fetchBlog();
  }, []);
  return (
    <section
      ref={ref}
      className="flex h-screen flex-col bg-zinc-100 p-24 dark:bg-zinc-800/40"
    >
      <h1 className="text-5xl font-bold lg:text-6xl">
        {"<"}
        <span className="dark:text-green-500">Journal</span> {" />"}
      </h1>
      {blog?.results.map((blog: any) => (
        <Link
          href={`/blog/${blog.id}`}
          key={blog.id}
          className="my-4 flex flex-col rounded-3xl duration-300 hover:bg-zinc-200/60"
        >
          <h2 className="p-4 text-4xl font-bold duration-300 hover:translate-x-3 hover:text-slate-500">
            {(blog as any).properties.Name.title[0].plain_text}
          </h2>
        </Link>
      ))}
    </section>
  );
});

export default Blog;
