// import axios from 'axios';
// import { defineComponent } from "vue";
// import '@fortawesome/fontawesome-free/css/all.css'
// import '@fortawesome/fontawesome-free/js/all.js'
//
// export default defineComponent({
//   name: "WeatherCard",
//   data() {
//     return {
//       location: "",
//       temp: 0,
//       condition: "",
//       feelsLike: 0,
//       humidity: 0,
//       wind: 0,
//       datetime: "",
//     };
//   },
//   mounted() {
//     this.getWeatherData();
//   },
//   methods: {
//     getWeatherData() {
//       const options = {
//         method: "GET",
//         url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
//         params: {
//           aggregateHours: "24",
//           location: "Washington,DC,USA",
//           contentType: "json",
//           unitGroup: "us",
//           shortColumnNames: "0",
//         },
//         headers: {
//           "X-RapidAPI-Key": "66c541bacbmsh85cf0b8b88f61d5p120a8fjsn8b4e49b92bef",
//           "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
//         },
//       };
//       axios
//         .request(options)
//         .then((response) => {
//           const data = response.data;
//           const currentConditions = data.locations[options.params.location].currentConditions;
//            this.location = data.locations[options.params.location].id;
//            this.datetime = currentConditions.datetime;
//            this.temp = currentConditions.temp;
//            this.condition = currentConditions.conditions;
//            this.feelsLike = currentConditions.heatindex || currentConditions.windchill || this.temp;
//            this.humidity = currentConditions.humidity;
//            this.wind = currentConditions.wspd;
//           console.log(currentConditions)
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     },
//   },
// });

import axios from 'axios';
import { defineComponent } from "vue";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

export default defineComponent({
  name: "WeatherCard",
  data() {
    return {
      location: "",
      temp: 0,
      condition: "",
      feelsLike: 0,
      humidity: 0,
      wind: 0,
      datetime: "",
    };
  },
  props:["lat", "long"],
  mounted() {
    this.getWeatherData();
  },
  methods: {
    getWeatherData() {
      const options = {
        method: 'GET',
        url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
        params: {
          lat: this.lat,
          lon: this.long
        },
        headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': '9ed674538amshdcb9838f5a86f98p11ff43jsnbbfd1b11af6d',
          'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
      };

      axios
        .request(options)
        .then((response) => {
          const data = response.data;
          const currentConditions = data.data[0];
          this.location = `${currentConditions.city_name}`;
          this.datetime = currentConditions.observation_time;
          this.temp = currentConditions.temp;
          this.condition = currentConditions.weather.description;
          this.feelsLike = currentConditions.app_temp || currentConditions.temp;
          this.humidity = currentConditions.rh;
          this.wind = currentConditions.wind_spd;
          console.log(data)
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
