import { defineComponent } from "vue";

/*
* todo : Dynamic Image case for main image
*        Format for date
* */

export default defineComponent({
  name: "ResultCard",
  props: [
    "ratingModel",
    "isDayActivity",
    "dateText",
    "placeText",
    "timeText",
    "costText"],
  setup() {
    return {};
  }
});




