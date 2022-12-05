<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="flex justify-between even:bg-slate-50 dark:even:bg-[#262626] p-2 rounded">
    <div>{{ item.lang }}</div>
    <div>{{ item.year }} years</div>
  </div>
</template>
