<template>
  <picture>
    <img
      :src="cover.type === 'external' ? cover.external.url : cover.file.url"
      :alt="cover.caption"
    />
  </picture>
</template>

<script setup>
const props = defineProps({
  cover: {
    type: Object,
    required: true,
  },
});
</script>