import { defineComponent } from "vue";
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import QBtn from "quasar";
import QPopup from "quasar";
export default defineComponent({
  name: "PlannerCalendar",
  components: { QBtn, VueCal },
  data () {
    return {
      title: '',
      start: '',
      end: '',
      events: [],
      showDialog: false,
      deletable: false,
      resizable: false,
      draggable: false,
      color: '#0077c2',
    }
  },

  methods: {
    showPopup() {
      this.popupVisible = true
    },

    openDialog() {
      this.showDialog = true;
    },
    closeDialog() {
      // reset form data
      this.title = '';
      this.start = '';
      this.end = '';
      this.showDialog = false;
    },
    addEvent(){
      const newEvent = {
        title: this.title,
        start: new Date(this.start),
        end: new Date(this.end),
        showDeleteButton: false,

      };
      this.events.push(newEvent);
      // reset form data
      this.title = '';
      this.start = '';
      this.end = '';
      this.showDialog = false;

    },
    showDeleteButton(event) {
      // Set showDeleteButton property to true on the clicked event
      this.events.forEach(evt => {
        evt.showDeleteButton = evt.id === event.id;
      });
    },
    getEventClass(event) {
      return event.class;
    },
  }

});
