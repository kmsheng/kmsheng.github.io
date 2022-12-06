<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
const [/*all*/, owner, name, /*type*/, /*num*/] = props.item.url.match(/https:\/\/github.com\/([^/]+)\/([^/]+)\/([^/]+)\/([^/]+)/)
</script>

<template>
  <div class="flex justify-between even:bg-slate-50 dark:even:bg-zinc-800 p-2 rounded">
    <div class="md:flex md:justify-between grow">
      <div class="md:basis-1/3 md:shrink-0">
        <a :href="item.url" target="_blank">{{ owner }} / {{ name }}</a>
        <div class="text-black dark:text-gray-400 text-xs">{{ item.date }}</div>
      </div>
      <div class="md:basis-2/3 font-medium text-gray-700 dark:text-inherit">{{ item.title }}</div>
    </div>
  </div>
</template>
