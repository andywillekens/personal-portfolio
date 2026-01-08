<script setup lang="ts">
interface Props {
  text: string
  icon?: string
}
defineProps<Props>()
</script>
<template>
  <div
    class="flex items-center gap-2 px-3 py-1 rounded-md border border-purple-100 bg-purple-100/10">
    <Icon v-if="icon" :name="icon" class="text-purple-500" />
    <p v-if="text" class="text-purple-800">{{ text }}</p>
  </div>
</template>
