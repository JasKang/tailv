<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { IndentList } from '../Base'
import type { IAnchorItem } from './types'
import { getAnchorOffset } from './utils'

defineOptions({ name: 'Anchor' })
const emit = defineEmits<{ change: [item: IAnchorItem, deep: number] }>()
const props = defineProps({
  current: String,
  items: {
    type: Array as PropType<IAnchorItem[]>,
    default: () => [],
  },
})

const selectHandler = (item: IAnchorItem, deep: number) => {
  emit('change', item, deep)
}

const inkOffset = computed(() => {
  const offset = getAnchorOffset(props.items, props.current)
  return offset >= 0 ? `calc(${offset} * 1.75rem)` : ''
})
</script>
<template>
  <div class="relative">
    <IndentList class="border-line border-l-2 text-sm leading-6" :items :current>
      <template #item="{ item, deep }">
        <div
          class="group cursor-pointer py-1"
          :style="{ paddingLeft: deep + 1 + 'rem' }"
          @click="selectHandler(item, deep)"
        >
          <a
            class="hover:text-foreground-dark data-[active=true]:text-primary block text-sm no-underline data-[active=true]:font-medium"
            :data-active="current === item.id"
            :href="item.link"
            :target="item.target"
          >
            {{ item.title || item.id }}
          </a>
        </div>
      </template>
    </IndentList>
    <div
      v-if="inkOffset"
      class="bg-primary absolute top-1 left-0 h-5 w-[2px] translate-y-[--ink-offset] rounded-sm transition-all"
      :style="{ '--ink-offset': inkOffset }"
    ></div>
  </div>
</template>
