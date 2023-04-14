<template>

  <div class="parallax">
    <ParallaxScroll></ParallaxScroll>

    <div class="parallax__cover">
      <header class="title">
        Welcome to Trip Planner
      </header>
      <SearchBar @visibleChanged="handleValueChanged" v-if="nextParam"></SearchBar>
      <TileSelection v-if="!nextParam" :attraction_types="attraction_types"></TileSelection>
      <FeatureTimeline style="margin-top: 10px"></FeatureTimeline>
  </div>
  </div>


</template>

<script type="text/javascript" src="./LandingPage.js"></script>
<style scoped lang="scss" src="./LandingPage.scss"></style>
