<template>
  <h2>
    <Text
      v-for="(text, index) in content"
      :text="text"
      :key="'heading2' + index"
    />
  </h2>
</template>
<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>