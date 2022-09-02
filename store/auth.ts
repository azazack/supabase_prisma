import {defineStore} from "pinia"

export const useAuth = defineStore('auth' ,{
    state: () => {
        return {
            user :{},
            token:"",
        }
    },
    getters: {
        isLogged: (state) => !!state.token
    },
    actions: {
        setUser(user:Record<string, string>){
            this.user = user
        },
        setToken(token:string) {
            this.token = token
        },
        logout() {
            localStorage.clear();
        },
    }
})
