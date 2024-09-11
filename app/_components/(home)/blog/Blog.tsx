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
      <h1 className="text-6xl font-bold">
        {"<"}
        <span className="dark:text-green-500">Blog</span> {" />"}
      </h1>
      {blog?.results.map((blog) => (
        <Link
          href={`/blog/${blog.id}`}
          key={blog.id}
          className="my-4 flex flex-col"
        >
          <h2 className="text-4xl font-bold duration-300 hover:text-slate-500">
            {(blog as any).properties.Name.title[0].plain_text}
          </h2>
        </Link>
      ))}
    </section>
  );
});

export default Blog;
