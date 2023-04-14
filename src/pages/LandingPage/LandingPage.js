import { defineComponent, ref } from "vue";
import FeatureTimeline from "components/FeatureTimeline/FeatureTimeline.vue";
import SearchBar from "components/SearchBar/SearchBar.vue";
import TileSelection from "components/TileSelection/TileSelection.vue";
import ParallaxScroll from "components/ParallaxScroll/ParallaxScroll.vue";

export default defineComponent({
  name: "LandingPage",
  components: {
    FeatureTimeline,
    SearchBar,
    TileSelection,
    ParallaxScroll
  },
  setup (){
    const attraction_types = ref([{
      id: 0,
      display_name: "Private and Custom Tours",
      actual_name: "private_&_custom_tours",
      disabled: false
    },
      {
        id: 1,
        display_name: "Sightseeing Tours",
        actual_name: "tours_&_sightseeing",
        disabled: false
      },
      {
        id: 2,
        display_name: "Recommended Experiences",
        actual_name: "recommended_experiences",
        disabled: false
      },
      {
        id: 3,
        display_name: "Outdoor Activities",
        actual_name: "outdoor_activities",
        disabled: false
      },
      {
        id: 4,
        display_name: "Food Wine and Nightlife",
        actual_name: "food,_wine_&_nightlife",
        disabled: false
      },
      {
        id: 5,
        display_name: "Family Friendly",
        actual_name: "family_friendly",
        disabled: false
      }, {
        id: 6,
        display_name: "Cultural and Theme Tours",
        actual_name: "cultural_&_theme_tours",
        disabled: false
      },
      {
        id: 7,
        display_name: "Walking and Biking Tours",
        actual_name: "walking_&_biking_tours",
        disabled: false
      },
      {
        id: 8,
        display_name: "Day Trips and Excursions",
        actual_name: "day_trips_&_excursions",
        disabled: false
      }, {
        id: 9,
        display_name: "Water Sports",
        actual_name: "water_sports",
        disabled: false
      }, {
        id: 10,
        display_name: "Cruises, Sailing and Water Tours",
        actual_name: "cruises,_sailing_&_water_tours",
        disabled: false
      }, {
        id: 11,
        display_name: "Transfers and Ground Transport",
        actual_name: "transfers_&_ground_transport",
        disabled: false
      },
      {
        id: 12,
        display_name: "Luxury and Special Occasions",
        actual_name: "luxury_&_special_occasions",
        disabled: false
      },
      {
        id: 13,
        display_name: "Sightseeing, tickets and passes",
        actual_name: "sightseeing_tickets_&_passes",
        disabled: false
      },
      {
        id: 14,
        display_name: "Multiday and Extended Tours",
        actual_name: "multi-day_&_extended_tours",
        disabled: false
      },
      {
        id: 15,
        display_name: "Shore Excursions",
        actual_name: "shore_excursions",
        disabled: false
      },
      {
        id: 16,
        display_name: "Air, Helicopter and Ballon Tours",
        actual_name: "air,_helicopter_&_balloon_tours",
        disabled: false
      },
      {
        id: 17,
        display_name: "Holiday and Seasonal Tours",
        actual_name: "holiday_&_seasonal_tours",
        disabled: false
      },
      {
        id: 18,
        display_name: "Shows, Concerts and Sports",
        actual_name: "shows,_concerts_&_sports",
        disabled: false
      },
      {
        id: 19,
        display_name: "Classes and Workshops",
        actual_name: "classes_&_workshops",
        disabled: false
      }

    ]);
    const nextParam = ref(true)
  return {
    attraction_types,
    nextParam
  }
  },
  data() {
    return {};
  },
  methods:{
    handleValueChanged(value){
      console.log("sdfsdf");
      this.nextParam = value;
    }
  }
});
