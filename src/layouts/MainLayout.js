import { defineComponent, ref } from "vue";
import LandingPage from "pages/LandingPage/LandingPage.vue";
import ResultPage from "pages/ResultPage/ResultPage.vue";
import axios from "axios";
import { useStore } from "vuex";


export default defineComponent({
  name: "MainLayout",
  components: { LandingPage, ResultPage },
  setup() {

    // loader setup data
    const visible = ref(false);
    const store = useStore();

    //  API call setup

    const url = ["http://54.219.163.251:5000/categories/get_categories",
      "http://54.219.163.251:5000/hotels/get_hotel_recommandations"];
    let pageOne = ref(false);
    let pageTwo = ref(true);

    async function callModel(pageSwitch) {
      const tempCat = store.getters["planner/getModelParam"];
      const tempHotel = store.getters["planner/getModelParam"];
      const Cat = JSON.parse(tempCat[0]);
      const Hotel = JSON.parse(tempHotel[0]);
      visible.value = true;

      try {
        const requests = [
          axios.post(url[0], Cat)
          // axios.post(url[1], Hotel)
        ];
        const response = await Promise.all(requests);
        console.log(response[0].data);
        pageOne.value = !pageSwitch;
        pageTwo.value = pageSwitch;
        visible.value = false;
        // await store.dispatch("planner/updateRecCard", response.data);
      } catch (error) {
        console.error(error);
      }
    }

    function togglePage(pageSwitch) {
      pageOne.value = pageSwitch;
      pageTwo.value = !pageSwitch;
    }

    return {
      visible,
      callModel,
      pageTwo,
      pageOne,
      togglePage
    };
  }
});
