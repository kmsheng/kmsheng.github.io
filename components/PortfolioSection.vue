<script setup>
import { portfolioItems } from '~/consts/app'
</script>

<template>
  <div class="section">
    <h2 class="section-title">Portfolio</h2>
    <div>
      <portfolio-item
        v-for="item in portfolioItems"
        :key="item.id"
        class="mt-4 mb-8"
        :item="item"
      />
    </div>
  </div>
</template>
