<script setup>
import loadAssets from '~/utils/loadAssets'
import { portfolioItems } from '~/consts/app'
</script>

<template>
  <div class="section">
    <h2 class="section-title">Portfolio</h2>
    <div>
      <portfolio-item
        v-for="(item, i) in portfolioItems"
        :key="item.id"
        class="my-8"
        :item="item"
      />
    </div>
  </div>
</template>
