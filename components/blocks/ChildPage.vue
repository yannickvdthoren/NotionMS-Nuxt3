<template>
  <a :href="'/' + content.id">{{ content.child_page.title }}</a>
</template>
<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>