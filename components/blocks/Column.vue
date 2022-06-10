<template>
  <div>
    <BlocksBlock
        v-for="(block, index) in blocks"
        :key="index"
        :content="block"
      />
  </div>
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