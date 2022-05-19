<template>
  <li>
    <Text
      v-for="(text, index) in content"
      :text="text"
      :key="'list_item' + index"
    />
  </li>
</template>
<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>