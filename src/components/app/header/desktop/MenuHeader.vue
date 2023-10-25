<script setup lang="ts">
import {useRoute} from "vue-router";
import {menuItems} from "@/composables/useMenuItems";


const route = useRoute()

// Текущий роутер
function isActive(link: string): boolean {
  return route.path === link
}
</script>

<template>
  <nav class="menu">
    <ul>
      <li
          v-for="item in menuItems()"
          :key="item.id"
          :class="{ 'active': isActive(item.link) }"
      >
        <router-link :to="item.link">{{ item.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.menu {
  background-color: white;
  padding: 0 160px 0 160px;
  height: 47px;
}

ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 18px;
  color: $gray-400-placeholder-color;
  font-size: 14px;
  height: 100%;
}

li {
  list-style-type: none;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;

  &:hover {
    color: $black-general-color;
  }
}

.active {
  border-bottom: 2px solid $black-general-color;
  color: $black-general-color;
}
</style>