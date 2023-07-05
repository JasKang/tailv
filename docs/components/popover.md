# checkbox

```vue preview
<script setup>
import { ref, watchEffect } from 'vue'

const open = ref(false)

const openPopper = e => {
  open.value = !open.value
  console.log('openPopper', open.value)
}
</script>
<template>
  <div class="space-x-1">
    <TPopover trigger="click">
      <TButton>click</TButton>
      <template #content>
        1234 asdfasd asdfasdf asdfasdf asdf
      </template>
    </TPopover>

    <TPopover trigger="hover">
      <TButton>click</TButton>
      <template #content> 
        1234 asdfasd asdfasdf asdfasdf asdf
      </template>
    </TPopover>
    <TTooltip trigger="hover">
      <TButton>click</TButton>
      <template #content> 
        1234 asdfasd asdfasdf asdfasdf asdf
      </template>
    </TTooltip>
  </div>
</template>
```