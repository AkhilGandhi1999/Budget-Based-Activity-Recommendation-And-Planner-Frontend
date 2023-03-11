<template>
  <div class="card-container-grid">

    <div class="card-container-row row-container-1">

      <div class="card-item row-1-item-1">
        <div class="q-pa-md">
          <div class="q-gutter-y-md column">
            <q-rating
              v-model="ratingModel"
              size="1.5em"
              color="orange"
              readonly
            />
          </div>
        </div>
      </div>

      <div class="card-item row-1-item-2">
        <img src="../../assets/sun.gif" class="img-dim">
      </div>

    </div>

    <div class="card-container-row row-container-2">

      <div class="card-item row-2-item-1">
        <img src="../../assets/travel1.jpg" class="main-img">
      </div>

      <div class="card-item row-2-item-2">
        <p class="date-text">18 Feb 2023</p>
      </div>
    </div>

    <div class="card-container-row row-container-3">
      <p class="place-name truncate row-3-item-1">University of Colorado Boulder</p>
      <q-tooltip anchor="top middle" self="bottom middle" class="bg-blue text-body2">
        University of Colorado Boulder
      </q-tooltip>
    </div>

    <div class="card-container-row row-container-4">
      <p class="time-text row-4-item-1">Time: 40 MIN</p>
      <p class="cost-text row-4-item-2">350$</p>
    </div>
  </div>
</template>

<script type="text/javascript" src="./ResultCard.js"></script>
<style scoped lang="scss" src="./ResultCard.scss"></style>
