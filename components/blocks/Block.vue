<template>
  <BlocksParagraph v-if="content.type === 'paragraph'" :content="content" />
  <!-- {{ content.paragraph.rich_text }} -->
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>