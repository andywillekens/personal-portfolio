<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('pages').path(`/pages${route.path}`).first()
})

useHead({
  titleTemplate: () => {
    return page?.value ? `${page.value.title} %separator %siteName` : '%siteName'
  },
  htmlAttrs: {
    lang: 'nl'
  }
})
</script>

<template>
  <NuxtLayout name="page">
    <Content :page="page" :error="!page" />
  </NuxtLayout>
</template>
