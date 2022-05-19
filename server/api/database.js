import { Client } from "@notionhq/client";

const config = useRuntimeConfig();
const notion = new Client({ auth: config.NOTION_API });

async function getDatabase(databaseId) {
  const response = await notion.databases.query({ 
    database_id: databaseId, 
    sort: [{
      property: "created_time",
      direction: "ascending"
    }]
  });
  return response.results;
}

export default async (req) => {
  const database = await getDatabase(req.body.databaseId);
  return database;
}