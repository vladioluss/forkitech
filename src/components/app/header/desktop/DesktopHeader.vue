<script setup lang="ts">
import {isActive, menuItems} from "@/composables/useMenuItems";
import Logo from "@/components/app/header/icons/Logo.vue";
import CitySelectIcon from "@/components/app/header/icons/CitySelectIcon.vue";
import Bell from "@/components/app/header/Bell.vue";
import {ref} from "vue";
import {ICity} from "@/types/menuInterfaces";
import {useRoute} from "vue-router";


const route = useRoute()

// Выбор города
const selectedCity = ref<ICity>({id: 1, label: "Москва и область"})
const cities = ref<ICity[]>([])
</script>

<template>
  <header>
      <div class="item">
        <div class="item-top">
          <div class="logo">
            <router-link :to="'/'">
              <Logo/>
            </router-link>
          </div>
          <div class="right-block">
            <div class="city-selector">
              <CitySelectIcon/>
              <span>{{ selectedCity.label }}</span>
            </div>
            <div>
              <Bell/>
            </div>
          </div>
        </div>
      </div>

      <nav class="menu">
        <ul>
          <li
              v-for="item in menuItems()"
              :key="item.id"
              :class="{ 'active': isActive(route, item.link) }"
          >
            <router-link :to="item.link">{{ item.label }}</router-link>
          </li>
        </ul>
      </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
}

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

.item {
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  background-color: $black-general-color;

  &-top {
    display: flex;
    width: 100%;
    padding: 10px 160px 10px 160px;
    justify-content: space-between;
    align-items: center;
  }
}

.logo {
  cursor: pointer;
}

.city-selector {
  display: flex;
  flex-direction: row;
  gap: 10px;
  cursor: pointer;
  align-items: center;
  color: $gray-400-placeholder-color;
}

.right-block {
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: center;
}

.item-top {
}
</style>