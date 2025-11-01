<template>
  <div>
    <h2>Computed Property Demo</h2>
    <input v-model="firstName" placeholder="First Name" />
    <input v-model="lastName" placeholder="Last Name" />
    <p>Full Name: {{ fullName }}</p>
  </div>
  <p>{{ no }}</p>
</template>

<script setup>
import { ref, computed } from 'vue'
const firstName = ref('')
const lastName = ref('')
const no = ref('')
const fullName = computed(() => `${firstName.value} ${lastName.value}`)
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  background-color: transparent;
  color: white;
  border-radius: 4px;
  width: 250px;
  text-align: center;
}
</style>