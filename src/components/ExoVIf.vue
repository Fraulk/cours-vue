<script setup>
import { ref } from "@vue/reactivity";

const user = ref(null)
const username = ref("")

const login = () => {user.value = {name: username.value}}
const logout = () => {user.value = null}
</script>

<template>
    <div v-if="!user">
      <input type="text" v-model="username">
      <button @click="login">Se connecter</button>
    </div>
    <div v-if="user">
      hello {{user.name}}
      <button @click="logout">Se déconnecter</button>
    </div>
</template>