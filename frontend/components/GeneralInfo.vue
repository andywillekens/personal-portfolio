<script lang="ts" setup>
defineProps<{
  info: any
}>()
</script>
<template>
  <section>
    <template v-for="item in info" :key="item.id">
      <h1>{{ item.title }}</h1>
      <p>{{ item.text }}</p>
    </template>
  </section>
</template>
