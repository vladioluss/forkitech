import {useMenuStore} from "@/stores/modules/menu";
import { ref, onMounted, onUnmounted } from 'vue';
import type {ICity} from "@/types/menuInterfaces";


export function menuItems(): object {
  // Работа со стором меню
  const menuStore = useMenuStore()

  // Получаем результат состояния
  onMounted(() => {
    menuStore.getCities()
  })

  let res = ref<ICity[]>(menuStore.cities)

  return res.value
}