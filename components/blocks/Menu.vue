<template>
  <nav>
    <ul>
      <li v-for="(block, index) in blocks" :key="'navItem-' + index">
        <a
          v-if="block.type === 'child_page'"
          :href="route.path + '/' + slugify(block.child_page.title).toLowerCase()"
        >
          {{ block.child_page.title }}
        </a>
        <a
          v-else
        >
          <BlocksLinkToPage :content="block" />
        </a>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import slugify from "slugify";
const route = useRoute();

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