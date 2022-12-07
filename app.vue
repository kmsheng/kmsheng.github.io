<script setup>
import ogImage from '~/assets/images/ogImage.png'
import { useHead } from '@vueuse/head'
import Theme from '~/models/Theme'
onBeforeMount(() => Theme.init())

const title = 'kmsheng\'s portfolio'
const desc = 'Craft solid and scalable frontend products with great user experiences.'

useHead({
  title,
  htmlAttrs: {
    lang: 'en'
  },
  meta: [{
    name: 'description',
    content: desc
  }, {
    name: 'og:image',
    content: ogImage
  }, {
    name: 'og:title',
    content: 'kmsheng\'s portfolio'
  }, {
    name: 'og:description',
    content: desc
  }, {
    name: 'msapplication-TileColor',
    content: '#ffffff'
  }, {
    name: 'msapplication-TileImage',
    content: '/ms-icon-144x144.png'
  }, {
    name: 'theme-color',
    content: '#ffffff'
  }],
  link: [
    { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
    { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
    { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
    { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
    { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
    { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
    { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
    { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/manifest.json' }
  ]
})
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
