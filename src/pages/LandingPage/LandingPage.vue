<template>

<!--  <div class="parallax">-->
<!--    <ParallaxScroll></ParallaxScroll>-->

<!--    <div class="parallax__cover">-->
<!--      <header class="title">-->
<!--        Welcome to Trip Planner-->
<!--      </header>-->
<!--   -->
<!--    </div>-->
<!--  </div>-->

<!--  <q-parallax-->
<!--    src="~assets/demo_bg.png">-->
<!--  </q-parallax>-->

  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      alternative-labels
      animated
    >
      <q-step
        :name="1"
        title="Basic Input"
        icon="edit"
        :done="step > 1"
      >
        <SearchBar class="demo-style" style="" @visibleChanged="handleValueChanged" v-if="nextParam"></SearchBar>

      </q-step>

      <q-step
        :name="2"
        title="Select your category"
        icon="category"
        :done="step > 2"
      >
        <p style="font-size: large; font-family: 'Cantarell Thin'; text-align: center">Select your category</p>
        <transition class="fade">
          <TileSelection class="" style="padding:20px; " v-if="nextParam" :attraction_types="attraction_types"></TileSelection>
        </transition>
      </q-step>
      <q-step
        :name="3"
        title="Select your hotel pref"
        icon="hotel"
        :done="step > 3"
      >
        <p style="font-size: large; font-family: 'Cantarell Thin'; text-align: center">Select your category</p>
        <transition class="fade">
          <TileSelection class="" style="padding:20px; " v-if="nextParam" :attraction_types="attraction_types"></TileSelection>
        </transition>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>



    <FeatureTimeline style="margin-top: 10px"></FeatureTimeline>


</template>

<script type="text/javascript" src="./LandingPage.js"></script>
<style scoped lang="scss" src="./LandingPage.scss"></style>
