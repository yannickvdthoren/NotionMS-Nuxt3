import { Client } from "@notionhq/client";

const config = useRuntimeConfig();
const notion = new Client({ auth: config.NOTION_API });

async function getPage(pageId) {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
}

async function getBlocks(blockId){
  const response = await notion.blocks.children.list({ block_id: blockId });
  return response;
}

export default async (req) => {
  let page;
  if (req.body !== null){
    page = await getPage(req.body.pageId);
  } else {
    page = await getPage(config.PAGE_ID);
  }
  const blocks = await getBlocks(page.id);
  return {page: page, blocks: blocks.results};
}