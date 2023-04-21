

<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <i class="fas fa-map-marker-alt"></i>
        <h1 style="padding: 5px"><b> {{ location }}</b></h1>
      </div>
      <div class="card-body">
        <h2><i class="fas fa-thermometer-half"></i> {{ temp }}°F</h2>
        <p class="condition">{{ condition }}</p>
        <div class="details">
          <p><i class="fas fa-thermometer-full"></i> <b>Feels like:</b> {{ feelsLike }}°F</p>
          <p><i class="fas fa-tint"></i> <b>Humidity:</b> {{ humidity }}%</p>
          <p><i class="fas fa-wind"></i> <b>Wind:</b> {{ wind }} mph</p>
        </div>
      </div>
    </div>
  </div>


<!--  <div class="card" :class="weatherClass">-->
<!--    <div class="card-header">-->
<!--      <h2>{{ weatherData.location.name }}</h2>-->
<!--      <p>{{ weatherData.location.region }}, {{ weatherData.location.country }}</p>-->
<!--      <p>{{ currentDate }}</p>-->
<!--    </div>-->
<!--    <div class="card-body">-->
<!--      <div class="weather-info">-->
<!--        <div class="weather-icon">-->
<!--          <font-awesome-icon :icon="weatherIcon" />-->
<!--        </div>-->
<!--        <div class="weather-text">-->
<!--          <p class="weather-condition">{{ weatherData.currentConditions.conditions }}</p>-->
<!--          <p class="weather-temp">{{ weatherData.currentConditions.temp }}&deg;C</p>-->
<!--          <p class="weather-feels-like">-->
<!--            Feels like {{ weatherData.currentConditions.feelsLike }}&deg;C-->
<!--          </p>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

</template>


<script type="text/javascript" src="./WeatherAPI.js"></script>
<style scoped lang="scss" src="./WeatherAPI.scss"></style>
