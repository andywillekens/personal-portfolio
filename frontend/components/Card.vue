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
      'flex gap-4 pb-16 border-b-1 border-dashed last:border-b-0 border-purple-200 ',
      direction === 'vertical' && 'flex-col'
    ]">
    <slot />
  </section>
</template>
