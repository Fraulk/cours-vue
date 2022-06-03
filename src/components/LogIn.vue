<script setup>
import { ref } from 'vue';
import router from '../router';
import { useUserStore } from '../services/userStore';

const name = ref("")
const email = ref("")
const remMe = ref(false)

const {user, login} = useUserStore()
const log = () => {
    login(name.value, email.value, remMe.value)
    router.push("/")
}
</script>

<template>
    <div>
        name: <input type="text" v-model="name"><br>
        email: <input type="text" v-model="email"><br>
        remember me ? <input type="checkbox" v-model="remMe"><br>
        <button @click="log">Login</button>
    </div>
</template>