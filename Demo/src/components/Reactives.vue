<template>
  <div>
    <h2>Reactive Demo</h2>
    <input v-model="message" placeholder="Type a message" />
    <p>Message: {{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('')
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

