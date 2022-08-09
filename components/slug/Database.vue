<!-- To Do: Check why article send to database -->
<template>
  <h1>All articles</h1>
  <ul>
    <li v-for="(item, index) in content" :key="'page-'+ index">
      <a :href="'/' + item.properties.slug.formula.string.toLowerCase()">
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
</script>