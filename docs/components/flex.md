<style lang="scss"> 
:where(.mdp-demo__preview) {
  h4{
    @apply text-xl font-semibold text-slate-700;
  }
  > :where(.t-flex){
    background-color: #818cf81a;
    background-image: linear-gradient(135deg,#6366f180 10%,#0000 0,#0000 50%,#6366f180 0,#6366f180 60%,#0000 0,#0000);
    background-size: 7.07px 7.07px;
    @apply text-white text-sm font-bold font-mono leading-6 rounded-lg;
  }   
  :where(.t-flex-item){
    @apply py-4 flex items-center justify-center bg-indigo-500 shadow-lg rounded-lg;
  }
}
</style>

用于控制弹性项目如何增长和收缩的实用程序。

```vue preview
<template>
  <TFlex gap="1rem">
    <TFlexItem class="w-14 bg-indigo-300">w-14</TFlexItem>
    <TFlexItem flex="1" class="">1</TFlexItem>
    <TFlexItem flex="1" class="">1</TFlexItem>
  </TFlex>
</template>
```

```vue preview
<template>
  <TFlex gap="1rem">
    <TFlexItem class="w-14 bg-indigo-300">w-14</TFlexItem>
    <TFlexItem flex="1" class="">1</TFlexItem>
    <TFlexItem flex="1" class="">1</TFlexItem>
  </TFlex>
</template>
```

## align 间距

align 值为 `start` | `end` | `center` | `baseline` | `stretch`

```vue preview
<template>
  <h4>start</h4>
  <TFlex align="start" gap="1rem">
    <TFlexItem flex="1" class="py-4">01</TFlexItem>
    <TFlexItem flex="1" class="py-12">02</TFlexItem>
    <TFlexItem flex="1" class="py-8">03</TFlexItem>
  </TFlex>
  <h4>end</h4>
  <TFlex align="end" gap="1rem">
    <TFlexItem flex="1" class="py-4">01</TFlexItem>
    <TFlexItem flex="1" class="py-12">02</TFlexItem>
    <TFlexItem flex="1" class="py-8">03</TFlexItem>
  </TFlex>
  <h4>center</h4>
  <TFlex align="center" gap="1rem">
    <TFlexItem flex="1" class="py-4">01</TFlexItem>
    <TFlexItem flex="1" class="py-12">02</TFlexItem>
    <TFlexItem flex="1" class="py-8">03</TFlexItem>
  </TFlex>
  <h4>baseline</h4>
  <TFlex align="baseline" gap="1rem">
    <TFlexItem flex="1" class="pb-6 pt-2">01</TFlexItem>
    <TFlexItem flex="1" class="pb-12 pt-8">02</TFlexItem>
    <TFlexItem flex="1" class="pb-4 pt-12">03</TFlexItem>
  </TFlex>
  <h4>stretch</h4>
  <TFlex align="stretch" gap="1rem">
    <TFlexItem flex="1" class="py-4">01</TFlexItem>
    <TFlexItem flex="1" class="py-12">02</TFlexItem>
    <TFlexItem flex="1" class="py-8">03</TFlexItem>
  </TFlex>
</template>
```

## gap 间距

gap

```vue preview
<script setup>
import { ref } from 'vue'

const gap = ref('1rem')
</script>
<template>
  <div class="mb-4 space-x-4">
    <TRadioGroup v-model:value="gap">
      <TRadio value="4">1rem</TRadio>
      <TRadio value="4rem">4rem</TRadio>
      <TRadio value="4vw">10vw</TRadio>
      <TRadio value="100px">100px</TRadio>
    </TRadioGroup>
  </div>
  <TFlex :gap="gap">
    <TFlexItem flex="100px">100px</TFlexItem>
    <TFlexItem flex="1">flex 1</TFlexItem>
    <TFlexItem flex="1">flex 1</TFlexItem>
    <TFlexItem flex="100px">100px</TFlexItem>
  </TFlex>
</template>
```