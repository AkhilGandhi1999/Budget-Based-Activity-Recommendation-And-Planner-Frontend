import { defineComponent } from "vue";
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

export default defineComponent({
  name: "PlannerCalendar",
  components: { VueCal },
  props: ["events", "height","sDate"],
  data() {
    return {};
  },
  methods: {
    delEvent (emittedEventName, params) {
      let budgetString = params.content;
      let budNumber = parseFloat(budgetString.match(/\d+(\.\d+)?/)[0]);
      this.$emit("removeFromCal", params.title, budNumber);
    },
  }
});
