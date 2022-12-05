<script setup>
import { expItems, provenItems } from '~/consts/app'
import Theme from '~/models/Theme'
onBeforeMount(() => Theme.init())
</script>

<template>
  <div class="text-[#262d3d] bg-[#f7f7f8] dark:text-[#e6e7ef] dark:bg-[#000] transition-colors duration-300">
    <AppHeader />

    <div class="container md:mt-10 ml-auto mr-auto px-4 bg-white py-2 px-6 md:px-10 dark:bg-[#282a2f]">
      <h1 class="text-5xl font-semibold text-center mt-10 mb-8 dark:text-white">Dax Sheng</h1>
      <p class="text-center text-lg">Craft solid and scalable frontend products with great user experiences.</p>

      <employment-section />

      <div class="flex flex-col lg:flex-row lg:justify-between">
        <div class="section basis-1/2">
          <h2 class="section-title">Experience</h2>
          <div>
            <exp-row v-for="item in expItems" :key="item.lang" :item="item" />
          </div>
        </div>
        <div class="basis-1/2 lg:ml-10">
          <div class="section">
            <h2 class="section-title">Education</h2>
            <h3 class="font-semibold mb-1 title-square dark:text-[#ddd]">Bachelor of Computer Science and Information Engineering</h3>
            <div class="border-l border-gray-300 pl-4">
              <div class="text-xs">Shu-Te University, Kaohsiung, Taiwan</div>
              <div class="text-xs text-gray-500">2008 - 2010</div>
            </div>
          </div>
          <div class="section">
            <h2 class="section-title dark:text-[#ddd]">Location</h2>
            <h3 class="font-semibold mb-1 title-square">Kaohsiung, Taiwan</h3>
          </div>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">Proven Records</h2>
        <div>
          <proven-record v-for="item in provenItems" :key="item.id" :item="item" />
        </div>
      </div>

    </div>
  </div>
</template>
