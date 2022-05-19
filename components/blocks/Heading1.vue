<template>
  <h1>
    <Text
      v-for="(text, index) in content"
      :text="text"
      :key="'heading1' + index"
    />
  </h1>
</template>
<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>