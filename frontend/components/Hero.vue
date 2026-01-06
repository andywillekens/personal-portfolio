<script lang="ts" setup>
defineProps<{
  pre: string
  h1: string
  avatar?: object
}>()
</script>
<template>
  <section class="flex gap-4">
    <Avatar :data="avatar" />
    <div class="flex flex-col justify-center">
      <span class="text-purple-500 text-lg">{{ pre }}</span>
      <h1>{{ h1 }}</h1>
    </div>
  </section>
</template>
