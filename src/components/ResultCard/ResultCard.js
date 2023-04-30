import { defineComponent, onMounted, ref } from "vue";
import WeatherCard from "components/Weather/WeatherAPI.vue";
import { useStore } from "vuex";

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
    "enableLoc",
    "disableLoc",
    "weatherLoc",
    "calToggle",
    "locToggle",
    "cssToggle"
  ],
  setup() {
    const store = useStore();
    return {
      store,
      fixed: ref(false),
      calendar: ref(false),
      end_time: ref("10:56"),
      start_time: ref("10:56")
    };

  },
  methods: {
    addToLocation() {
      // this.store.dispatch("planner/updateToggleLoc", this.placeText);
      this.store.dispatch("planner/updateAddLocation", this.placeText);
    },
    removeFromLocation(){
      this.store.dispatch("planner/updateToggleLoc", this.placeText);
      this.store.dispatch("planner/updateRemoveLocation", this.placeText);
    },
    addEventInCal() {
      const startDate = `${this.dateText}T${this.start_time}`;
      const endDate = `${this.dateText}T${this.end_time}`;

      // trigger disable event

      this.store.dispatch("planner/updateToggleCal", this.placeText);

      const event = {
        "title": this.placeText,
        "start": new Date(startDate),
        "end": new Date(endDate),
        "class": "sport",
        "content": "Budget: " + this.costText + "$"
      };
      this.$emit("addToEvent", event, this.costText);
    }
  }
});




