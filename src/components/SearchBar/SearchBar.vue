<template>
  <div class="row">
    <div class="col">
      <div class="q-pa-md" style="max-width: 600px">
        <q-input v-model="name" label="Name"></q-input>
      </div>
    </div>
    <div class="col">
      <div class="q-pa-md" style="max-width: 600px">
        <div class="q-gutter-md">
          <q-badge color="secondary" multi-line>
            Model: "{{ model }}"
          </q-badge>

          <q-select filled v-model="model" :options="options" label="Province" />
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
  <div class="row justify-end">
      <div class="col-7">
        <q-btn v-on:click="arrowbutton" round color="brown-5" icon="directions"></q-btn>
      </div>
  </div>

</template>

<script type="text/javascript" src="./SearchBar.js"></script>
<style scoped lang="scss" src="./SearchBar.scss"></style>
