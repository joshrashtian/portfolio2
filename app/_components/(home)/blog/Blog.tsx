import { fetchBlogs } from "@/app/utils/notion";
import { forwardRef, useEffect, useMemo } from "react";

const Blog = forwardRef((props, ref: React.Ref<HTMLElement>) => {
  // Add a display name for the component
  Blog.displayName = "Blog";

  useEffect(() => {
    async function fetchBlog() {
      console.log(await fetchBlogs());
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
    </section>
  );
});

export default Blog;
