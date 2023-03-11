import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "ResultCard",
  setup() {
    return {
      ratingModel: ref(1)
    };
  }
});




