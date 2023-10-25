<script setup lang="ts">
import {ref} from "vue";
import {ICity} from "@/types/menuInterfaces";
import Logo from "@/components/app/header/icons/Logo.vue";
import CitySelectIcon from "@/components/app/header/icons/CitySelectIcon.vue";
import Bell from "@/components/app/header/Bell.vue";


const selectedCity = ref<ICity>({id: 0, label: "", link: ""})
const cities = ref<ICity[]>([])
</script>

<template>
  <div class="item">
    <div class="logo">
      <router-link :to="'/'"><Logo/></router-link>
    </div>

    <div class="right-block">
      <div class="city-selector">
        <CitySelectIcon/>
        <span>Москва и область</span>
      </div>
      <div>
        <Bell/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item {
  display: flex;
  width: 100%;
  height: 40px;
  padding: 10px 160px 10px 160px;
  justify-content: space-between;
  align-items: center;
  background-color: $black-general-color;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
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
</style>