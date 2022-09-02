import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/supabase','@pinia/nuxt'],
    css: [
        '@/assets/css/main.scss'
    ]
})
