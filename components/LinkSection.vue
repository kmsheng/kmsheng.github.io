<script setup>
import { linkItems } from '~/consts/app'
const iconClass = 'w-10 h-10 text-black dark:text-white'
</script>

<template>
  <div class="lg:flex lg:justify-between mt-10">
    <a
      v-for="(item, i) in linkItems"
      class="flex items-center p-4 shadow-sm shadow-slate-400 hover:bg-gray-100 hover:shadow-sm dark:hover:bg-black lg:basis-1/3 mb-4 lg:mb-0 rounded transition-all duration-300"
      :class="i > 0 ? 'lg:ml-4' : ''"
      :key="item.id"
      :href="item.href"
      target="_blank">
      <IconGithub v-if="item.icon === 'github'" :class="iconClass" />
      <IconLinkedIn v-if="item.icon === 'linkedin'" :class="iconClass" />
      <IconGoogleDrive v-if="item.icon === 'googleDrive'"  :class="iconClass" />
      <div class="ml-3">
        <div class="text-black dark:text-white text-lg font-semibold">{{ item.text }}</div>
        <div class="text-xs">{{ item.href }}</div>
      </div>
    </a>
  </div>
</template>
