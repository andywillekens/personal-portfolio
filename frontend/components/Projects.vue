<script lang="ts" setup>
defineProps<{
  projects: any[]
}>()
</script>
<template>
  <section class="flex flex-col gap-4">
    <Project v-for="project in projects" :key="project.id" :project="project" />
  </section>
</template>
