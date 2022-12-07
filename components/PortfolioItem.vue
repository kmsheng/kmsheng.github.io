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

const imageSet = ['jpg', 'webp', 'avif']
  .reduce((obj, ext) => {
    obj[ext] = [
      loadAssets(`images/${src}.${ext}`),
      loadAssets(`images/${src}@2x.${ext}`),
      loadAssets(`images/${src}@3x.${ext}`)
    ].map((path, i) => `${path} ${i}x`).join(', ')
    return obj
  }, {})

</script>

<template>
  <div class="md:flex">
    <picture>
      <source type="image/avif" :srcset="imageSet['avif']">
      <source type="image/webp" :srcset="imageSet['webp']">
      <img
        class="portfolio-item__img rounded"
        loading="lazy"
        :alt="item.alt"
        :src="src"
        :srcset="imageSet['jpg']"
      >
    </picture>
    <div class="md:pl-5 pt-2 md:pt-0">
      <h3 class="font-bold text-2xl">{{ item.title }}</h3>
      <div class="whitespace-pre-wrap mt-2 mb-3">{{ item.desc }}</div>
      <div class="flex flex-wrap items-start max-w-lg">
        <span
          v-for="tech in item.techs"
          :key="tech"
          class="rounded bg-gray-100 dark:bg-zinc-800 py-1 px-2 text-xs mr-2 mb-2 inline-block whitespace-nowrap"
        >{{ tech }}</span>
      </div>
      <div v-if="item.date" class="text-xs text-gray-500 dark:text-gray-400">{{ item.date }}</div>
      <a v-if="item.url" class="mt-1 inline-block" :href="item.url" target="_blank">View Site</a>
    </div>
  </div>
</template>

<style lang="css" scoped>
.portfolio-item__img {
  width: 368px;
  height: 304px;
}
</style>
