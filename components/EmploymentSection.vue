<script setup>
import { useI18n } from 'vue-i18n'
import { employments } from '@/consts/app'
const { t } = useI18n()
const getCompanyText = item => item.remote ?
  t('remote', { company: item.company }) :
  item.company
</script>

<template>
  <div class="section">
    <h2 class="section-title">{{ $t('employment') }}</h2>
    <div v-for="item in employments" :key="item.id" class="my-2">
      <h3 class="font-semibold mb-1 title-square">{{ $t(item.title) }}</h3>
      <div class="border-l border-gray-300 pl-4">
        <div class="flex flex-col pl-1">
          <div class="text-xs">{{ getCompanyText(item) }}</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 lg:mt-1">{{ item.date }}</div>
        </div>
        <ul class="list-disc list-outside ml-4 mt-2 leading-6 dark:text-inherit">
          <li v-for="row in item.lines" :key="row.id" class="mb-1">{{ $t(row.line) }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
