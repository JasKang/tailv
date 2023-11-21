import {
  defineComponent,
  type ComponentObjectPropsOptions,
  type ExtractPublicPropTypes,
  ref,
  type SlotsType,
  type VNode,
} from 'vue'
import { useControllableValue } from '../utils/useControllableValue'

const props = {
  value: String,
  prefix: String,
  suffix: String,
  placeholder: String,
  readonly: Boolean,
  disabled: Boolean,
} satisfies ComponentObjectPropsOptions

export type InputProps = ExtractPublicPropTypes<typeof props>

export const Input = defineComponent({
  name: 'ZInput',
  props,
  emits: {
    'update:value': (val: string) => true,
    change: (val: string) => true,
    input: (e: Event) => true,
    focus: (e: FocusEvent) => true,
    blur: (e: FocusEvent) => true,
  },
  slots: Object as SlotsType<{
    default?: () => VNode
    dropdown?: () => VNode
    prefix?: () => VNode
    suffix?: () => VNode
  }>,
  setup(props, { slots, emit }) {
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

    return () => (
      <div
        aria-disabled={props.disabled}
        class={[
          'z-input focus-within:ring-primary-500 flex items-center rounded-md text-sm shadow-sm ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-inset',
          'aria-disabled:cursor-not-allowed aria-disabled:bg-gray-50 aria-disabled:text-gray-500 aria-disabled:ring-gray-200',
        ]}
      >
        {(slots.prefix || props.prefix) && (
          <span class="z-input_prefix -mr-1 flex items-center pl-3">{slots.prefix?.() || props.prefix}</span>
        )}

        <input
          class="z-input_input flex-1 border-none bg-transparent text-sm focus:outline-transparent disabled:cursor-not-allowed"
          style={{
            boxShadow: 'none',
          }}
          type="text"
          size="1"
          value={val.value}
          readonly={props.readonly}
          disabled={props.disabled}
          placeholder={props.placeholder}
          autocomplete="off"
          onInput={onInput}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {(slots.suffix || props.suffix) && (
          <span class="z-input_suffix  -ml-1 flex items-center pr-3">{slots.suffix?.() || props.suffix}</span>
        )}
      </div>
    )
  },
})
