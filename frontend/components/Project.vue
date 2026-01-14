<script lang="ts" setup>
defineProps<{
  project: any
}>()
</script>
<template>
  <Card>
    <div class="flex flex-col gap-4 justify-between w-full">
      <div class="flex flex-col gap-2 w-full">
        <h1>{{ project.title }}</h1>
        <p>{{ project.description }}</p>
      </div>
      <div class="flex flex-row gap-2 justify-start self-start">
        <Button
          v-if="project.urls.live"
          :to="project.urls.live"
          target="_blank"
          variant="solid"
          icon="ph:arrow-square-out"
          >Preview</Button
        >
        <Button
          v-if="project.urls.source"
          :to="project.urls.source"
          target="_blank"
          variant="soft"
          icon="ph:github-logo"
          >Github</Button
        >
      </div>
    </div>
    <NuxtImg
      class="rounded-md"
      :src="project.image"
      :alt="project.title"
      :width="265"
      :height="175" />
  </Card>
</template>
