import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TileSelection",
  components: {},
  setup() {
    // const attraction_types = ref([
    //   "private_&_custom_tours",
    //   "tours_&_sightseeing",
    //   "recommended_experiences",
    //   "outdoor_activities",
    //   "food,_wine_&_nightlife",
    //   "family_friendly",
    //   "cultural_&_theme_tours",
    //   "walking_&_biking_tours",
    //   "day_trips_&_excursions",
    //   "water_sports",
    //   "cruises,_sailing_&_water_tours",
    //   "transfers_&_ground_transport",
    //   "luxury_&_special_occasions",
    //   "sightseeing_tickets_&_passes",
    //   "multi-day_&_extended_tours",
    //   "shore_excursions",
    //   "air,_helicopter_&_balloon_tours",
    //   "holiday_&_seasonal_tours",
    //   "shows,_concerts_&_sports",
    //   "classes_&_workshops"]);
    const attraction_types = ref([{
      id: 0,
      display_name: "Family",
      actual_name: "family"
    }]);

    const chosenArray = ref([]);
    const abc = (id) => {
      console.log(id);
      chosenArray.value.push(id);
    };

    const removeList = () => {
        chosenArray.value.pop();
    };
    return {
      attraction_types,
      abc,
      chosenArray,
      removeList
    };
  }
});
