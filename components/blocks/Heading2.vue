<template>
  <h2 v-if="!content.has_children">
    <Text
      v-for="(text, index) in content.heading_2.rich_text"
      :text="text"
      :key="'heading2' + index"
    />
  </h2>
  <section v-else>
    <h2>
      <Text
        v-for="(text, index) in content.heading_2.rich_text"
        :text="text"
        :key="'heading2' + index"
        />
    </h2>
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