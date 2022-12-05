<script setup>
import Theme from '~/models/Theme'
onBeforeMount(() => Theme.init())
</script>

<template>
  <div class="text-[#555] bg-white dark:text-[#e6e7ef] dark:bg-[#282a2f] transition-colors duration-300">
    <AppHeader />
  </div>
</template>
