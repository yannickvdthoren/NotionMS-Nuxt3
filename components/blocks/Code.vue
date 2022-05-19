<template>
  <code>
    <Text v-for="(text, index) in content" :text="text" :key="'code' + index" />
  </code>
</template>
<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>