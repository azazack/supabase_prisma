
const token = useSupabaseToken()

export default defineNuxtRouteMiddleware(() => {
    if(!token.value){
        console.log(token)
        return navigateTo('/login')
    }
})
