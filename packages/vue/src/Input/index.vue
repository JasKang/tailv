<script setup lang="ts">
import { VNode, ref } from 'vue'
import { useControllableValue } from '../utils/useControllableValue'
import RingInput from '../Base/RingInput.vue'

defineOptions({ name: 'TInput' })
const emit = defineEmits<{
  'update:value': [string]
  change: [string]
  input: [Event]
  focus: [FocusEvent]
  blur: [FocusEvent]
}>()

const slots = defineSlots<{ prefix?(): VNode; suffix?(): VNode }>()

const props = defineProps({
  value: String,
  prefix: String,
  suffix: String,
  placeholder: String,
  readonly: Boolean,
  disabled: Boolean,
})

const [val, setVal] = useControllableValue(props, {
  onChange: (v: string) => {
    emit('change', v)
  },
})

const focused = ref(false)

const onInput = (e: Event) => {
  const el = e.currentTarget as HTMLInputElement
  setVal(el.value)
  emit('input', e)
}
const onFocus = (e: FocusEvent) => {
  if (props.disabled) {
    e.preventDefault()
    return false
  } else {
    focused.value = true
    emit('focus', e)
  }
}
const onBlur = (e: FocusEvent) => {
  if (props.disabled) {
    e.preventDefault()
    return false
  } else {
    focused.value = false
    emit('blur', e)
  }
}
</script>
<template>
  <RingInput :disabled="disabled">
    <span v-if="prefix || slots.prefix" class="z-input_prefix -mr-1 flex items-center pl-3">
      <template v-if="prefix">{{ prefix }}</template>
      <template v-else><slot name="prefix" /></template>
    </span>

    <input
      class="z-input_input disabled flex-1 border-none bg-transparent text-sm outline-none focus:outline-transparent"
      style="box-shadow: none"
      type="text"
      size="1"
      :value="val"
      :readonly="readonly"
      :disabled="disabled"
      :placeholder="placeholder"
      :onInput="onInput"
      :onFocus="onFocus"
      :onBlur="onBlur"
      autocomplete="off"
    />
    <span v-if="suffix || slots.suffix" class="z-input_suffix -ml-1 flex items-center pr-3">
      <template v-if="suffix">{{ suffix }}</template>
      <template v-else><slot name="suffix" /></template>
    </span>
  </RingInput>
</template>