<script lang="ts" setup>
defineProps<{
  jobs: any[]
}>()
</script>
<template>
  <section class="flex flex-col gap-4">
    <Job v-for="job in jobs" :key="job.id" :job="job" />
  </section>
</template>
