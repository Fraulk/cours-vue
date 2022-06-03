<script setup>
import { ref } from "@vue/reactivity";
import Counter from "./components/Counter.vue";
import JWT from "./components/JWT.vue";
import ExoVFor from "./components/ExoVFor.vue";
import ExoVIf from "./components/ExoVIf.vue";
import NavBar from "./components/NavBar.vue";

</script>

<template>
    <!-- <Counter />
    <hr>
    <JWT /> -->
    <!-- <ExoVFor /> -->
    <!-- <ExoVIf /> -->
    <NavBar />
    <RouterView />
</template>

<style>
  @import 'bootstrap/dist/css/bootstrap.min.css';
</style>