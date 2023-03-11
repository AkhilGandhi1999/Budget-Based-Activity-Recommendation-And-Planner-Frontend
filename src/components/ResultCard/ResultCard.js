import { defineComponent } from "vue";
import { ref } from "vue";

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




