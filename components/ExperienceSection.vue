<script setup>
import { expItems } from '~/consts/app'
</script>

<template>
  <div class="flex flex-col lg:flex-row lg:justify-between">
    <div class="section basis-1/2">
      <h2 class="section-title">{{ $t('experience') }}</h2>
      <div>
        <exp-row v-for="item in expItems" :key="item.lang" :item="item" />
      </div>
    </div>
    <div class="basis-1/2 lg:ml-10">
      <div class="section">
        <h2 class="section-title">{{ $t('education') }}</h2>
        <h3 class="font-semibold mb-1 title-square dark:text-[#ddd]">{{ $t('major') }}</h3>
        <div class="border-l border-gray-300 pl-4">
          <div class="text-xs">{{ $t('university') }}</div>
          <div class="text-xs text-gray-500">2008 - 2010</div>
        </div>
      </div>
      <div class="section">
        <h2 class="section-title dark:text-[#ddd]">{{ $t('location') }}</h2>
        <h3 class="font-semibold mb-1 title-square">{{ $t('kaohsiung-taiwan') }}</h3>
      </div>
    </div>
  </div>
</template>
