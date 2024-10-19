import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: ['@nuxt/icon', '@nuxtjs/sitemap', '@nuxtjs/i18n'],
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
    name: 'My Awesome Website'
  },
  sitemap: {
    hostname: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
    gzip: true,
    routes: async () => {
      const response = await fetch('https://example.com/api/articles');
      const articles = await response.json(); // Преобразуем ответ в JSON
      const articleRoutes = articles.map((article: { slug: string }) => `/blog/${article.slug}`);

      return articleRoutes;
    }
  },
  i18n:{
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name:"English(US)",
        file: "en-US.json"
      },
      {
        code: "ru-RU",
        iso: "ru-RU",
        name:"Russia(RU)",
        file: "ru-Ru.json"
      }
    ],
    defaultLocale: "ru-RU",
    vueI18n: "ru-RU",
  },
  typescript: {
    shim: false,
    strict: true,
    includeWorkspace: true,
  },
})