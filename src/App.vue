<script setup lang="ts">
import {RouterView, useRoute} from 'vue-router'
import {computed} from "vue";
import TheHeader from "@/components/app/header/desktop/DesktopHeader.vue";
import MobileHeader from "@/components/app/header/mobile/MobileHeader.vue";


// Все хедеры
const headers = {
  'desktop': TheHeader,
  'mobile': MobileHeader,
}

// Определяем устройство
const isMobile = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

// Определение хедера в зависимости от типа устройства
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
