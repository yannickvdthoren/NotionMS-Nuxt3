<template>
  <label :for="checkId">
    <input :id="checkId" type="checkbox" v-model="content.checked" />
    <Text
      v-for="(text, index) in content.rich_text"
      :text="text"
      :key="'to_do' + index"
    />
  </label>
</template>
<script setup>
const checkId = Math.floor(Math.random() * 100000);

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>