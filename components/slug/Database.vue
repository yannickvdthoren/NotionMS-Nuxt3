<template>
  <h1>All articles</h1>
  <ul>
    <li v-for="(item, index) in content">
      <a :href="'/' + item.properties.slug.formula.string.toLowerCase()">
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
</script>