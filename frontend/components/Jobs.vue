<script lang="ts" setup>
defineProps<{
  jobs: any[]
}>()
</script>
<template>
  <section class="flex flex-col gap-16 max-w-xl mx-auto">
    <Job v-for="job in jobs" :key="job.id" :job="job" />
  </section>
</template>
