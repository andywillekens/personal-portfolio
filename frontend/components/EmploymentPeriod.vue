<script setup lang="ts">
interface Props {
  start?: string
  end?: string
}
const props = defineProps<Props>()

const start = computed(() => {
  return props.start && props.start !== 'heden'
    ? new Date(props.start).toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' })
    : 'heden'
})
const end = computed(() => {
  return props.end && props.end !== 'heden'
    ? new Date(props.end).toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' })
    : 'heden'
})
</script>
<template>
  <p class="flex items-center gap-2">
    <Icon name="ph:calendar-dots" />
    {{ start }}
    t/m
    {{ end }}
  </p>
</template>
