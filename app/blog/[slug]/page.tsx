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

  return (
    <div className="min-h-screen p-24">
      <h1>{(info as any).properties.Name.title[0].plain_text}</h1>
      <div dangerouslySetInnerHTML={{ __html: detail }} />
    </div>
  );
};

export default Page;
