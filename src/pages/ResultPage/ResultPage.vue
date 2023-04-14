<template>

  <!--   Tabs to toggle between activities and hotels to stay -->
<!--  <ParallaxScroll></ParallaxScroll>-->

  <q-parallax
    src="~assets/demo_bg.png"
  >
    <h1 class="text-white">Basic</h1>

  </q-parallax>
  <div class="q-pa-md">
    <div style="width: 80%; margin: auto">
      <q-tabs
        v-model="tab"
        align="justify"
        narrow-indicator
        class="q-mb-lg"
      >
        <q-tab ripple style="border-radius: 15px" class="text-purple" name="mails" label="Activities" />
        <q-tab ripple style="border-radius: 15px" class="text-blue" name="movies" label="Hotels" />
      </q-tabs>
    </div>
  </div>


    <q-carousel
      v-model="slide"
      swipeable
      animated
      arrows
      navigation
      navigation-icon="radio_button_unchecked"
      control-type="regular"
      control-color="white"
      control-text-color="grey-8"
      height="730px"
    >
      <q-carousel-slide :name="1">
        <div class="container-grid">
          <!--    row 1 -->
          <div @drop="onDrop($event, 1)"
               @dragover.prevent
               @dragenter.prevent class="container-row drop-zone">
            <ResultCard draggable="true" v-for="card in cardObjects(1)" :key="card.id"
                        @dragstart="startDrag($event, card)" :rating-model=card.ratingModel
                        :is-day-activity="card.isDayActivity" :cost-text=card.costText
                        :place-text="card.placeText" :time-text="card.timeText"></ResultCard>

          </div>

          <!--        &lt;!&ndash;    row 2&ndash;&gt;-->
          <!--        <div @drop="onDrop($event, 2)"-->
          <!--             @dragover.prevent-->
          <!--             @dragenter.prevent class="container-row drop-zone">-->
          <!--          <ResultCard draggable="true" v-for="card in cardObjects(2)" :key="card.id" @dragstart="startDrag($event, card)" :rating-model=card.ratingModel-->
          <!--                      :is-day-activity="card.isDayActivity" :cost-text=card.costText-->
          <!--                      :place-text="card.placeText" :time-text="card.timeText"></ResultCard>-->
          <!--        </div>-->
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2">
        <div class="container-grid">
          <!--    row 1 -->
          <div @drop="onDrop($event, 1)"
               @dragover.prevent
               @dragenter.prevent class="container-row drop-zone">
            <ResultCard draggable="true" v-for="card in cardObjects(1)" :key="card.id"
                        @dragstart="startDrag($event, card)" :rating-model=card.ratingModel
                        :is-day-activity="card.isDayActivity" :cost-text=card.costText
                        :place-text="card.placeText" :time-text="card.timeText"></ResultCard>

          </div>

          <!--    row 2-->
          <div @drop="onDrop($event, 2)"
               @dragover.prevent
               @dragenter.prevent class="container-row drop-zone">
            <ResultCard draggable="true" v-for="card in cardObjects(2)" :key="card.id"
                        @dragstart="startDrag($event, card)" :rating-model=card.ratingModel
                        :is-day-activity="card.isDayActivity" :cost-text=card.costText
                        :place-text="card.placeText" :time-text="card.timeText"></ResultCard>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="container-grid">
      <div @drop="onDrop($event, 2)"
           @dragover.prevent
           @dragenter.prevent class="container-row drop-zone">
        <ResultCard draggable="true" v-for="card in cardObjects(2)" :key="card.id" @dragstart="startDrag($event, card)"
                    :rating-model=card.ratingModel
                    :is-day-activity="card.isDayActivity" :cost-text=card.costText
                    :place-text="card.placeText" :time-text="card.timeText"></ResultCard>
      </div>
    </div>
    <div>
      <PlannerCalendar></PlannerCalendar>
    </div>
</template>

<script type="text/javascript" src="./ResultPage.js"></script>
<style scoped lang="scss" src="./ResultPage.scss"></style>
