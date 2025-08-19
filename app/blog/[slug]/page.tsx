"use server";
import "./slug.css";
import { notion } from "@/app/utils/notion-client";
import { NotionRenderer } from "@notion-render/client";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import Image from "next/image";
import BlogPostHero from "@/app/_components/blog/BlogPostHero";

const Page = async ({ params }: { params: { slug: string } }) => {
  const info = await notion.pages.retrieve({
    page_id: params.slug,
  });

  const post = async () => {
    return await notion.blocks.children.list({
      block_id: params.slug,
    });
  };

  let content = await post();

  const contentRender = new NotionRenderer({
    client: notion,
  });

  let detail = await contentRender.render(
    ...(content.results as BlockObjectResponse[]),
  );

  let properties = (info as any).properties;

  // Check if hero image exists
  const hasHeroImage =
    properties.coverImage &&
    "files" in properties.coverImage &&
    properties.coverImage.files?.[0] &&
    "file" in properties.coverImage.files[0] &&
    properties.coverImage.files[0].file?.url;

  // Extract data for the hero component
  const title = properties.Name.title[0].plain_text;
  const publishedDate = new Date(
    properties.Published.date.start,
  ).toLocaleDateString();
  const tags = properties.tags.multi_select;
  const coverImageUrl = hasHeroImage
    ? properties.coverImage.files[0].file.url
    : "";

  return (
    <div className={`${hasHeroImage ? "" : "pt-24"}`}>
      {/* Parallax Hero Section */}
      {hasHeroImage && (
        <BlogPostHero
          title={title}
          publishedDate={publishedDate}
          tags={tags}
          coverImageUrl={coverImageUrl}
        />
      )}

      {/* Fallback cover image if no hero */}
      {!hasHeroImage && properties.coverImage.files[0] && (
        <div className="relative z-10 h-64 w-full">
          <Image
            src={properties.coverImage.files[0].file.url}
            fill
            objectFit="cover"
            alt="cover"
          />
        </div>
      )}

      {/* Main content */}
      <div className="z-50 rounded-t-2xl p-6 sm:p-8 lg:p-12 xl:p-16 2xl:p-24">
        {!hasHeroImage && (
          <h1 className="title mb-6 text-2xl font-bold lg:text-5xl">{title}</h1>
        )}

        {!hasHeroImage && (
          <ul className="mb-10 flex flex-col items-center justify-center gap-3 rounded-2xl bg-zinc-200/40 p-3 text-xl lg:flex-row lg:p-6">
            <h4 className="text-xl font-bold">Published {publishedDate}</h4>
            <ul className="h-1 w-20 rounded-full bg-zinc-300 lg:h-1.5 lg:w-1.5" />
            <ul className="flex flex-row flex-wrap items-center justify-center gap-2 text-sm">
              {tags.map((e: { name: string; id: string }) => (
                <p
                  key={e.id}
                  className="rounded-xs bg-zinc-200 p-1 px-4 text-base capitalize"
                >
                  {e.name}
                </p>
              ))}
            </ul>
          </ul>
        )}

        <div
          className="slug flex -translate-y-10 flex-col gap-2 rounded-t-2xl"
          dangerouslySetInnerHTML={{ __html: detail }}
        />
      </div>
    </div>
  );
};

export default Page;
