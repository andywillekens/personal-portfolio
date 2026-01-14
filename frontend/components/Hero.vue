<script lang="ts" setup>
defineProps<{
  pre: string
  h1: string
  avatar?: object
}>()
</script>
<template>
  <section class="flex gap-4 max-w-4xl mx-auto">
    <Avatar :data="avatar" />
    <div class="flex flex-col justify-center">
      <span class="text-2xl">{{ pre }}</span>
      <h1>{{ h1 }}</h1>
    </div>
  </section>
</template>
