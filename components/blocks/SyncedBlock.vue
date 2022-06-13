<template>
  <BlocksBlock
      v-for="(block, index) in blocks"
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

const { data: blocks, pending } = await useFetch("/api/blocks", {
  body: {
    blockId: props.content.id,
  },
});
</script>