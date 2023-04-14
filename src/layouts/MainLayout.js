import { defineComponent, ref } from "vue";
import LandingPage from "pages/LandingPage/LandingPage.vue";
import ResultPage from "pages/ResultPage/ResultPage.vue";
import axios from 'axios';
import { useStore } from "vuex";



export default defineComponent({
  name: "MainLayout",
  components: { LandingPage, ResultPage },
  setup() {

    // loader setup data
    const visible = ref(false)
    const showSimulatedReturnData = ref(false)
    const store = useStore();

    //  API call setup

    const url = 'http://13.56.207.186:5000/categories/get_categories';
    let pageOne = ref(false);
    let pageTwo = ref(true);

     async function resultPage() {
       const data = {
         "province": "british_columbia",
         "low": 115.0,
         "high": 205.0,
         "cat_rating": {
           "private_&custom_tours": 4.0,
           "luxury&special_occasions": 3.0,
           "sightseeing_tickets&passes": 1.0,
           "multi-day&extended_tours": 3.0,
           "walking&_biking_tours": 1.0
         },
         "begin_date": "2023-04-05",
         "end_date": "2023-04-06"
       };

       visible.value = true
       showSimulatedReturnData.value = false

       try {
         const response = await axios.post(url, data);
         console.log("is it printing")
         console.log(response.data);
         pageOne.value = false;
         pageTwo.value = true;
         visible.value = false
         await store.dispatch("planner/updateBudget", data.high);
         await store.dispatch("planner/updateRecCard", response.data);
         showSimulatedReturnData.value = true
       } catch (error) {
         console.error(error);
       }
    };
    return {
      visible,
      showSimulatedReturnData,
      resultPage,
      pageTwo,
      pageOne
    };
  }
});
