import { ref} from 'vue'
import { defineStore } from 'pinia'
import type {IMenuItems} from "@/types/menuInterfaces";


let arrCities: IMenuItems[] = [
  {id: 1, link: '/advantages', label: 'Преимущества Теle2'},
  {id: 2, link: '/tariffs', label: 'Тарифы'},
  {id: 3, link: '/shares', label: 'Акции и спецпредложения'},
  {id: 4, link: '/promo', label: 'Промотариф Tele2'},
  {id: 5, link: '/tech', label: 'Технология eSIM'},
  {id: 6, link: '/new', label: 'Подключение нового абонента'},
]

export const useMenuStore = defineStore('menu', () => {
  const itemsMenu = ref<IMenuItems[]>(arrCities)

  function getItemsMenu() {
    return itemsMenu.value
  }

  return {
    itemsMenu,
    getItemsMenu,
  }
})
