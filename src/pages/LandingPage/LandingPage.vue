<template>
<!--  <GoogleMap></GoogleMap>-->
<!--  <Weather></Weather>-->
  <div class="parallax" id="home">
    <ParallaxScroll></ParallaxScroll>
    <div class="parallax__cover">
      <header class="title">
        Welcome to Trip Planner
        <q-btn class="btn-title" @click="jumpToElement('search')" outline rounded color="white" label="Let's Begin" />
      </header>
      <div class="header">
        <h2 class="logo">Trip Planner</h2>
        <nav class="navigation">
          <a @click="jumpToElement('home')" class="active">Home</a>
          <a @click="jumpToElement('search')">Search</a>
          <a @click="jumpToElement('feature')">Features</a>
        </nav>
      </div>
      <div class="q-pa-md stepper-progress" id="search">
        <q-stepper
          v-model="step"
          ref="stepper"
          color="primary"
          alternative-labels
          animated>
          <q-step
            :name="1"
            title="Basic Input"
            icon="edit"
            :done="step > 1">
            <SearchBar style="" @visibleChanged="handleValueChanged" v-if="nextParam"></SearchBar>
          </q-step>
          <q-step
            :name="2"
            title="Select your category"
            icon="category"
            :done="step > 2">
            <p style="font-size: large; font-family: 'Cantarell Thin'; text-align: center">Select your category</p>
            <transition class="fade">
              <TileSelection style="padding:20px; " v-if="nextParam"
                             :attraction_types="attraction_types"></TileSelection>
            </transition>
          </q-step>
          <q-step
            :name="3"
            title="Select your hotel pref"
            icon="hotel"
            :done="step > 3">
            <p style="font-size: large; font-family: 'Cantarell Thin'; text-align: center">Select your category</p>
            <transition class="fade">
              <TileSelection class="" style="padding:20px; " v-if="nextParam"
                             :attraction_types="attraction_types"></TileSelection>
            </transition>
          </q-step>
          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Finish' : 'Continue'" />
              <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back"
                     class="q-ml-sm" />
            </q-stepper-navigation>
          </template>
        </q-stepper>
      </div>
      <div id="feature">
        <FeatureTimeline style="margin-top: 10px"></FeatureTimeline>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript" src="./LandingPage.js"></script>
<style scoped lang="scss" src="./LandingPage.scss"></style>
