<script setup lang="ts">
import { ref, computed, type PropType } from 'vue'
import { isDividerItem, isTitleItem, isRawItem, type MenuItemType, type MenuItemRawType } from './types'
import MenuItem from './MenuItem.vue'

defineOptions({ name: 'Menu' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  title: String,
  current: String,
  items: {
    type: Array as PropType<MenuItemType[]>,
    default: () => [],
  },
})

const isCurrent = (item: MenuItemRawType) => {
  return item.key === props.current
}
</script>
<template>
  <nav class="grid gap-1 p-1">
    <template v-for="item in items">
      <div v-if="isDividerItem(item)" class="menu__divider h-[1px] w-full shrink-0 bg-border" />
      <div v-if="isTitleItem(item)" class="menu__title px-3 text-xs font-medium leading-6 text-default-400">
        {{ item.label }}
      </div>
      <MenuItem class="menu__item" v-if="isRawItem(item)" :item="item" :current="current" />
    </template>
  </nav>
</template>
