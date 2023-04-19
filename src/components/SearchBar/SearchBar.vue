<template >
 <div v-if="visible" style="width: 800px;border-radius: 30px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); padding: 10px; margin: auto">
    <div class="row">
      <div class="col">
        <div class="q-pa-md" style="max-width: 600px">
          <q-input v-model="name" label="Name"></q-input>
        </div>
      </div>
      <div class="col">
        <div class="q-pa-md" style="max-width: 600px">
          <div class="q-gutter-md">
<!--            <q-badge color="secondary" multi-line>-->
<!--&lt;!&ndash;              Model: "{{ model }}"&ndash;&gt;-->
<!--            </q-badge>-->

            <q-select filled v-model="options.value" :options="options" label="Province" emit-value map-options/>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">

        <div class="q-pa-md" style="max-width: 600px">
          <q-input filled v-model="date" mask="date" :rules="['date']" label="Start-Date">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
      <div class="col">
        <div class="q-pa-md" style="max-width: 600px">
          <q-input filled v-model="date2" mask="date" :rules="['date']" label="End-Date">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="date2">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
    </div>



   <!--
Forked from:
https://quasar.dev/vue-components/slider#example--with-qitem
-->

     <div class="q-pa-md">
       <q-list dense>
         <q-item>
           <q-item-section avatar>
             <q-icon color="blue" name="USD $"></q-icon>
           </q-item-section>
           <q-item-section>
             <q-range
               v-model="range"
               :min="0"
               :max="1000"
               label
               drag-range
             ></q-range>
           </q-item-section>
         </q-item>

       </q-list>
       <div class="row justify-end">
         <div class="col-7">
           <q-btn v-on:click="arrowbutton" color="primary" label="Next"></q-btn>
<!--           <q-btn v-on:click="arrowbutton" round color="brown-5" icon="directions"></q-btn>-->
         </div>
       </div>
     </div>


  </div>
</template>

<script type="text/javascript" src="./SearchBar.js"></script>
<style scoped lang="scss" src="./SearchBar.scss"></style>
