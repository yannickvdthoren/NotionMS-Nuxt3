<!-- To Do: try with a kinda similar slug: Full-articles -->
<template>
  <BlocksImageCover :cover="post.page.cover" v-if="post.page.cover !== null" />
  <h1>{{ post.page.properties.Name.title[0].plain_text }}</h1>
  <BlocksBlock
    v-for="(block, index) in post.blocks"
    :key="index"
    :content="block"
  />
</template>
<script setup>
const route = useRoute();

const { data } = await useAsyncData("data", () =>
  $fetch("/api/search", {
    body: {
      searchQuery: route.params.slug,
    },
  })
);

const { data: post, pending } = await useAsyncData("post", () =>
  $fetch("/api/page", {
    body: {
      pageId: data.value[0].id,
    },
  })
);
</script>