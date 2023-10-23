import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type {ICity} from "@/types/menuInterfaces";


let arrCities = [
  {id: 1, text: 'Преимущества Теle2'},
  {id: 2, text: 'Тарифы'},
  {id: 3, text: 'Акции и спецпредложения'},
  {id: 4, text: 'Промотариф Tele2'},
  {id: 5, text: 'Технология eSIM'},
  {id: 6, text: 'Подключение нового абонента'},
]

export const useMenuStore = defineStore('menu', () => {
  const cities = ref<ICity[]>(arrCities)

  function getCities() {
    // count.value++
  }

  return {
    cities,
    getCities,
  }
})
