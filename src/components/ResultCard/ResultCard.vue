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
              icon="star_border"
              icon-selected="star"
              icon-half="star_half"
              readonly
            />
          </div>
        </div>
      </div>

      <div class="card-item row-1-item-2">
        <img v-if="isDayActivity === 'Morning'" src="../../assets/sun.gif" class="img-dim">
        <img v-else src="../../assets/night.gif" class="img-dim">
      </div>

    </div>

    <div class="card-container-row row-container-2">

      <div class="card-item row-2-item-1">
        <img :src="imageSrc" class="main-img">
      </div>

      <div class="card-item row-2-item-2">
        <p class="date-text">{{ "2023-02-04" }}</p>
      </div>
    </div>

    <div class="card-container-row row-container-3">
      <p class="place-name truncate row-3-item-1" style="padding: 10px">{{ placeText }}</p>
      <q-tooltip anchor="top middle" self="bottom middle" class="bg-blue text-body2">
        {{ placeText }}
      </q-tooltip>
    </div>

    <div class="card-container-row row-container-4">
      <p class="time-text row-4-item-1" style="padding: 0px 10px">{{ timeText }}</p>
      <p class="cost-text row-4-item-2">{{ costText }}$</p>
    </div>

    <div class="card-container-row row-container-5" >
      <q-btn class="round-button ripple"  @click="fixed = true" rounded  label="Peak At Weather" />
      <q-btn class="round-button ripple"  @click="calendar = true" rounded color="primary" label="Add to Calendar" />
    </div>
  </div>

  <q-dialog v-model="fixed" transition-show="fade" transition-hide="rotate">
    <div class="weather-container">
      <WeatherCard :lat="lat" :long="long" class="weather-actual"></WeatherCard>
      <q-btn class="weather-ok" label="OK" color="primary" v-close-popup />
    </div>
  </q-dialog>


  <q-dialog v-model="calendar" transition-show="fade" transition-hide="rotate">
    <div class="cal-container">
      <p>Date "2023-05-05"</p>
      <q-input  outlined rounded v-model="time" mask="time" label="Start Time" :rules="['time']">
        <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-time v-model="time" landscape>
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-input  outlined rounded v-model="time" mask="time" label="End Time" :rules="['time']">
        <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale">
              <q-time v-model="time" landscape>
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <q-btn class="weather-ok" label="Add to Calendar" color="primary" v-close-popup />
    </div>
  </q-dialog>
</template>

<script type="text/javascript" src="./ResultCard.js"></script>
<style scoped lang="scss" src="./ResultCard.scss"></style>
