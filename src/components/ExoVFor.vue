<script setup>
import { ref } from "@vue/reactivity";

const list = ref([])
const id = ref(0)
const name = ref("")
const lastname = ref("")

const pushElToList = () => {
  list.value.push({id: id.value, name: name.value, lastname: lastname.value})
  id.value++
  name.value = ""
  lastname.value = ""
}

const deleteEl = (index) => {
  list.value.splice(index, 1)
}
</script>

<template>
    name: <input type="text" v-model="name">
    lastname: <input type="text" v-model="lastname">
    <button @click="pushElToList">Save</button>
    <p>list: </p>
    <div v-for="(el, i) in list" :key="el.id">
      <span @click="deleteEl(i)">{{el.name}} {{el.lastname}}</span>
    </div>
</template>