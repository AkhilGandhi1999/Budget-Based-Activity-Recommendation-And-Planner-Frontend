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
    "imageSrc",
    "isDayActivity",
    "dateText",
    "placeText",
    "timeText",
    "costText",
    "lat",
    "long",
  ],
  setup() {
    return {
      fixed: ref(false),
      calendar: ref(false),
      time: ref('10:56'),
    };
  }
});




