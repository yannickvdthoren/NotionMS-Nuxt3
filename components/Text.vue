<template>
  <TextsBold v-if="text.annotations.bold && text !== undefined">
    {{ text.plain_text }}
  </TextsBold>
  <TextsCode v-else-if="text.annotations.code && text !== undefined">
    {{ text.plain_text }}
  </TextsCode>
  <TextsItalic v-else-if="text.annotations.italic && text !== undefined">
    {{ text.plain_text }}
  </TextsItalic>
  <TextsStrike v-else-if="text.annotations.strikethrough && text !== undefined">
    {{ text.plain_text }}
  </TextsStrike>
  <TextsUnderline v-else-if="text.annotations.underline && text !== undefined">
    {{ text.plain_text }}
  </TextsUnderline>
  <TextsPlain v-else-if="text.href">
    <nuxt-link :to="text.href">
      {{ text.plain_text }}
    </nuxt-link>
  </TextsPlain>
  <TextsPlain v-else>
    {{ text.plain_text }}
  </TextsPlain>
</template>


<script setup>
const props = defineProps({
  text: {
    type: Object,
    required: true,
  },
});
</script>