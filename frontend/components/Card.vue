<script lang="ts" setup>
// Default hover to true
defineProps({
  hover: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String,
    default: 'horizontal'
  }
})
</script>
<template>
  <section
    :class="[
      'flex gap-4 rounded-xl bg-purple-50 p-6 border border-purple-100 border-1 transition-all duration-50 shadow-sm shadow-purple-900/10',
      hover && 'hover:scale-102 hover:shadow-xl',
      direction === 'vertical' && 'flex-col'
    ]">
    <slot />
  </section>
</template>
