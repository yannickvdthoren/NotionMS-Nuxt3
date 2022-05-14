<template>
  <!-- <h1 v-if="data.properties.title">{{data.title.title[0].text.content}}</h1> -->
  {{data.page.properties}}
  <BlocksBlock v-for="(block, index) in data" :key="index" :content="block"></BlocksBlock>
</template>
<script setup>
const {data, pending, refresh} = await useAsyncData('page', () => $fetch('/api/notion'))
</script>