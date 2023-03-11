<template>
  <div v-if="pageOne">
    <LandingPage></LandingPage>
  </div>
  <div v-if="pageTwo">
    <ResultPage></ResultPage>
  </div>
</template>


<style lang="scss" src="./MainLayout.scss"></style>
<script type="text/javascript" src="./MainLayout.js"></script>
