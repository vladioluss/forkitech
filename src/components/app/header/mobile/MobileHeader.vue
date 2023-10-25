<script setup lang="ts">

import Logo from "@/components/app/header/icons/Logo.vue";
import Bell from "@/components/app/header/Bell.vue";
import BurgerMenu from "@/components/app/header/icons/BurgerMenu.vue";
import {ref} from "vue";
import {useRoute} from "vue-router";
import {menuItems} from "@/composables/useMenuItems";


const route = useRoute()

// Раскрытие меню
const isOpen = ref<boolean>(false)
</script>

<template>
  <div class="item">
    <div class="logo">
      <router-link :to="'/'"><Logo/></router-link>
    </div>
    <div class="right-menu">
      <Bell style="margin-right: 18px;"/>
      <BurgerMenu @click="isOpen = true"/>
    </div>
  </div>

  <nav v-show="isOpen">
    <ul>
      <li
          v-for="item in menuItems()"
          :key="item.id"
      >
        <router-link :to="item.link">{{ item.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.item {
  display: flex;
  width: 100%;
  height: 45px;
  justify-content: space-between;
  align-items: center;
  background-color: $black-general-color;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding: 0 18px;
}

.right-menu {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>