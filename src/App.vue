<script setup>
import { ref } from "@vue/reactivity";
import * as jose from 'jose'

const counter = ref(0)
const claim = ref("")
const decodedJwt = localStorage.getItem("jwt") || ref("")

setInterval(() => {
  counter.value++
}, 1000);

const resetCounter = () => {counter.value = 0}

const claimJwt = (token) => {
  decodedJwt.value = jose.decodeJwt(token)
}

const saveLocally = () => {
  localStorage.setItem("jwt", JSON.stringify(decodedJwt.value))
}

</script>

<template>
    <h1>Hello world</h1>
    {{counter}}
    <button @click="resetCounter()">Reset counter</button>
    <input type="text" name="input" id="input" v-model="counter"><br>
    <h3>JWT claim</h3>
    <textarea type="text" name="claim" id="claim" @change="claimJwt($event.target.value)" rows="10"></textarea><br>
    <div v-if="decodedJwt">last jwt : {{decodedJwt}}</div>
    <button @click="saveLocally">Save to localStorage</button>
</template>