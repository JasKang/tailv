<script setup lang="ts">
import { type PropType } from 'vue'

defineOptions({ name: 'RingInput' })

const borderMap = {
  default: 'ring-slate-300',
  success: 'ring-success-500',
  warning: 'ring-warning-500',
  danger: 'ring-danger-500',
}
const focusBorderMap = {
  default: 'focus-within:ring-primary-500',
  success: 'focus-within:ring-success-500',
  warning: 'focus-within:ring-warning-500',
  danger: 'focus-within:ring-danger-500',
}

const focusedBorderMap = {
  default: 'data-[focused=true]:ring-primary-500',
  success: 'data-[focused=true]:ring-success-500',
  warning: 'data-[focused=true]:ring-warning-500',
  danger: 'data-[focused=true]:ring-danger-500',
}

const props = defineProps({
  status: {
    type: String as PropType<'default' | 'success' | 'warning' | 'danger'>,
    default: 'default',
  },
  disabled: Boolean,
  focused: Boolean,
})
</script>
<template>
  <div
    :disabled="disabled"
    :data-focused="focused"
    :class="[
      `z-ring-input flex items-center rounded-md text-sm ring-1 shadow-sm transition-all  ring-inset
      focus-within:z-10 focus-within:ring-2 
      data-[focused=true]:z-10 data-[focused=true]:ring-2 
      ${focusedBorderMap[status]} 
      ${focusBorderMap[status]}`,
      props.disabled
        ? 'cursor-not-allowed bg-slate-50 text-slate-500 opacity-50 ring-slate-300'
        : `cursor-pointer [:where(&)]:bg-white ${borderMap[status]}`,
    ]"
  >
    <slot />
  </div>
</template>
