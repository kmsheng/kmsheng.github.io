<script setup>
import loadAssets from '~/utils/loadAssets'
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
const { src } = props.item
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
      :src="imageData['1x']"
      :srcset="srcset"
    />
    <div class="md:pl-5 pt-2 md:pt-0">
      <h3 class="font-bold text-2xl">{{ item.title }}</h3>
      <div class="whitespace-pre-wrap mt-2 mb-3">{{ item.desc }}</div>
      <div class="text-xs mb-1">Tech: {{ item.tech }}</div>
      <div class="text-xs text-gray-500">{{ item.date }}</div>
      <a v-if="item.url" class="mt-1 inline-block" :href="item.url" target="_blank">View Site</a>
    </div>
  </div>
</template>
