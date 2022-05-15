<template>
  <h1>Articles</h1>
</template>
<script setup>
const { data, pending, refresh } = await useAsyncData("page", () =>
  $fetch("/api/notion", {
    params: {
      pageId: "78f9a4ae857d48b0b4b02351b6926606",
    },
  })
);
</script>