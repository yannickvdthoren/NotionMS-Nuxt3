<template>
  <div>
    <Text
      v-for="(text, index) in content.rich_text"
      :text="text"
      :key="'call_out' + index"
    />
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