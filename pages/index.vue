<template>
  <picture v-if="data.page.cover !== null">
    <img
      :src="
        data.page.cover.type === 'external'
          ? data.page.cover.external.url
          : data.page.cover.file.url
      "
      :alt="data.page.cover.caption"
    />
  </picture>
  <h1 v-if="data.page.properties.title">
    {{ data.page.properties.title.title[0].plain_text }}
  </h1>
  <BlocksBlock
    v-for="(block, index) in data.blocks"
    :key="index"
    :content="block"
  ></BlocksBlock>
</template>
<script setup>
const { data, pending, refresh } = await useAsyncData("page", () =>
  $fetch("/api/notion")
);
</script>