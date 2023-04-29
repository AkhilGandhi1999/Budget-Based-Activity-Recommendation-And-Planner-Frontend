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
    "enableLoc",
    "disableLoc",
    "weatherLoc"
  ],
  setup() {
    return {
      fixed: ref(false),
      calendar: ref(false),
      end_time: ref('10:56'),
      start_time: ref('10:56')
    };
  },
  methods: {
    addEventInCal(){
      const startDate = `${this.dateText}T${this.start_time}`
      const endDate = `${this.dateText}T${this.end_time}`
      console.log(startDate);
      const event = {
        "title": this.placeText,
        "start": new Date(startDate),
        "end": new Date(endDate),
        "class": 'sport',
        "content": 'Budget: ' + this.costText + '$'
      }
      this.$emit('addToEvent', event, this.costText);
    }
  }
});




