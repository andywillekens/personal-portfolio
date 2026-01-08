<script setup lang="ts">
defineProps<{
  techStack: string[]
}>()
</script>

<template>
  <section class="flex flex-col gap-2">
    <h2 class="text-xl font-bold">Technische stack en tooling</h2>
    <Pills>
      <Pill v-for="tech in techStack" :key="tech" :text="tech" />
    </Pills>
  </section>
</template>
