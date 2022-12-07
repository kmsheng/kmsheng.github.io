<script setup>
import { head } from '~/consts/app'
import { useHead } from '@vueuse/head'
import Theme from '~/models/Theme'
import registerServiceWorker from '~/utils/registerServiceWorker'
onBeforeMount(() => {
  registerServiceWorker()
  Theme.init()
})

useHead(head)

</script>

<template>
  <div class="text-[#262d3d] bg-[#f7f7f8] dark:text-[#d0d0d0] dark:bg-[#000] transition-colors duration-300 app-bg">
    <AppHeader />

    <div class="container ml-auto mr-auto px-4 bg-white py-12 px-6 md:px-10 dark:bg-[#111]/70">
      <AppHero />
      <LinkSection />
      <EmploymentSection />
      <ExperienceSection />
      <PrSection />
      <PortfolioSection />
      <AppEnding />
    </div>

    <footer class="block container ml-auto mr-auto text-center pt-6 pb-10 text-sm">
      <a href="https://github.com/kmsheng/kmsheng.github.io">https://github.com/kmsheng/kmsheng.github.io</a>
    </footer>
    <ScrollToTopBtn />
  </div>
</template>

<style lang="css">
[data-theme=dark] .app-bg {
  background: radial-gradient(ellipse at top, #000, #222),
    radial-gradient(ellipse at bottom, #000, #222);
}
</style>
