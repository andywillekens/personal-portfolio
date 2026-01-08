<script lang="ts" setup>
type Info = {
  title: string
  text: string
}

type Project = {
  title: string
  description?: string
  order?: number
  image?: string
  urls?: Record<string, string>
}

type Job = {
  company: string
  title: string
  activities: string[]
  employmentPeriod_start: string
  employmentPeriod_end: string
  techStack: string[]
  locations: string[]
}

type Profile = {
  title: string
  text: string
  data: {
    email: string
    phone: string
    github: string
    linkedin: string
  }
}

const props = defineProps<{
  page: any
  error?: boolean
  projects?: Project[]
  jobs?: Job[]
  profile?: Profile[]
  info?: Info[]
}>()

const content = computed(() => {
  const body = props.page?.body ?? props.page?.value?.body ?? {}

  return {
    ...body,
    projects: props.projects,
    jobs: props.jobs,
    profile: props.profile,
    info: props.info
  }
})
</script>

<template>
  <!-- <pre>{{ content }}</pre> -->
  <template v-if="error">
    <Error />
  </template>
  <section v-else class="flex flex-col gap-28">
    <Hero
      v-if="content.hero"
      :avatar="content.hero.avatar"
      :pre="content.hero.pre"
      :h1="content.hero.h1" />
    <GeneralInfo v-if="content.info" :info="content.info" />
    <Jobs v-if="content.jobs" :jobs="content.jobs" />
    <Projects v-if="content.projects" :projects="content.projects" />
  </section>
</template>
