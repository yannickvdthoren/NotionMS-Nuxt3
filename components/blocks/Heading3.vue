<template>
  <h3 v-if="!content.has_children">
    <Text
      v-for="(text, index) in content.heading_3.rich_text"
      :text="text"
      :key="'heading3' + index"
    />
  </h3>
  <section v-else>
    <h3>
      <Text
        v-for="(text, index) in content.heading_3.rich_text"
        :text="text"
        :key="'heading3' + index"
        />
    </h3>
    <BlocksBlock
      v-for="(block, index) in blocks"
      :key="index"
      :content="block"
      />
  </section>
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