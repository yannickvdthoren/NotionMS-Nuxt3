<template>
  <a :href=" route.path + '/' + slugify(content.child_page.title).toLowerCase()">{{ content.child_page.title }}</a>
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
</script>