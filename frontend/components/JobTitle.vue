<script setup lang="ts">
interface Props {
  title: string
  companyName: string
}
defineProps<Props>()
</script>
<template>
  <h1 class="text-xl font-normal font-body">
    {{ title }} @ <span class="font-bold font-head">{{ companyName }}</span>
  </h1>
</template>
