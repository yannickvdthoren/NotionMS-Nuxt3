<template>
  <SlugPage v-if="type === 'page'" :content="page" />
  <SlugDatabase v-else-if="type === 'database'" :content="page" />
</template>
<script setup>
const route = useRoute();

const { data } = await useAsyncData("data", () =>
  $fetch("/api/search", {
    body: {
      searchQuery: route.params.slug,
    },
  })
);

let page;
let type;

if (data.value[0].object === "page") {
  const { data: post, pending } = await useAsyncData("post", () =>
    $fetch("/api/page", {
      body: {
        pageId: data.value[0].id,
      },
    })
  );
  page = post;
  type = "page";
} else if (data.value[0].object === "database") {
  const { data: database, pending } = await useAsyncData("database", () =>
    $fetch("/api/database", {
      body: {
        databaseId: data.value[0].id,
      },
    })
  );
  page = database;
  type = "database";
} else {
  console.log("Error: Unknown object type: " + data.value[0].object);
}
</script>