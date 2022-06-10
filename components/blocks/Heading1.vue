<template>
  <h1 v-if="!content.has_children">
    <Text
      v-for="(text, index) in content.heading_1.rich_text"
      :text="text"
      :key="'heading1' + index"
    />
  </h1>
  <section v-else>
    <h1>
      <Text
        v-for="(text, index) in content.heading_1.rich_text"
        :text="text"
        :key="'heading1' + index"
        />
    </h1>
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