<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
const [, owner, name, type, num] = props.item.url.match(/https:\/\/github.com\/([^\/]+)\/([^\/]+)\/([^\/]+)\/([^\/]+)/)
</script>

<template>
  <div class="flex justify-between even:bg-slate-50 p-2 rounded">
    <div>
      <a :href="item.url" target="_blank">{{ owner }} / {{ name }}</a>
      <div class="text-black text-sm">{{ item.date }}</div>
      <div class="mt-1">{{ item.title }}</div>
    </div>
  </div>
</template>
