# NotionMS-Nuxt3
 
 NotionMS is a frontend application build on top of [Nuxt 3](https://v3.nuxtjs.org/) and using [Notion](https://www.notion.so/) as a backend via it's api.

## Launch

1. Fork the project
2. In the terminal go to the folder and launch `npm i`
3. Launch `npm dev` to start your project

### Setup the .env

1. Go to [Notion for developers](https://developers.notion.com/) and creare a new integration.
2. Launch Notion and create a new page or database
3. Click on Share on the top left corner of Notion and in the invite box find your Notion integration
4. Toggle the "Share on web" option
5. Create a .env file at the root of your project
6. Copy and paste your Notion api key in it. 
    
    ```NOTION_API='jzfazkbfkazefb...'```
7. Copy the web link of your page/database in Notion and keep only the key at the end. 
   Exemple: In this link "https://cheddar-roll-998.notion.site/Nuxt-3-blog-bbe33534f06547fba8f81498528b0127" the key is: bbe33534f06547fba8f81498528b0127.
    
    ```PAGE_ID='mezrshgmajzg...'```
