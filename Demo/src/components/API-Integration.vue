<template>
  <div>
    <h2>API Integration [Weather]</h2>

    <input v-model="city" placeholder="Enter city name" @keyup.enter="fetchWeather"/>
   

    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>

    <div v-if="weather">
      
      <p>Temperature: {{ weather.current.temp_c }}°C</p>
      <p>Condition: {{ weather.current.condition.text }}</p>
      <img :src="weather.current.condition.icon" alt="icon" />
      <p>Humidity: {{ weather.current.humidity }}%</p>
      <p>Wind Speed: {{ weather.current.wind_kph }} km/h</p>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { ref } from "vue"

export default {
  setup() {
    const weather = ref(null)
    const loading = ref(false)
    const error = ref("")
    const city = ref("")

    const fetchWeather = async () => {
      if (!city.value.trim()) {
        error.value = "Please enter a city name"
        return
      }
      
      loading.value = true
      error.value = ""
      try {
        const apiKey = "08e888f9cf884c8bad8184456250707"
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city.value}&aqi=no`)
        weather.value = response.data
      } catch (err) {
        error.value = "Failed to fetch weather data. Please check the city name and try again."
        weather.value = null
      } finally {
        loading.value = false
      }
    }

    return { weather, loading, error, fetchWeather, city }
  },
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
img {
  width: 64px;
  height: 64px;
}
</style>