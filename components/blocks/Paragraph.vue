<template>
  <p>
    <Text
      v-for="(text, index) in content"
      :text="text"
      :key="'paragraph' + index"
    />
  </p>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>