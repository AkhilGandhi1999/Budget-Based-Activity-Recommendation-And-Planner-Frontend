import { defineComponent } from "vue";
import FeatureTimeline from "components/FeatureTimeline/FeatureTimeline.vue";
import SearchBar from "components/SearchBar/SearchBar.vue";

export default defineComponent({
  name: "LandingPage",
  components: {
    FeatureTimeline,
    SearchBar
  },
  data() {
    return {};
  }
});
