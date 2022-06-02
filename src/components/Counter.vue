<script setup>
import { ref } from "@vue/reactivity";

const counter = ref(0)

setInterval(() => {
  counter.value++
}, 1000);

const resetCounter = () => {counter.value = 0}

</script>

<template>
    {{counter}}
    <button @click="resetCounter()">Reset counter</button>
    <input type="text" name="input" id="input" v-model="counter"><br>
</template>