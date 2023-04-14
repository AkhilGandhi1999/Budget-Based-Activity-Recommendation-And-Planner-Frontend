import { defineComponent, onMounted, ref } from "vue";
import ResultCard from "components/ResultCard/ResultCard.vue";
import draggable from "vuedraggable";
import PlannerCalendar from "components/PlannerCalendar/PlannerCalendar.vue";
import { useStore } from "vuex";
import ParallaxScroll from "components/ParallaxScroll/ParallaxScroll.vue";
/*
* todo : Column logic
*        Tabs panel switch
* */

export default defineComponent({
  name: "ResultPage",
  components: { ResultCard, draggable, PlannerCalendar, ParallaxScroll },
  setup() {
    const cardObjectItems = ref([
      {
        id: 0,
        ratingModel: 3,
        isDayActivity: true,
        dateText: "18 Feb 2023",
        placeText: "Los Angeles",
        timeText: "40 MIN",
        costText: 350,
        list: 1
      },
      {
        id: 1,
        ratingModel: 5,
        isDayActivity: false,
        dateText: "18 Feb 2023",
        placeText: "Los Angeles",
        timeText: "10 MIN",
        costText: 250,
        list: 1
      },
      {
        id: 2,
        ratingModel: 2,
        isDayActivity: true,
        dateText: "18 Feb 2023",
        placeText: "Los Angeles",
        timeText: "40 MIN",
        costText: 350,
        list: 1
      },
      {
        id: 3,
        ratingModel: 1,
        isDayActivity: false,
        dateText: "18 Feb 2023",
        placeText: "Los Angeles",
        timeText: "40 MIN",
        costText: 150,
        list: 2
      }
    ]);

    const store = useStore();
    let globalBudget = ref("");
    onMounted(() => {
      globalBudget.value = store.getters["planner/getBudget"];
    });

    const startDrag = (event, card) => {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemID", card.id);
    };

    const onDrop = (event, list) => {
      const itemID = event.dataTransfer.getData("itemID");
      const item = cardObjectItems.value.find((item) => item.id == itemID);
      console.log(list);
      item.list = list;
    };

    const cardObjects = (list) => {
      return cardObjectItems.value.filter((item) => item.list == list);
    };
    return {
      cardObjects,
      onDrop,
      startDrag,
      globalBudget,
      autoplay: ref(true),
      slide: ref("style"),
      tab: ref('mails')

    };
  }
});
