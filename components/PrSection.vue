<script setup>
import { provenItems } from '~/consts/app'
</script>

<template>
  <div class="section">
    <h2 class="section-title">Proven Records</h2>
    <div>
      <proven-record v-for="item in provenItems" :key="item.id" :item="item" />
    </div>
  </div>
</template>
