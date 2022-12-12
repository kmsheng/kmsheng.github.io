<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
const classname = computed(() => ({
  'lang-switcher--reversed': locale.value === 'zh'
}))
</script>

<template>
  <nuxt-link
    class="lang-switcher z-10 transition-all duration-300"
    :class="classname"
    :to="localePath(locale === 'en' ? '/zh/' : '/')"
  >
    <IconLang />
  </nuxt-link>
</template>

<style lang="css" scoped>
.lang-switcher {
  transform: scaleX(-1);
}
.lang-switcher--reversed {
  transform: scaleX(1);
}
</style>
