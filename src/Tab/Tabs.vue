<script setup lang="ts">
import { ref, computed, type PropType } from 'vue'

defineOptions({ name: 'Tabs' })
const emit = defineEmits<{ change: [key: string] }>()
const slots = defineSlots<{ default?(props: { current: string }): any }>()
const props = defineProps({
  current: { type: String, default: '' },
  items: {
    type: Array as PropType<
      {
        key: string
        label: string
      }[]
    >,
    default: () => [],
  },
  type: { type: String as PropType<'underline' | 'card'>, default: 'card' },
})

const keys = computed(() => props.items.map(item => item.key))

const currentKey = ref(keys.value.includes(props.current) ? props.current : keys.value[0])

const clickHandler = (key: string) => {
  if (currentKey.value !== key) {
    currentKey.value = key
    emit('change', key)
  }
}
</script>
<template>
  <!-- <nav v-if="type === 'line'" class="flex gap-x-2">
    <button
      v-for="item in props.items"
      type="button"
      role="tab"
      :data-state="currentKey === item.key ? 'active' : ''"
      class="inline-flex items-center gap-x-2 whitespace-nowrap border-b-2 border-t-2 border-b-transparent border-t-transparent px-1 py-2 text-sm text-default-500 hover:text-primary-500 focus:text-primary-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active=true]:border-b-primary-500 data-[active=true]:font-semibold data-[active=true]:text-primary-500 dark:text-default-400 dark:data-[active=true]:text-primary-500"
      tabindex="-1"
      @click="clickHandler(item.key)"
    >
      {{ item.label }}
    </button>
  </nav> -->
  <nav
    class="grid h-9 w-full items-center justify-center rounded-lg bg-default-100 p-1 text-default-500"
    :style="{ gridTemplateColumns: `repeat(${keys.length}, minmax(0, 1fr))` }"
  >
    <button
      v-for="item in props.items"
      type="button"
      role="tab"
      :data-active="currentKey === item.key"
      class="relative inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 data-[active=true]:bg-background data-[active=true]:text-foreground data-[active=true]:shadow dark:data-[active=true]:bg-default"
      tabindex="-1"
      @click="clickHandler(item.key)"
    >
      {{ item.label }}
    </button>
  </nav>
</template>
