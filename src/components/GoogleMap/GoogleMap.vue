<template>
  <div style="text-align: center;">
    <h5>Google Map</h5>
  </div>
  <div class="map-container">
    <div ref="map" class="map"></div>
  </div>
  <div>
    <div v-if="directions">
      <h2>Directions</h2>
      <ol>
        <li v-for="(step, index) in directions.steps" :key="index">
          {{ step.instructions }} ({{ step.distance.text }})
        </li>
      </ol>
      <p>Total distance: {{ directions.distance.text }}</p>
    </div>
  </div>
</template>



<script type="text/javascript" src="./GoogleMap.js"></script>
<style scoped lang="scss" src="./GoogleMap.scss"></style>
