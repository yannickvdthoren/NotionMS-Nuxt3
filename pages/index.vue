<template>
  <BlocksImageCover :cover="page.page.cover" v-if="page.page.cover !== null" />
  <h1>{{ page.page.properties.title.title }}</h1>
  <BlocksBlock
    v-for="(block, index) in page.blocks"
    :key="index"
    :content="block"
  />
</template>
<script setup>
const { data: page, pending } = await useAsyncData("page", () =>
  $fetch("/api/page")
);
</script>