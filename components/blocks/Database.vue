<template>
  <ul>
    <li v-for="(item, index) in database" :key="'post-' + index">
      <a  :href=" '/' + item.properties.slug.formula.string.toLowerCase()">
        <BlocksImageCover :cover="item.cover" v-if="item.cover !== null" />
        <h3>{{item.properties.Name.title[0].plain_text}}</h3>
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
