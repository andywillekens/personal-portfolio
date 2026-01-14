<script lang="ts" setup>
defineProps<{
  info: any
}>()
</script>
<template>
  <section class="max-w-xl mx-auto">
    <template v-for="item in info" :key="item.id">
      <h1 v-if="item.title">{{ item.title }}</h1>
      <p v-if="item.text">{{ item.text }}</p>
    </template>
  </section>
</template>
