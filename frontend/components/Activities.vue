<script setup lang="ts">
defineProps<{
  activities: string[]
}>()
</script>
<template>
  <section class="flex flex-col gap-2">
    <h2 class="text-md font-bold font-head">Werkzaamheden en verantwoordelijkheden</h2>
    <ul v-if="activities">
      <li v-for="activity in activities" class="flex items-center gap-1" :key="activity">
        <Icon name="ph:dot-outline" class="text-curiousblue-500" />{{ activity }}
      </li>
    </ul>
  </section>
</template>
