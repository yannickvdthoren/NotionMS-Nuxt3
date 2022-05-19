<template>
  <nav>
    <ul>
      <li v-for="(block, index) in blocks" :key="'navItem-' + index">
        <!-- To Do: Get slug instead of id -->
        <a :href="getSlug" v-if="block.paragraph.rich_text.length > 0">
          {{ block.paragraph.rich_text[0].plain_text }}
        </a>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import slugify from "slugify";
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

const getSlug = computed((block) => {
  console.log(block);
});
</script>