<script setup lang="ts">
import Logo from "@/components/app/header/icons/Logo.vue";
import Bell from "@/components/app/header/Bell.vue";
import BurgerMenu from "@/components/app/header/icons/BurgerMenu.vue";
import {ref} from "vue";
import {isActive, menuItems} from "@/composables/useMenuItems";
import Close from "@/components/app/header/icons/Close.vue";
import {useRoute} from "vue-router";


const route = useRoute()

// Отрыто ли меню
const isOpen = ref<boolean>(false)
// Переключатель меню
const toglleMenu = () => {
  return isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="item">
    <div class="logo">
      <router-link :to="'/'"><Logo/></router-link>
    </div>
    <div class="right-menu">
      <Bell style="margin-right: 18px;"/>
      <BurgerMenu
          @click="toglleMenu"
          v-show="!isOpen"
      />
      <Close
          @click="toglleMenu"
          v-show="isOpen"
      />
    </div>
  </div>

  <nav v-show="isOpen">
    <ul>
      <li
          v-for="item in menuItems()"
          :key="item.id"
      >
        <router-link
            class="link"
            :to="item.link"
        >
          {{ item.label }}
        </router-link>
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

nav {
  display: flex;
  flex-direction: column;
  padding: 0;
  color: #959597;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
}

ul {
  padding-inline-start: 0;
  color: #959597;
  padding: 0 15px;
}

li {
  list-style-type: none;
  padding: 8px 0;
  border-bottom: 1px solid $gray-400-placeholder-color;
}

.link {
  font-weight: bold;
}
</style>