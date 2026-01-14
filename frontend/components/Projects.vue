<script lang="ts" setup>
defineProps<{
  projects: any[]
}>()
</script>
<template>
  <section class="flex flex-col gap-16 max-w-xl mx-auto">
    <Project v-for="project in projects" :key="project.id" :project="project" />
  </section>
</template>
