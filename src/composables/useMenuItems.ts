import {useMenuStore} from "@/stores/modules/menu";
import { ref, onMounted, onUnmounted } from 'vue';
import type {IMenuItems} from "@/types/menuInterfaces";


// Вывод пунктов меню
export function menuItems(): object {
  // Работа со стором меню
  const menuStore = useMenuStore()

  // Получаем результат состояния
  menuStore.getItemsMenu()

  let res = ref<IMenuItems[]>(menuStore.itemsMenu)

  return res.value
}


// Текущий роутер, активная ссылка
// Проверка на текущий роут
export function isActive(route: any, link: string): boolean {
  return route.path === link
}