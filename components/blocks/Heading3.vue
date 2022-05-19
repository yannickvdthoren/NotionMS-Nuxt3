<template>
  <h3>
    <Text
      v-for="(text, index) in content"
      :text="text"
      :key="'heading3' + index"
    />
  </h3>
</template>
<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>