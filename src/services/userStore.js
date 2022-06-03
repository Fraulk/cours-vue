import {ref} from 'vue'

const user = ref(JSON.parse(localStorage.getItem("user")) || null)

const login = (name, email, remMe = false) => {
    user.value = {name, email}
    remMe && localStorage.setItem("user", JSON.stringify(user.value))
}

const logout = () => {
    user.value = null
    localStorage.setItem("user", null)
}

export const useUserStore = () => ({
    user,
    login,
    logout
})