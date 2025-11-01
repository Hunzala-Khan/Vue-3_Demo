<template>
  <div>
    <h2>Global Store Demo</h2>

    <!-- Counter Section -->
    <div class="counter-section">
      <h3>Counter Store</h3>
      <p>Count: {{ counter.count }}</p>
      <div class="buttons">
        <button @click="counter.increment">Increment</button>
        <button @click="counter.decrement">Decrement</button>
      </div>
    </div>

    <hr class="divider" />

    <!-- User Section -->
    <div class="user-section">
      <h3>User Store</h3>

      <!-- Show login form if not logged in -->
      <div v-if="!user.isLoggedIn" class="login-form">
        <input v-model="name" placeholder="Enter your name" />
        <input v-model="email" placeholder="Enter your email" />
        <button @click="loginUser">Login</button>
      </div>

      <!-- Show user info if logged in -->
      <div v-else class="user-info">
        <p><strong>Name:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p>Status: Logged In</p>
        <button @click="user.logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '../stores/counter'
import { useUserStore } from '../stores/user'

// dono stores use ho rahe hain
const counter = useCounterStore()
const user = useUserStore()

// local form fields
const name = ref('')
const email = ref('')

function loginUser() {
  if (name.value && email.value) {
    user.login(name.value, email.value)
    name.value = ''
    email.value = ''
  } else {
    alert('Please fill both fields!')
  }
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  text-align: center;
}

.counter-section, .user-section {
  border: 1px solid #555;
  border-radius: 10px;
  padding: 20px;
  width: 350px;
  background-color: rgba(255, 255, 255, 0.05);
}

.divider {
  width: 80%;
  border: none;
  border-top: 1px solid #444;
  margin: 20px 0;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  background-color: transparent;
  color: white;
  border-radius: 6px;
  width: 250px;
  text-align: center;
}

button {
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: transparent;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #d4bdbd;
  color: black;
}

p {
  font-size: 18px;
  color: #8be9fd;
}
</style>
