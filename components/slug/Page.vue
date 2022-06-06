<template>
  <BlocksImageCover
      :cover="content.page.cover"
      v-if="content.page.cover !== null"
    />
    <h1 v-if="content.page.properties.Name">
      {{ content.page.properties.Name.title[0].plain_text }}
    </h1>
    <h1 v-else-if="content.page.properties.title">
      {{ content.page.properties.title.title[0].plain_text }}
    </h1>
    <BlocksBlock
      v-for="(block, index) in content.blocks"
      :key="index"
      :content="block"
    />
</template>
<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>