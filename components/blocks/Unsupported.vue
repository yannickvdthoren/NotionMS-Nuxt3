<template>
  <div>
    <span>Unsupported block type: {{ content.type }}</span>
  </div>
</template>
<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>