<template>
  <div style="height: 750px">
    <vue-cal :time-step="60"   :events="events"
             style="width: 80%; margin-right: auto; margin-left: auto;" class="vuecal vuecal--green-theme ex--disable-views" :time="true" active-view="day" :disable-views="['years', 'year', 'month','week']" />
  </div>
</template>

<script type="text/javascript" src="./PlannerCalendar.js"></script>
<style scoped lang="scss" src="./PlannerCalendar.scss"></style>
