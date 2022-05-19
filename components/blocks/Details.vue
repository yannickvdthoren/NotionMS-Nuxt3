<template>
  <details>
    <summary>
      <Text
        v-for="(text, index) in content.toggle.rich_text"
        :text="text"
        :key="'details' + index"
      />
    </summary>
    <BlocksBlock
      v-for="(block, index) in blocks"
      :key="index"
      :content="block"
    />
  </details>
</template>
<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});

const { data: blocks, pending } = await useFetch("/api/block", {
  body: {
    blockId: props.content.id,
  },
});
</script>