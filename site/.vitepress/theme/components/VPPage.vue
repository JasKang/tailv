<script setup lang="ts">
import { useData } from 'vitepress'
import HomeDemo from './HomeDemo.vue'
</script>

<template>
  <div class="relative mx-auto max-w-8xl flex-nowrap items-stretch">
    <div class="relative flex-1 overflow-x-auto px-4 py-10 sm:px-8 lg:px-12">
      <HomeDemo />
      <Content class="vp-doc prose prose-slate max-w-none dark:prose-invert" />
    </div>
  </div>
</template>
