<!-- To do: Get content from table and create the table with the right amount of columns and rows -->
<template>
  <table>
    <tr>
      <td>{{ content }}</td>
    </tr>
  </table>
</template>
<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>