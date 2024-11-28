"use server";
import "./slug.css";
import { notion } from "@/app/utils/notion-client";
import { NotionRenderer } from "@notion-render/client";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import Image from "next/image";

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
  return (
    <div className={`min-h-screen p-10 pt-24 lg:p-24`}>
      {(info as any).properties.coverImage.files[0] && (
        <div className="relative h-64 w-full">
          <Image
            src={(info as any).properties.coverImage.files[0].file.url}
            fill
            objectFit="contain"
            alt="cover"
          />
        </div>
      )}
      <h1 className="title font-bold">
        {(info as any).properties.Name.title[0].plain_text}
      </h1>
      <ul className="mb-10 flex flex-col items-center justify-center gap-3 rounded-2xl bg-zinc-200/40 p-3 text-xl lg:flex-row lg:p-6">
        <h4 className="text-xl font-bold">
          Published {(info as any).properties.Published.date.start.toString()}
        </h4>
        <ul className="h-1 w-20 rounded-full bg-zinc-300 lg:h-1.5 lg:w-1.5" />
        <ul className="flex flex-row items-center gap-2 text-sm">
          {properties.tags.multi_select.map(
            (e: { name: string; id: string }) => (
              <p
                key={e.id}
                className="rounded-xs bg-zinc-200 p-1 px-4 text-base capitalize"
              >
                {e.name}
              </p>
            ),
          )}
        </ul>
      </ul>
      <div
        className="slug flex flex-col gap-2"
        dangerouslySetInnerHTML={{ __html: detail }}
      />
    </div>
  );
};

export default Page;
