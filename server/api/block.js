import { Client } from "@notionhq/client";

const config = useRuntimeConfig();
const notion = new Client({ auth: config.NOTION_API });

async function getBlocks(blockId){
  const response = await notion.blocks.children.list({ block_id: blockId, page_size: 50 });
  return response.results;
}

export default async (req) => {
  const blocks = await getBlocks(req.body.blockId);
  return blocks;
}