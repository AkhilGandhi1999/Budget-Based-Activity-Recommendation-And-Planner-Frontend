
<template>
  <div style="height: 750px">
    <vue-cal :time-step="60" :events="events" @event-click="showDeleteButton"
             :editable-events="{ title: true, drag: true, resize: true, delete: true, create: false }"
             style="width: 80%; margin-right: auto; margin-left: auto; background-color:#C3EEFA"
             class=" vuecal vuecal--blue-theme ex--disable-views vuecal--full-height-delete"
             :time="true" active-view="day" :disable-views="['years', 'year', 'month','week']">
    </vue-cal>
  </div>

  <div>
    <div style= "display: flex; justify-content: center; margin: 20px 0; ">
      <q-btn @click="openDialog" class="my-btn">Add Event</q-btn>
    </div>
    <q-dialog v-model="showDialog">
      <q-card>
        <q-card-section>
          <form @submit.prevent="addEvent">
            <div>
              <label for="start-date">Start Date:</label>
              <q-input type="datetime-local" id="start-date" v-model="start"></q-input>
            </div>
            <div>
              <label for="end-date">End Date:</label>
              <q-input type="datetime-local" id="end-date" v-model="end"></q-input>
            </div>
            <div>
              <label for="title">Title:</label>
              <q-input type="text" id="title" v-model="title"></q-input>
            </div>
            <q-btn type="submit" label="Add Event" @submit.prevent="addEvent" ></q-btn>
            <q-btn label="Cancel" @click="closeDialog"></q-btn>

          </form>
        </q-card-section>
      </q-card>
    </q-dialog>
<!--    <PlannerCalendar :events="events"></PlannerCalendar>-->
  </div>

</template>
<script type="text/javascript" src="./PlannerCalendar.js"></script>
<style scoped lang="scss" src="./PlannerCalendar.scss"></style>

