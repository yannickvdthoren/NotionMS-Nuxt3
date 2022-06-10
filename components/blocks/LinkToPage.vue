<template>
  <a 
    :href="'./' + slugify(block.page.properties.title.title[0].plain_text).toLowerCase()"
  >
    {{ block.page.properties.title.title[0].plain_text}}
  </a>
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

const { data: block, pending } = await useFetch("/api/page", {
  body: {
    pageId: props.content.link_to_page.page_id,
  },
});
</script>