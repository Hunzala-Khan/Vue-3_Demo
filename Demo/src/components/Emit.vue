<template>
  <div>
    <h2>Emit Demo</h2>
    <input v-model="childInput" placeholder="Type message for parent" @keyup.enter="sendToParent" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'EmitDemo',
  emits: ['childMessage'],
  setup(props, { emit }) {
    const childInput = ref('')

    const sendToParent = () => {
      emit('childMessage', childInput.value)
      childInput.value = ''
    }

    return { childInput, sendToParent }
  }
}
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
