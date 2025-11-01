<template>
  <div>
    <h2>Lifecycle Hook Demo</h2>
    <input v-model="message" placeholder="Type a message" />
    <p>{{ message }}</p>
     <p>Count from Store: {{ countStore.count }}</p>
  </div>
</template>

<script>
import { ref, onBeforeMount, onMounted, onUpdated, onUnmounted, watch } from 'vue'
import { useCounterStore } from '../stores/counter'

export default {
  name: 'LifecycleHookDemo',
  setup() {
    const message = ref('')
    const countStore = useCounterStore()

    function log(msg) {
      console.log(msg)
    }

    onBeforeMount(function() {
      log('Hi there! how can i help you? - Before Mounting')
    })

    onMounted(function() {
      log('Mounted - Component is now visible' + message.value )
    })

    onUpdated(function() {
      log('Updated - ' + message.value)
    })

    onUnmounted(function() {
      log('Unmounted - Component destroyed')
    })

    watch(message, function() {
      log('Message changed to: ' + message.value)
    })

    return { message, countStore }
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