<script setup>
import { employments } from '@/consts/app'
const getCompanyText = item => item.remote ? `${item.company}, Remote` : item.company
</script>

<template>
  <div class="section">
    <h2 class="section-title">Employment</h2>
    <div v-for="item in employments" :key="item.id" class="my-2">
      <h3 class="font-semibold mb-1 title-square">{{ item.title }}</h3>
      <div class="border-l border-gray-300 pl-4">
        <div class="flex flex-col pl-1">
          <div class="text-xs">{{ getCompanyText(item) }}</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 lg:mt-1">{{ item.date }}</div>
        </div>
        <ul class="list-disc list-outside ml-4 mt-2 leading-6 dark:text-inherit">
          <li v-for="row in item.lines" :key="row.id" class="mb-1">{{ row.line }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
