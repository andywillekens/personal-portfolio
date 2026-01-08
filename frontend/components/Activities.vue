<script setup lang="ts">
defineProps<{
  activities: string[]
}>()
</script>
<template>
  <section class="flex flex-col gap-2 mb-4">
    <h1 class="text-xl font-bold">Werkzaamheden en verantwoordelijkheden</h1>
    <ul v-if="activities" class="flex flex-col gap-1">
      <li v-for="activity in activities" class="flex items-center gap-1" :key="activity">
        <Icon name="ph:dot-outline" class="text-purple-500" />{{ activity }}
      </li>
    </ul>
  </section>
</template>
