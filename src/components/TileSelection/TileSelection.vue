<template>
  <div class="category-grid" style="margin: auto">
    <div class="card-grid" :class="chosenArray.length === 5 ? 'disabled' : ''">
      <div v-for="(cat, index) in category" :key="index" class="category-row-item-1">
        <q-card class="card">
          <div class="q-card-category-column">
            <div class="q-card-category-row-1 text-weight-bold">
              {{ cat.display_name }}
            </div>
            <div class="q-card-category-row-2">
              <q-card-actions align="center">
                <q-btn flat :disable="cat.disabled" class="btn-text q-btn-custom" @click="AddList(cat.id)">Add</q-btn>
                <q-btn flat :disable="!cat.disabled" class="btn-text q-btn-custom" @click="removeList(cat.id)">Remove
                </q-btn>
              </q-card-actions>
            </div>
          </div>
        </q-card>
      </div>
    </div>


    <div class="category-row-item-2">
      <div class="text-weight-bold item2" v-for="(item, index) in chosenArray" :key="index">
        {{ item.display_name }}
        <q-btn icon="highlight_off" flat square v-if="chosenArray.length === 5" @click="removeChosen(index)"></q-btn>
        <div class="q-px-sm q-pb-sm">
          <q-slider
            class="q-mt-lg"
            v-model="item.rating"
            color="#3F00FF"
            :thumb-color="item.rating === 0 ? 'grey' : 'teal'"
            snap
            :min="0"
            :max="5"
            :step="1"
            marker-labels
            switch-marker-labels-side
          >
            <template v-slot:marker-label-group="{ markerMap }">
              <div
                class="row items-center no-wrap"
                :class="markerMap[item.rating].classes"
                :style="markerMap[item.rating].style"
              >
                <q-icon
                  v-if="item.rating === 0"
                  size="xs"
                  color="#3F00FF"
                  name="star_outline"
                />

                <template v-else>
                  <q-icon
                    v-for="i in Math.floor(item.rating)"
                    :key="i"
                    size="xs"
                    color="#3F00FF"
                    name="star_rate"
                  />

                  <q-icon
                    v-if="item.rating > Math.floor(item.rating)"
                    size="xs"
                    color="#3F00FF"
                    name="star_half"
                  />
                </template>
              </div>
            </template>
          </q-slider>
        </div>
      </div>

    </div>
  </div>
</template>

<script type="text/javascript" src="./TileSelection.js"></script>
<style scoped lang="scss" src="./TileSelection.scss"></style>
