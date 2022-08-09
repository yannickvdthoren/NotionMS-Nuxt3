<template>
  <BlocksHeading1
    v-if="content.type === 'heading_1'"
    :content="content"
  />
  <BlocksHeading2
    v-else-if="content.type === 'heading_2'"
    :content="content"
  />
  <BlocksHeading3
    v-else-if="content.type === 'heading_3'"
    :content="content"
  />
  <BlocksParagraph
    v-else-if="content.type === 'paragraph'"
    :content="content.paragraph.rich_text"
  />
  <BlocksCode
    v-else-if="content.type === 'code'"
    :content="content.code.rich_text"
  />
  <BlocksQuote
    v-else-if="content.type === 'quote'"
    :content="content.quote.rich_text"
  />
  <BlocksListItem
    v-else-if="content.type === 'bulleted_list_item'"
    :content="content.bulleted_list_item.rich_text"
  />
  <BlocksListItem
    v-else-if="content.type === 'numbered_list_item'"
    :content="content.numbered_list_item.rich_text"
  />
  <BlocksCallOut
    v-else-if="content.type === 'callout'"
    :content="content.callout"
  />
  <BlocksToDo v-else-if="content.type === 'to_do'" :content="content.to_do" />
  <BlocksImage v-else-if="content.type === 'image'" :content="content.image" />
  <BlocksDetails v-else-if="content.type === 'toggle'" :content="content" />
  <BlocksTable v-else-if="content.type === 'table'" :content="content.table" />
  <BlocksDatabase
    v-else-if="content.type === 'child_database'"
    :content="content"
  />
  <BlocksChildPage
    v-else-if="content.type === 'child_page'"
    :content="content"
  />
  <BlocksLinkToPage
    v-else-if="content.type === 'link_to_page'"
    :content="content"
  />
  <BlocksColumnList
    v-else-if="content.type === 'column_list'"
    :content="content"
  />
  <BlocksColumn
    v-else-if="content.type === 'column'"
    :content="content"
  />
  <BlocksSyncedBlock
    v-else-if="content.type === 'synced_block'"
    :content="content"
  /> 
  <BlocksUnsupported v-else :content="content" />

</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>