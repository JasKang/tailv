<script setup lang="ts">
import { useModelValue } from '@/use/useModelValue'
import { computed, inject } from 'vue'
import { RadioGroupInjectKey } from './types'

defineOptions({ name: 'TRadio' })
const emit = defineEmits<{ 'update:checked': [boolean]; change: [boolean] }>()
const props = defineProps({
  value: { type: null, required: true },
  name: String,
  disabled: Boolean,
  checked: { type: Boolean, default: undefined },
})

const group = inject(RadioGroupInjectKey, null)
console.log(parent)

const [innerChecked, setInnerChecked] = useModelValue(props, {
  defaultValue: group ? group.value.value === props.value : false,
  valuePropName: 'checked',
  onChange: (val: boolean) => {
    emit('change', val)
    group?.select(props.value)
  },
})
const checked = computed(() => (group ? group.value.value === props.value : innerChecked.value))

const onInput = (e: Event) => {
  const el = e.currentTarget as HTMLInputElement
  console.log(el.checked)
  setInnerChecked(el.checked)
}
</script>
<template>
  <label :class="['relative inline-flex items-center', disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer']">
    <input
      class="form-input h-4 w-4 rounded-full border-gray-300 text-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      :style="{ boxShadow: 'none', cursor: 'inherit' }"
      type="radio"
      :name="name"
      :disabled="disabled"
      :checked="checked"
      :onInput="onInput"
    />
    <template v-if="$slots.default">
      <span class="relative ml-2 text-sm font-medium">
        <slot />
      </span>
    </template>
  </label>
</template>