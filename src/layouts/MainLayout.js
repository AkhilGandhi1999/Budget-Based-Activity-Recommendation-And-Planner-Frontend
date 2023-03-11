import { defineComponent } from "vue";
import LandingPage from "pages/LandingPage/LandingPage.vue";
import ResultPage from "pages/ResultPage/ResultPage.vue";

export default defineComponent({
  name: "MainLayout",
  components: { LandingPage, ResultPage },
  data() {
    return {
      pageOne: false,
      pageTwo: true
    };
  }
});
