<script setup>
import { Input,SpaceCompact ,Select,Button} from 'tailv'
</script>

# Input

## default

<div class="flex flex-wrap gap-2">
  <Input  class="w-full"/>
</div>

## status

<div class="flex flex-wrap gap-2"> 
  <Input class="w-full"/>
  <Input status="success" class="w-full"/>
  <Input status="warning" class="w-full"/>
  <Input status="danger" class="w-full"/>
</div>

## prefix & suffix

<div class="flex flex-wrap gap-2"> 
  <Input prefix="prefix" class="w-full"/>
  <Input suffix="suffix" class="w-full"/>
  <Input prefix="prefix" suffix="suffix" class="w-full"/>
</div>

## disabled

<div class="flex flex-wrap gap-2"> 
    <Input disabled class="w-full"/>
    <Input disabled prefix="prefix" class="w-full"/>
</div>

## SpaceCompact

<div class="flex flex-wrap gap-2"> 
    <SpaceCompact class="w-full">
      <Input  />
      <Button >button</Button>
    </SpaceCompact>
  <SpaceCompact class="w-full">
      <Input  />
      <Input  />
      <Input  />
      <Input  />
    </SpaceCompact>
  <SpaceCompact class="w-full "> 
      <Input  />
      <Select placeholder="placeholder" class="w-20" :options="[
  { value: 1, label: 'Wade Cooper' }, 
  { value: 2, label: 'Arlene Mccoy' },
  { value: 3, label: 'Devon Webb' },
  { value: 4, label: 'Tom Cook' },
  { value: 5, label: 'Tanya Fox' },
  { value: 6, label: 'Hellen Schmvaluet' },
  { value: 7, label: 'Caroline Schultz' },
  { value: 8, label: 'Mason Heaney' },
  { value: 9, label: 'Claudie Smitham' },
  { value: 10, label: 'Emil Schaefer' },
]"/>
    </SpaceCompact>
</div>

## Props

| Prop     | Type                   | Default | Description                  |
| -------- | ---------------------- | ------- | ---------------------------- |
| variant  | 'secondary' \| 'ghost' | -       | Variant of the button        |
| size     | 'sm' \|'md' \| 'lg'    | 'md'    | Size of the button           |
| pill     | boolean                | false   | Pill style of the button     |
| square   | boolean                | false   | Square style of the button   |
| loading  | boolean                | false   | Loading state of the button  |
| disabled | boolean                | false   | Disabled state of the button |
| color    | string                 | -       | Color of the button          |

## Slots

| Name    | Description |
| ------- | ----------- |
| default | children    |
