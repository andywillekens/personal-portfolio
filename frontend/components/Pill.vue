<script setup lang="ts">
interface Props {
  text: string
  icon?: string
}
defineProps<Props>()
</script>
<template>
  <div
    class="flex items-center gap-2 text-curiousblue-50/80 px-3 py-1 rounded-md border border-white/20 shadow-lg">
    <Icon v-if="icon" :name="icon" class="text-curiousblue-500" />
    <p v-if="text">{{ text }}</p>
  </div>
</template>
