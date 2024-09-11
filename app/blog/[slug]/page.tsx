"use server";
import "./slug.css";
import { notion } from "@/app/utils/notion-client";
import { NotionRenderer } from "@notion-render/client";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { useRouter } from "next/navigation";

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
    <div className="min-h-screen p-24">
      <h1>{(info as any).properties.Name.title[0].plain_text}</h1>
      <ul className="flex flex-row gap-3 rounded-2xl bg-zinc-200/40 p-1 px-5 text-xl">
        <h4>
          Published {(info as any).properties.Published.date.start.toString()} |{" "}
        </h4>
        <ul className="flex flex-row items-center gap-2 text-sm">
          {properties.tags.multi_select.map(
            (e: { name: string; id: string }) => (
              <p key={e.id} className="rounded-sm bg-zinc-200 px-2 text-base">
                {e.name.toUpperCase()}
              </p>
            ),
          )}
        </ul>
      </ul>
      <div dangerouslySetInnerHTML={{ __html: detail }} />
    </div>
  );
};

export default Page;
