import { defineComponent } from "vue";
import { ref } from 'vue'
import axios from "axios";
export default defineComponent({
  name: "SearchBar",
  setup () {

    const visible = ref(true);
    // eslint-disable-next-line vue/no-setup-props-destructure
    return {
      visible,
      name:ref(""),
      date: ref(""),
      date2:ref(""),
      model: ref(""),
      options: ref([
        'Alberta', 'British Columbia', 'Twitter', 'Apple', 'Oracle'
    ]),
      params:{
      province:'british_columbia',low: 115.0,
        high: 0.0,
        cat_rating: {"private_&custom_tours": 4.0, "luxury&special_occasions": 3.0, "sightseeing_tickets&passes": 1.0, "multi-day&extended_tours": 3.0, "walking&_biking_tours": 1.0},
        begin_date: '2023-04-05', end_date: '2023-04-06'

      }
    }
  },
  methods:{
    arrowbutton(){
      this.visible = false;
      this.$emit('visibleChanged', this.visible)
      console.log("Startdate-"+this.date+ "EndDate-"+this.date2)
      const inputDate = this.date;
      const parts = inputDate.split('/');
      const year = parts[0];
      const month = String(parts[1]).padStart(2, '0');
      const day = String(parts[2]).padStart(2, '0');
      const formattedstartDate = `${year}-${month}-${day}`;

      const inputendDate = this.date2;
      const parts2 = inputendDate.split('/');
      const year2 = parts2[0];
      const month2 = String(parts2[1]).padStart(2, '0');
      const day2 = String(parts2[2]).padStart(2, '0');
      const formattedendDate = `${year2}-${month2}-${day2}`;


      this.params.low = this.low;

      // console.log(formattedstartDate);
      // console.log(formattedendDate);
      // axios.post("http://13.56.207.186:5000/categories/get_categories", {
      //   province:this.model,low: 115.0,
      //   high: 205.0,
      //   cat_rating: {"private_&custom_tours": 4.0, "luxury&special_occasions": 3.0, "sightseeing_tickets&passes": 1.0, "multi-day&extended_tours": 3.0, "walking&_biking_tours": 1.0},
      //   begin_date: formattedstartDate, end_date: formattedendDate
      //
      // }).then(response=>console.log(response)).catch(error=>console.log(error))

    }
  }
});
