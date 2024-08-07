// @Credit https://github.com/nuxt/nuxt/blob/main/packages/nuxt/src/app/components/route-provider.ts#L39

import { type ComponentPublicInstance, computed, ref } from 'vue'
import { unwrapEl } from './unwrapEl'

export function useComponentRef<T = HTMLElement>() {
  const componentRef = ref<ComponentPublicInstance>()

  const currentElement = computed(() => {
    // $el could be text/comment for non-single root normal or text root, thus we retrieve the nextElementSibling
    const el = ['#text', '#comment'].includes(componentRef.value?.$el?.nodeName)
      ? componentRef.value?.$el.nextElementSibling
      : unwrapEl(componentRef)

    return el as T | undefined
  })

  return {
    componentRef,
    currentElement,
  }
}
