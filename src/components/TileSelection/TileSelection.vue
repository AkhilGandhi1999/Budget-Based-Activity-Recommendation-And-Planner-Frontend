<template>
  <div style="margin: auto" class="q-pa-md row items-start q-gutter-md">
  <q-card v-for="cat in attraction_types" :key="cat" class="my-card">
    <q-card-section class="bg-grey-8 text-white">
      <div class="text-h6">{{ cat.display_name }}</div>
    </q-card-section>

    <q-card-actions align="center">
      <q-btn flat @click="abc(cat.id)">Add</q-btn>
      <q-btn flat @click="removeList()">Remove</q-btn>
    </q-card-actions>
  </q-card>
    <p v-for="(item, index) in chosenArray" :key="index">{{ item }}</p>
</div>
</template>

<script type="text/javascript" src="./TileSelection.js"></script>
<style scoped lang="scss" src="./TileSelection.scss"></style>
