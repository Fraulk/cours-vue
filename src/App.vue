<script setup>
import { ref } from "@vue/reactivity";
import Counter from "./components/Counter.vue";
import JWT from "./components/JWT.vue";
import ExoVFor from "./components/ExoVFor.vue";

const user = ref(null)
const username = ref("")

const login = () => {user.value = {name: username.value}}
const logout = () => {user.value = null}
</script>

<template>
    <h1>Hello world</h1>
    <!-- <Counter />
    <hr>
    <JWT /> -->
    <!-- <ExoVFor /> -->
    <div v-if="!user">
      <input type="text" v-model="username">
      <button @click="login">Se connecter</button>
    </div>
    <div v-if="user">
      hello {{user.name}}
      <button @click="logout">Se déconnecter</button>
    </div>
</template>