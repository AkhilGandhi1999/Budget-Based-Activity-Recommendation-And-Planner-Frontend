import { defineComponent } from "vue";
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
export default defineComponent({
  name: "PlannerCalendar",
  components: { VueCal },
  data(){
    return{
      events: [
        {
          start: '2023-04-03 14:00',
          end: '2023-04-03 18:00',
          title: 'Need to go shopping',
          icon: 'shopping_cart', // Custom attribute.
          class: 'leisure'
        },
        {
          start: '2023-04-03 10:00',
          end: '2023-04-03 15:00',
          title: 'Golf with John',
          icon: 'golf_course', // Custom attribute.
          class: 'sport'
        }
      ]
    }
  }
});
