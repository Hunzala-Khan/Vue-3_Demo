<template>
  <div>
    <h2>Virtual DOM Demo</h2>
    <input v-model="virtualMessage" placeholder="Type a message" />
    <p>Virtual DOM: {{ virtualMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const virtualMessage = ref('')
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