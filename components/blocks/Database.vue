<template>
  <ul>
    <li v-for="(item, index) in database" :key="'post-' + index">
      <a :href="'/' + item.id">
        <BlocksImageCover :cover="item.cover" v-if="item.cover !== null" />
        <BlocksHeading3 :content="item.properties.Name.title" />
        <BlocksParagraph :content="item.properties.Description.rich_text" />
      </a>
    </li>
  </ul>
</template>
<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});

const { data: database, pending } = await useFetch("/api/database", {
  body: {
    databaseId: props.content.id,
  },
});
</script>
