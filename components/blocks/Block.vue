<template>
  <ul v-for="item in content" key="1">
    <li v-if="item !== null">
    {{item}}
    </li>
  </ul>
</template>

<script setup>
  const props = defineProps({
    content: {
      type: Object,
      required: true
    }
  })
</script>