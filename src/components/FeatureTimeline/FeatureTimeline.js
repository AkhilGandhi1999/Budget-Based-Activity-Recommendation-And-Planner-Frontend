import { useQuasar } from "quasar";
import { computed } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "FeatureTimeline",
  setup() {
    const $q = useQuasar();
    return {
      layout: computed(() => {
        return $q.screen.lt.sm ? "dense" : ($q.screen.lt.md ? "comfortable" : "loose");
      })
    };
  }
});
