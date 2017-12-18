// Creating map object
var map = L.map("map", {
  center: [40.7128, -74.0059],
  zoom: 11
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
  "access_token=pk.eyJ1Ijoia2pnMzEwIiwiYSI6ImNpdGRjbWhxdjAwNG0yb3A5b21jOXluZTUifQ.T6YbdDixkOBWH_k9GbS8JQ").addTo(map);

var link = "GeoJZipcodesforNJBorders.geojson";

selectedZips = ["07309", "08869", "088534", "07104", "08559"];

// Function that will determine opacity based on whether we see the selection
function chooseOpacity(zipcode) {

  if (selectedZips.indexOf(zipcode) > -1)
  {
    return 1.0;
  }
  else {
    return 0.0;
  }
}

// Grabbing our GeoJSON data..
d3.json(link, function(data) {
  // Creating a geoJSON layer with the retrieved data
  L.geoJson(data, {

    // Base Map Style
    style: function(feature) {
      return {
        color: "gray",
        fillColor: "red",
        fillOpacity: chooseOpacity(feature.properties.ZCTA5CE10),
        // stroke: false,
        weight: 0.5
      }
    },

    // Called on each feature
    onEachFeature: function(feature, layer) {
      // Set mouse events to change map styling
      // layer.on({
      //   // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
      //   mouseover: function(event) {
      //     layer = event.target;
      //     layer.setStyle({
      //       fillOpacity: 0.9
      //     });
      //   },
      //   // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
      //   mouseout: function(event) {
      //     layer = event.target;
      //     layer.setStyle({
      //       fillOpacity: 0.5
      //     });
      //   },
      //   // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
      //   click: function(event) {
      //     map.fitBounds(event.target.getBounds());
      //   }
      // });
      // Giving each feature a pop-up with information pertinent to it
      layer.bindPopup("<h1>" + feature.properties.ZCTA5CE10 + "</h1>");
    }
  }).addTo(map);
});
