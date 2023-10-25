<script setup lang="ts">
import {RouterView} from 'vue-router'
import {computed} from "vue";
import DesktopHeader from "@/components/app/header/desktop/DesktopHeader.vue";
import MobileHeader from "@/components/app/header/mobile/MobileHeader.vue";


// Все хедеры
const headers = {
  'desktop': DesktopHeader,
  'mobile': MobileHeader,
}

// Определяем размера устройства
const isMobile = (): boolean => window.innerWidth < 768

// Определение хедера в зависимости от размера устройства
const header = computed(() => {
  return isMobile() ? headers['mobile'] : headers['desktop']
})
</script>

<template>
  <component :is="header"/>
  <RouterView />
</template>

<style lang="scss">
</style>
