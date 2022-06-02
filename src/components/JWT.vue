<script setup>
import { ref } from "@vue/reactivity";
import * as jose from 'jose'

const claim = ref("")
const decodedJwt = ref(JSON.parse(localStorage.getItem("jwt")) || "")

const claimJwt = (token) => {
  try {
    decodedJwt.value = jose.decodeJwt(token)
  } catch (error) {
    // console.log(error)
    console.log("oopsie jwt is most likely invalid")
  }
}

const saveLocally = () => {
  localStorage.setItem("jwt", JSON.stringify(decodedJwt.value))
}
</script>

<template>
    <h3>JWT claim</h3>
    <textarea type="text" name="claim" id="claim" @change="claimJwt($event.target.value)" rows="10"></textarea><br>
    <div v-if="decodedJwt">last jwt : {{decodedJwt}}</div>
    <button @click="saveLocally">Save to localStorage</button>
</template>