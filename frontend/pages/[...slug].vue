<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
useHead({
  titleTemplate: () => {
    // return `${page?.value?.title} %separator %siteName`
    return page?.value ? `${page.value.title} %separator %siteName` : '%siteName'
  },
  htmlAttrs: {
    lang: 'nl'
  }
})
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
  <template v-else>
    <div class="grid content-large items-start">
      <section class="flex flex-col">
        <h1 class="text-7xl text-purple-500">404</h1>
        <h3 class="mb-2">Pagina niet gevonden!</h3>
        <p>Er is iets misgegaan bij het laden van de pagina of de pagina is verplaatst.</p>
        <a href="/"
          ><Icon name="ph:arrow-left-duotone" class="text-purple-500" size="18" /> Terug naar de
          homepage</a
        >
      </section>
    </div>
  </template>
</template>
