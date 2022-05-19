<template>
  <figure>
    <img
      :src="
        content.type === 'external' ? content.external.url : content.file.url
      "
      :alt="content.caption[0].plain_text"
    />
    <figcaption v-if="content.caption[0]">
      <Text
        v-for="(text, index) in content.caption"
        :text="text"
        :key="'caption' + index"
      />
    </figcaption>
  </figure>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>