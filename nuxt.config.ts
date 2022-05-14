import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
    NOTION_API: process.env.NOTION_API,
    PAGE_ID: process.env.PAGE_ID
  },
})
