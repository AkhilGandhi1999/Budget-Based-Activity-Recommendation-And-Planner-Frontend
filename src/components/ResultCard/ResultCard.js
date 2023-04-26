import { defineComponent, ref } from "vue";
import WeatherCard from "components/Weather/WeatherAPI.vue";

/*
* todo : Dynamic Image case for main image
*        Format for date
*        truncate logic
* */

export default defineComponent({
  name: "ResultCard",
  components: { WeatherCard },
  props: [
    "ratingModel",
    "isDayActivity",
    "dateText",
    "placeText",
    "timeText",
    "costText"],
  mounted() {
    console.log(this.ratingModel);
    console.log(this.isDayActivity);
    console.log(this.dateText);
    console.log(this.placeText);
    console.log(this.timeText);
    console.log(this.costText);
  },
  setup() {
    return {
      fixed: ref(false)
    };
  }
});




