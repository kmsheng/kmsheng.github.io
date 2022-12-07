<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useThrottleFn } from '@vueuse/core'
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
const visible = ref(false)
const setVisibleClass = useThrottleFn(() => {
  visible.value = (document.documentElement.scrollTop > (window.innerHeight * 4))
}, 100)

onMounted(() => {
  setVisibleClass()
  window.addEventListener('scroll', setVisibleClass, false)
})
onBeforeUnmount(() => window.removeEventListener('scroll', setVisibleClass, false))
</script>

<template>
  <Transition name="pop">
    <a
      v-if="visible"
      class="scroll-to-top-btn cursor-pointer fixed block right-4 bottom-20 md:right-10 md:bottom-20 text-white tex-3xl bg-black/60 backdrop-blur-sm w-10 h-10 text-center leading-10 rounded-lg"
      @click.prevent="scrollToTop"
    />
  </Transition>
</template>

<style lang="css" scoped>
.pop-enter-active,
.pop-leave-active {
  transition: all .3s ease-in-out;
}
.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: scale(0);
}
.scroll-to-top-btn:before {
  position: absolute;
  top: 6px;
  left: 12px;
  display: block;
  content: ' ';
  width: 8px;
  height: 8px;
  border-top: 8px solid transparent;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid white;
}
</style>
