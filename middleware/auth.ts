
import {abortNavigation, defineNuxtRouteMiddleware, navigateTo, useSupabaseToken} from "#imports";
const token = useSupabaseToken()

export default defineNuxtRouteMiddleware((to,from) => {
    if(!token.value){
        return navigateTo('/login')

    }
        return abortNavigation()
})
