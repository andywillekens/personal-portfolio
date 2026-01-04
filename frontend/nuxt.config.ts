import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/seo', '@nuxt/content', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  content: {
    renderer: {
      anchorLinks: false
    }
  },
  site: {
    url: 'https://andywillekens.nl',
    name: 'Andy Willekens',
    description:
      'Een creatieve front-end developer met meer dan 10+ jaar aan ervaring in development en design.',
    indexable: true,
    trailingSlash: false
  },
  app: {
    head: {
      templateParams: {
        separator: '-'
      },
      charset: 'utf-8',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' }
        // { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }
      ]
    }
  }
})
