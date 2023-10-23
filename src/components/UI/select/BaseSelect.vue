<script setup lang="ts">
import {PropType, ref} from "vue";
import {ICity} from "@/types/menuInterfaces";


const modelValue = ref<ICity>({id: 0, label: ""})

defineEmits(['update:modelValue'])
defineProps({
  items: {
    type: Object as PropType<ICity>,
    default: () => [],
  },
})
</script>

<template>
  <select v-model="modelValue">
    <option
        v-for="(item, inx) in items"
        :key="item.id || inx"
        :value="item"
        @input="$emit('update:modelValue', item)"
    >
      <slot name="option">{{ item }}</slot>
    </option>
  </select>
</template>

<style scoped lang="scss">
//#1F2229

</style>