<template>
  <blockquote>
    <Text
      v-for="(text, index) in content"
      :text="text"
      :key="'blockquote' + index"
    />
  </blockquote>
</template>
<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>