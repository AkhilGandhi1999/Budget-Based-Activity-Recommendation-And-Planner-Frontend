<template>

  <div class="container-grid">
    <!--    row 1 -->
    <div class="container-row">
      <ResultCard v-for="card in cardObject" :key="card.id" :rating-model=card.ratingModel
                  :is-day-activity="card.isDayActivity" :cost-text=card.costText
                  :place-text="card.placeText" :time-text="card.timeText"></ResultCard>
    </div>

    <!--    row 2-->
    <div class="container-row">
      <ResultCard v-for="card in cardObject" :key="card.id" :rating-model=card.ratingModel
                  :is-day-activity="card.isDayActivity" :cost-text=card.costText
                  :place-text="card.placeText" :time-text="card.timeText"></ResultCard>
    </div>
  </div>
</template>

<script type="text/javascript" src="./ResultPage.js"></script>
<style scoped lang="scss" src="./ResultPage.scss"></style>
