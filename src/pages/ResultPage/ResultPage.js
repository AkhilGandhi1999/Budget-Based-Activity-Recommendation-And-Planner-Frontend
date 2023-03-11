import { defineComponent } from "vue";
import ResultCard from "components/ResultCard/ResultCard.vue";


export default defineComponent({
  name: "ResultPage",
  components: { ResultCard },
  data() {
    return {
      cardObject: [
        {
          ratingModel: 3,
          isDayActivity: true,
          dateText: "18 Feb 2023",
          placeText: "Los Angeles",
          timeText: "40 MIN",
          costText: 350
        },
        {
          ratingModel: 5,
          isDayActivity: false,
          dateText: "18 Feb 2023",
          placeText: "Los Angeles",
          timeText: "10 MIN",
          costText: 250
        },
        {
          ratingModel: 2,
          isDayActivity: true,
          dateText: "18 Feb 2023",
          placeText: "Los Angeles",
          timeText: "40 MIN",
          costText: 350
        },
        {
          ratingModel: 1,
          isDayActivity: false,
          dateText: "18 Feb 2023",
          placeText: "Los Angeles",
          timeText: "40 MIN",
          costText: 150
        }
      ]
    };
  }
});
