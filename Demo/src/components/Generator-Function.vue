<template>
  <div>
    <h2>Generator Demo</h2>
    <p>Number: {{ number }}</p>
    <button @click="getNext">Next</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// reactive variable
const number = ref('');

// generator instance
const generator = numberGenerator();

// simple generator function
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

// function to get next value
function getNext() {
  const result = generator.next();
  if (result.value === 5) {
    number.value = "Done!";
  } else {
    number.value = result.value;
  }
}
</script>

<style scoped>
div {                   
  display: flex;
  flex-direction: column;
  gap: 10px;
}   
button {
    border: none;
    background-color: #171717;
  padding: 10px;
  color: rgb(255, 255, 255);
}
</style>