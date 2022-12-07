<script setup>
import { toRefs } from 'vue'
import loadAssets from '~/utils/loadAssets'
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
const { item } = toRefs(props)
const { src } = item.value
const imageData = {
  '1x': loadAssets(`images/${src}.jpg`),
  '2x': loadAssets(`images/${src}@2x.jpg`),
  '3x': loadAssets(`images/${src}@3x.jpg`)
}
const srcset = Object.keys(imageData)
  .map((k, i) => {
    const key = `${i + 1}x`
    return imageData[key] + ' ' + key
  })
  .join(',')
</script>

<template>
  <div class="md:flex">
    <img
      class="rounded"
      loading="lazy"
      :alt="item.alt"
      :src="imageData['1x']"
      :srcset="srcset"
    >
    <div class="md:pl-5 pt-2 md:pt-0">
      <h3 class="font-bold text-2xl">{{ item.title }}</h3>
      <div class="whitespace-pre-wrap mt-2 mb-3">{{ item.desc }}</div>
      <div class="flex flex-wrap items-start max-w-lg">
        <span
          v-for="tech in item.techs"
          class="rounded bg-gray-100 dark:bg-zinc-800 py-1 px-2 text-xs mr-2 mb-2 inline-block whitespace-nowrap"
        >{{ tech }}</span>
      </div>
      <div v-if="item.date" class="text-xs text-gray-500 dark:text-gray-400">{{ item.date }}</div>
      <a v-if="item.url" class="mt-1 inline-block" :href="item.url" target="_blank">View Site</a>
    </div>
  </div>
</template>
