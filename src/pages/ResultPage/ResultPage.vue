<template>

  <div class="main-container">
    <!--  loader/spinner logic -->
    <q-inner-loading
      label-class="text-teal"
      label-style="font-size: 1.1em" :showing="visible" style="z-index: 999; height: 100vh; margin-top: 860px" >
      <q-spinner-gears size="50px" color="primary"  />
    </q-inner-loading>


    <div class="budget-container"></div>
    <div class="budget-tracker" :style="{ backgroundColor: bgColor, width: width + '%'}">
      BUDGET:{{ globalBudget }}$
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
            <q-tab ripple style="border-radius: 15px" class="text-teal" name="activities" label="Activities" />
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
            <div class="result-container" style="display: flex; flex-direction: column">
              <div class="result-row-1" style="display: flex; flex-direction: row; width: 100%;">
                <div class="result-row-1-item-1" style="width: 67%;">
                  <q-carousel
                    v-model="slide"
                    animated
                    arrows
                    navigation
                    navigation-icon="radio_button_unchecked"
                    control-type="regular"
                    control-color="white"
                    control-text-color="grey-8"
                    height="900px"
                  >
                    <q-carousel-slide v-for="(cards, index) in cat" :key="index" :name="index-0">
                      <div class="inner-element">
                        <p style="font-weight: bold; font-size: 2em; text-align: center; margin-left: 450px" >Model Recommendation</p>
                        <q-btn class="btn-hover" @click="lowest = true" outline rounded label="Lowest Options" style="margin: auto"></q-btn>
                      </div>
                      <p style="font-weight: bold; font-size: 2em; text-align: center" >{{ cards[index].date }}</p>
                      <div class="container-row row-1">
                        <ResultCard draggable="true" v-for="card in cards" :key="card.id"
                                    :rating-model=card.rating
                                    :image-src="'data:image/png;base64,' + card.image"
                                    :is-day-activity="card.timeofday" :cost-text=card.price
                                    :enable-loc=true
                                    :disable-loc=false
                                    :weather-loc=false
                                    :css-toggle=false
                                    :cal-toggle="card.calendarToggle"
                                    :loc-toggle="card.locationToggle"
                                    :lat="card.location[0]"
                                    :long="card.location[1]"
                                    :date-text="card.date"
                                    :place-text="card.name" :time-text="card.category" @addToEvent="finalAddEvent"></ResultCard>
                      </div>
                    </q-carousel-slide>
                  </q-carousel>
                </div>
                <div class="result-row-1-item-2" style="width: 33%">
                  <PlannerCalendar @removeFromCal="removeEventCal" :events="events" :height="850" :s-date="startDate"></PlannerCalendar>
                </div>
              </div>
              <div class="result-row-2 Planner-parent">
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
                  <q-carousel-slide v-for="(cards, index) in dict" :key="index" :name="index-0">
                    <p style="font-weight: bold; font-size: 2em; text-align: center" >Distance and Time Finder</p>
                    <div class="container-row drop-zone row-3">
                      <div style="display: flex; align-items: center" v-for="(card, ind) in cards" :key="ind">
                        <ResultCard  draggable="true"
                                     :rating-model=card.rating
                                     :image-src="'data:image/png;base64,' + card.image"
                                     :is-day-activity="card.timeofday" :cost-text=card.price
                                     :enable-loc=false
                                     :disable-loc=true
                                     :weather-loc=false
                                     :css-toggle=true
                                     :cal-toggle="card.calendarToggle"
                                     :loc-toggle="card.locationToggle"
                                     :lat="card.location[0]"
                                     :long="card.location[1]"
                                     :date-text="card.date"
                                     :place-text="card.name" :time-text="card.category" @addToEvent="finalAddEvent">
                        </ResultCard>
                        <div v-if="ind < (cards.length - 1)" style="display: flex; flex-direction: column; align-items: center">
                            <p>Distance</p>
                            <q-separator  horizontal style="width:100px; height: 2px;" ></q-separator>
                            <p style="margin-top: 15px">Time</p>
                        </div>
                      </div>

                    </div>
                  </q-carousel-slide>
                </q-carousel>
              </div>
            </div>
            <div style="display: flex; justify-content: center; margin-top: 20px;">
              <div style="margin-right: 20px">
                <q-btn @click="home = true" style="height: 50px" class="btn-hover" rounded outline label="Back to Home"></q-btn>
              </div>
              <div>
                <q-btn @click="save = true" style="height: 50px" class="btn-hover" rounded outline label="Download the Itinerary" ></q-btn>
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>

        <q-dialog v-model="home" transition-show="fade" transition-hide="fade" >
          <q-card>
            <q-card-section class="row items-center">
              <q-avatar icon="cancel" color="primary" text-color="white" />
              <span class="q-ml-sm">Are you sure you want to go Home?</span>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Cancel" color="primary" v-close-popup />
              <q-btn @click="homePage()" flat label="Confirm" color="primary" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>

        <q-dialog v-model="save" transition-show="fade" transition-hide="fade" >
          <q-card>
            <q-card-section class="row items-center">
              <q-avatar icon="save" color="primary" text-color="white" />
              <span class="q-ml-sm">Do you want to Save?</span>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Cancel" color="primary" v-close-popup />
              <q-btn @click="saveItn()" flat label="Confirm" color="primary" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>

        <q-dialog v-model="lowest" transition-show="fade" transition-hide="fade" >
          <q-carousel
            v-model="slide"
            animated
            arrows
            navigation
            navigation-icon="radio_button_unchecked"
            control-type="regular"
            control-color="white"
            control-text-color="grey-8"
            style="max-width: 1350px; height: 530px; border-radius: 20px"
            class="top-car"
          >
            <q-carousel-slide v-for="(cards, index) in rec" :key="index" :name="index-0">
              <p style="font-weight: bold; font-size: 2em; text-align: center" >Recommendation based on lowest budget</p>
              <div class="container-row row-1">
                <ResultCard draggable="true" v-for="card in cards" :key="card.id"
                            :rating-model=card.rating
                            :image-src="'data:image/png;base64,' + card.image"
                            :is-day-activity="card.timeofday" :cost-text=card.price
                            :enable-loc=false
                            :disable-loc=false
                            :weather-loc=true
                            :cal-toggle="card.calendarToggle"
                            :loc-toggle="card.locationToggle"
                            :lat="card.location[0]"
                            :long="card.location[1]"
                            :css-toggle=false
                            :date-text="card.date"
                            :place-text="card.name" :time-text="card.category" @addToEvent="finalAddEvent"></ResultCard>
              </div>
              <q-btn style="margin-top:20px; margin-left: 330px; width: 50%" label="OK" color="primary" v-close-popup />
            </q-carousel-slide>
          </q-carousel>
        </q-dialog>

        <!--      Hotels section  -->
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="scale"
          transition-next="scale">
          <q-tab-panel name="hotels">
            <p>in the hotel</p>
          </q-tab-panel>
        </q-tab-panels>

      </div>
    </div>
  </div>
  <div v-show="printClass" ref="printContent" class="print-container">
    <PlannerCalendar v-for="(ca, index)  in cat" :key="index" :s-date="ca[index].date" :events="events" :height="1150"></PlannerCalendar>
  </div>

</template>

<script type="text/javascript" src="./ResultPage.js"></script>
<style scoped lang="scss" src="./ResultPage.scss"></style>
