import { defineComponent } from "vue";

// The google Maps API is called and the points are loaded. Yet to figure out how the points would be loaded, for now i have manually put the points. The api key is put
// and the distances are calculated
export default defineComponent({
  name: 'GoogleMap',
  data() {
    return {
      map: null,
      markers: [],
      directions: null
    };
  },
  mounted() {
    // Load the Google Maps API script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAbgnClkTt4o5Nj5pNoKv5sY2gHyxwjVPE&libraries=places,directions`;
    script.defer = true;
    script.async = true;
    script.onload = () => {
      // Initialize the map and markers
      this.initMap();
    };
    document.head.appendChild(script);
  },
  methods: {
    initMap() {
      // Create the map
      this.map = new google.maps.Map(this.$refs.map, {
        mapId: "8e0a97af9386fef", // remove this if it isnt looking good.
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 13
      });

      // Add the markers
      const points = [
        { lat: 37.7749, lng: -122.4194 },
        { lat: 37.7749, lng: -122.4294 },
        { lat: 37.7849, lng: -122.4294 },
        { lat: 37.7849, lng: -122.4194 }
      ];
      for (let i = 0; i < points.length; i++) {
        const marker = new google.maps.Marker({
          position: points[i],
          map: this.map
        });
        this.markers.push(marker);
      }

      // Calculate the directions
      const directionsService = new google.maps.DirectionsService();
      const waypoints = points.slice(1, -1).map(point => ({
        location: point,
        stopover: true
      }));
      const request = {
        origin: points[0],
        destination: points[points.length - 1],
        waypoints: waypoints,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING // if the user wants to use other modes of travel then instead of driving, use any of these walking, bicycling, or transit
      };
      directionsService.route(request, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.directions = result.routes[0].legs[0];
        } else {
          console.error(`Directions request failed: ${status}`);
        }
      });
    }
  }
});
