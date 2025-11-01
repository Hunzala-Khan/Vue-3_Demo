<template>
  <div>
    <h2>Watcher Demo</h2>
    <input v-model="text" placeholder="Type something" />
    <p>Current Message: {{ text }}</p>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const text = ref('')

watch(text, (newVal, oldVal) => {
  console.log(`Changed from "${oldVal}" to "${newVal}"`)
})
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