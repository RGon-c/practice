// types/sitemap.d.ts
declare module '@nuxt/schema' {
    interface NuxtConfig {
      sitemap?: {
        hostname?: string
        gzip?: boolean
        routes?: () => Promise<string[]>
      }
    }
  }
  