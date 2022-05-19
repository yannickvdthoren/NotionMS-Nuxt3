<template>
  <BlocksImageCover :cover="post.page.cover" v-if="post.page.cover !== null" />
  <BlocksHeading1 :content="post.page.properties.Name.title" />
  <BlocksBlock
    v-for="(block, index) in post.blocks"
    :key="index"
    :content="block"
  />
</template>
<script setup>
import slugify from "slugify";
const route = useRoute();
const router = useRouter();

const { data: post, pending } = await useAsyncData("post", () =>
  $fetch("/api/page", {
    body: {
      pageId: route.params.id,
    },
  })
);
const slug = slugify(post.value.page.properties.Name.title[0].plain_text);
router.path = "/" + slug;
console.log(slug);

useHead({
  title: post.value.page.properties.Name.title[0].plain_text,
});
</script>