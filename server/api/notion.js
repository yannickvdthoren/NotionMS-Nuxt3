import { Client } from "@notionhq/client";

const config = useRuntimeConfig();
const notion = new Client({ auth: config.NOTION_API });

let page;

async function getMainPage() {
  const response = await notion.pages.retrieve({ page_id: config.PAGE_ID });
  return response;
}

async function getBlocks(blockId){
  const response = await notion.blocks.children.list({ block_id: blockId, page_size: 50 });
  return response;
}

export default async (req) => {
  console.log(req)
  page = await getMainPage();
  const blocks = await getBlocks(page.id);
  return {page: page, blocks: blocks.results};
}