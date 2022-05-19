import { Client } from "@notionhq/client";

const config = useRuntimeConfig();
const notion = new Client({ auth: config.NOTION_API });

async function searchNotion(searchQuery){
  const response = await notion.search({ 
    query: searchQuery
  });
  return response.results;
}

export default async (req) => {
  const search = await searchNotion(req.body.searchQuery);
  console.log(search)
  return search;
}