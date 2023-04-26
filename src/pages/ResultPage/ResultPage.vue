<template>
  <div class="header">
    <!-- content of the header element that you want to stick to the top -->
    <h3 class="text-white">Budget:500$</h3>
  </div>
  <div class="content">
    <div class="q-pa-md">
      <div style="width: 80%; margin: auto">
        <q-tabs
          v-model="tab"
          align="justify"
          narrow-indicator
          class="q-mb-lg"
        >
          <q-tab ripple style="border-radius: 15px" class="text-purple" name="activities" label="Activities" />
          <q-tab ripple style="border-radius: 15px" class="text-blue" name="hotels" label="Hotels" />
        </q-tabs>
      </div>
    </div>

    <div class="q-gutter-y-sm">
      <q-tab-panels
        v-model="tab"
        animated
        transition-prev="scale"
        transition-next="scale"
      >
        <q-tab-panel name="activities">
          <q-carousel
            v-model="slide"
            animated
            arrows
            navigation
            navigation-icon="radio_button_unchecked"
            control-type="regular"
            control-color="white"
            control-text-color="grey-8"
            height="820px"
            class="top-car"
          >
            <q-carousel-slide v-for="(cards, index) in cat" :key="index" :name="index-0">
              <div  class="container-row drop-zone row-1">
                <ResultCard draggable="true" v-for="card in cards" :key="card.id"
                            :rating-model=card.rating
                            :image-src="'data:image/png;base64,' + card.image"
                            :is-day-activity="card.timeofday" :cost-text=card.price
                            :lat="card.location[0]"
                            :long="card.location[1]"
                            :place-text="card.name" :time-text="card.category"></ResultCard>
              </div>
            </q-carousel-slide>
          </q-carousel>

          <q-carousel
            v-model="slide"
            animated
            arrows
            navigation
            navigation-icon="radio_button_unchecked"
            control-type="regular"
            control-color="white"
            control-text-color="grey-8"
            height="500px"
            class="bottom-car"
          >
            <q-carousel-slide v-for="(cards, index) in cat" :key="index" :name="index-0">

            </q-carousel-slide>
          </q-carousel>
        </q-tab-panel>
      </q-tab-panels>

      <q-tab-panels
        v-model="tab"
        animated
        transition-prev="scale"
        transition-next="scale"
      >

        <q-tab-panel name="hotels">
          <p>in the hotel</p>
        </q-tab-panel>
      </q-tab-panels>
    </div>


<!--    <div class="container-grid">-->
<!--      <div @drop="onDrop($event, 2)"-->
<!--           @dragover.prevent-->
<!--           @dragenter.prevent class="container-row drop-zone">-->
<!--        <ResultCard draggable="true" v-for="card in cardObjects(2)" :key="card.id" @dragstart="startDrag($event, card)"-->
<!--                    :rating-model=card.ratingModel-->
<!--                    :is-day-activity="card.isDayActivity" :cost-text=card.costText-->
<!--                    :place-text="card.placeText" :time-text="card.timeText"></ResultCard>-->
<!--      </div>-->
<!--    </div>-->
    <div class="Planner-parent">
      <PlannerCalendar></PlannerCalendar>
    </div>
  </div>

</template>

<script type="text/javascript" src="./ResultPage.js"></script>
<style scoped lang="scss" src="./ResultPage.scss"></style>
