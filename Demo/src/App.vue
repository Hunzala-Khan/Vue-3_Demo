<template>
  <div id="app" class="main-container">

    <div class="sidebar">
      <h1>Vue 3 Demo</h1>

      <router-link to="/reactives" class="btn">Reactives</router-link>
      <router-link to="/props" class="btn">Props</router-link>
      <router-link to="/emit" class="btn">Emit</router-link>
      <router-link to="/virtual-dom" class="btn">Virtual-DOM</router-link>
      <router-link to="/watchers" class="btn">Watchers</router-link>
      <router-link to="/computed-properties" class="btn">Computed-Properties</router-link>
      <router-link to="/lifecycle-hook" class="btn">Lifecycle-Hook</router-link>
      <router-link to="/global-store" class="btn">Global Store</router-link>
      <router-link to="/api-integration" class="btn">API Integration</router-link>
      <router-link to="/Test-Demo" class="btn">Test-Demo</router-link>
    </div>

    <!-- Center Content Area -->
    <div class="content">
      <!-- Input only for Props route -->
      <div v-if="$route.path === '/props'" class="input-area">
        <h2>Props Demo</h2>
        <input v-model="parentMessage" placeholder="Type message to send to child" />
      </div>

      <!-- Show child message for Emit route -->
      <div v-if="$route.path === '/emit'" class="emit-display">
        <h3 v-if="childMessage">Child say: {{ childMessage }}</h3>
      </div>

      <!-- Router View with props & event listener -->
      <router-view 
        :parentMessage="parentMessage" 
        @childMessage="receiveFromChild">
      </router-view>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const parentMessage = ref('')
    const childMessage = ref('')

    const receiveFromChild = (msg) => {
      childMessage.value = msg
    }

    return { parentMessage, childMessage, receiveFromChild }
  }
}
</script>

<style scoped>
.main-container {
  display: flex;
  height: 100vh;
  background-color: #000;
  color: white;
}

.sidebar {
  width: 220px;
  background-color: #0d0b0b;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: 2px solid #242424;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}

.sidebar h1 {
  font-size: 24px;
  margin-bottom: 30px;
}

.sidebar .btn {
  background-color: #252525;
  color: white;
  border: 1px solid #d2cece;
  padding: 10px 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  cursor: pointer;
  width: 85%;
  text-align: left;
  text-decoration: none;
}

.sidebar .btn:hover {
  background-color: #d4bdbd;
  color: black;
}

.content {
  flex: 1;
  margin-left: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.input-area {
  margin-bottom: 20px;
}

input {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: transparent;
  color: white;
  width: 300px;
  text-align: center;
}

.emit-display {
  margin-bottom: 20px;
  color: #8be9fd;
  font-size: 18px;
}
</style>
