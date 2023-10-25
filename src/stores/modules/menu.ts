import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type {ICity} from "@/types/menuInterfaces";


let arrCities: ICity[] = [
  {id: 1, link: '/advantages', label: 'Преимущества Теle2'},
  {id: 2, link: '/tariffs', label: 'Тарифы'},
  {id: 3, link: '/shares', label: 'Акции и спецпредложения'},
  {id: 4, link: '/promo', label: 'Промотариф Tele2'},
  {id: 5, link: '/tech', label: 'Технология eSIM'},
  {id: 6, link: '/new', label: 'Подключение нового абонента'},
]

export const useMenuStore = defineStore('menu', () => {
  const cities = ref<ICity[]>(arrCities)

  function getCities() {
    return cities.value
  }

  return {
    cities,
    getCities,
  }
})
