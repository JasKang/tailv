<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button, RadioGroup, Radio, RadioCard, Switch } from '@/index'
import { InboxIcon } from '@heroicons/vue/24/outline'

import type { ColorAlias } from '@/utils/theme'
defineOptions({ name: 'ButtonBooth' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()

const a = ref('')
// a = 'sadf'
// pill: Boolean,
//   square: Boolean,
//   block: Boolean,
//   loading: Boolean,
//   disabled: Boolean,

const variant = ref<'outline' | 'solid' | 'soft' | 'text' | 'link'>('outline')
const size = ref<'sm' | 'md' | 'lg'>('md')
const color = ref<'primary' | 'success' | 'warning' | 'danger' | 'none'>('none')
const pill = ref(false)
const square = ref(false)
const block = ref(false)
const loading = ref(false)
const disabled = ref(false)
</script>
<template>
  <div class="flex w-full flex-col rounded-md border md:flex-row-reverse">
    <div class="flex-1 space-y-4 border-l p-6">
      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">variant:</div>
        <RadioGroup v-model:value="variant" class="grid flex-1 grid-cols-3 gap-2">
          <RadioCard value="outline" class="col-span-1">outline</RadioCard>
          <RadioCard value="solid" class="col-span-1">solid</RadioCard>
          <RadioCard value="soft" class="col-span-1">soft</RadioCard>
          <RadioCard value="text" class="col-span-1">text</RadioCard>
          <RadioCard value="link" class="col-span-1">link</RadioCard>
        </RadioGroup>
      </div>

      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">size:</div>
        <RadioGroup v-model:value="size" class="grid flex-1 grid-cols-3 gap-2">
          <RadioCard value="sm">sm</RadioCard>
          <RadioCard value="md">md</RadioCard>
          <RadioCard value="lg">lg</RadioCard>
        </RadioGroup>
      </div>
      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">color:</div>
        <RadioGroup v-model:value="color" class="grid flex-1 grid-cols-3 gap-2">
          <RadioCard value="primary">primary</RadioCard>
          <RadioCard value="success">success</RadioCard>
          <RadioCard value="warning">warning</RadioCard>
          <RadioCard value="danger">danger</RadioCard>
          <RadioCard value="none">none</RadioCard>
        </RadioGroup>
      </div>

      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">pill:</div>
        <div class="grid flex-1 grid-cols-3 py-1.5">
          <Switch v-model:value="pill"></Switch>
        </div>
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">square:</div>
        <div class="grid flex-1 grid-cols-3 py-1.5">
          <Switch v-model:value="square"></Switch>
        </div>
      </div>
      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">block:</div>
        <div class="grid flex-1 grid-cols-3 py-1.5">
          <Switch v-model:value="block"></Switch>
        </div>
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">loading:</div>
        <div class="grid flex-1 grid-cols-3 py-1.5">
          <Switch v-model:value="loading"></Switch>
        </div>
      </div>
      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">disabled:</div>
        <div class="grid flex-1 grid-cols-3 py-1.5">
          <Switch v-model:value="disabled"></Switch>
        </div>
      </div>
    </div>
    <div class="flex flex-1 items-center justify-center p-6">
      <Button :variant :size :color :pill :square :block :loading :disabled>
        <InboxIcon v-if="square" class="h-[1.2em] w-[1.2em]" />
        <template v-else>Button</template>
      </Button>
    </div>
  </div>
</template>
