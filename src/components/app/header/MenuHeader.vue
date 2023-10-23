<script setup lang="ts">
import {ref} from "vue";


const menuItems = ref()
</script>

<template>
  <div class="wrapper__item">
    <nav class="menu">
      <ul>
        <li
            v-for="item in menuItems"
            :key="item.id"
        >
          <router-link :to="item.link">{{ item.label }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">

</style>