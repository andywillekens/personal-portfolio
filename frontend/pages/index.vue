<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('pages').path(`/pages/`).first()
})

const { data: projects } = await useAsyncData('projects', () =>
  queryCollection('projects').order('order', 'ASC').all()
)

const { data: jobs } = await useAsyncData('jobs', () =>
  queryCollection('jobs').order('employmentPeriod_start', 'DESC').all()
)

const { data: profile } = await useAsyncData('profile', () =>
  queryCollection('profile').order('order', 'ASC').all()
)

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
  <NuxtLayout name="home">
    <Content :page="page" :projects="projects" :jobs="jobs" :profile="profile" />
  </NuxtLayout>
</template>
