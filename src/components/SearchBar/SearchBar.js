import { computed, defineComponent } from "vue";
import { ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "SearchBar",

  beforeUnmount() {
    this.arrowButton();
  },
  setup() {

    const store = useStore();
    let range = ref({
      min: 100,
      max: 500
    });
    return {
      store,
      range,
      name: ref(""),
      date: ref(""),
      date2: ref(""),
      model: ref(""),
      amount: ref(),
      options: ref([
        {
          label: "Alberta", value: "alberta"
        }, {
          label: "British Columbia", value: "british_columbia"
        }, {
          label: "Manitoba", value: "alberta"
        }, {
          label: "Nunavut", value: "alberta"
        }, {
          label: "Ontario", value: "alberta"
        }
      ]),
      params: {
        province: "british_columbia", low: 115.0,
        high: 0.0,
        begin_date: "2023-04-05", end_date: "2023-04-06"
      },
      priceLabelLeft: computed(() => ` ${range.value.min} $`),
      priceLabelRight: computed(() => `${range.value.max} $`)
    };
  },
  methods: {
    arrowButton() {
      const inputDate = this.date;
      const parts = inputDate.split("/");
      const year = parts[0];
      const month = String(parts[1]).padStart(2, "0");
      const day = String(parts[2]).padStart(2, "0");
      const formattedStartDate = `${year}-${month}-${day}`;

      const inputEndDate = this.date2;
      const parts2 = inputEndDate.split("/");
      const year2 = parts2[0];
      const month2 = String(parts2[1]).padStart(2, "0");
      const day2 = String(parts2[2]).padStart(2, "0");
      const formattedEndDate = `${year2}-${month2}-${day2}`;

      // setting the params json for axios request.
      this.params.province = this.options.value;
      this.params.low = this.range.min;
      this.params.high = this.range.max;
      this.params.begin_date = formattedStartDate;
      this.params.end_date = formattedEndDate;
      console.log(this.params);

      // Store the values in Vuex.
      this.store.dispatch("planner/updateBudget", this.params.high);
      this.store.dispatch("planner/updateModelInit", this.params);

      let demo = this.store.getters["planner/getBudget"];
      console.log(demo);
      let demo1 = this.store.getters["planner/getModelInit"];
      console.log(demo1);

      // console.log(formattedstartDate);
      // console.log(formattedendDate);
      // axios.post("http://13.56.207.186:5000/categories/get_categories", {
      //   province:this.options.value,low: this.range.min,
      //   high: this.range.max,
      //   cat_rating: {"private_&custom_tours": 4.0, "luxury&special_occasions": 3.0, "sightseeing_tickets&passes": 1.0, "multi-day&extended_tours": 3.0, "walking&_biking_tours": 1.0},
      //   begin_date: formattedstartDate, end_date: formattedendDate
      //
      // }).then(response=>console.log(response)).catch(error=>console.log(error))

    }
  }
});
