<script lang="ts" setup>
defineProps<{
  data: any
}>()
</script>
<template>
  <div
    class="w-36 h-36 shrink-0 bg-purple-500 rounded-full overflow-hidden border border-black border-4">
    <NuxtImg :src="data.src" :alt="data.alt" :width="data.width" :height="data.height" />
  </div>
</template>
