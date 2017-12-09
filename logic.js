// Creating map object
var map = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 7
  });
  
// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
"access_token=pk.eyJ1IjoiaGVsaWNvbjEyMyIsImEiOiJjamFrYTAzdDAyaG93MnhxdXlycm1xbHk1In0.RZ02ssPS4DfeGvM2sx7INg").addTo(map);

var link = "gz_2010_us_040_00_500k.json"; 

function chooseColor(NAME) {
  switch (NAME) {
    case "New Jersey":
      return "yellow";
    default:
      return "black";
  }
}

// Grabbing our GeoJSON data..
d3.json(link, function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJSON(data, {
    style: function(feature) {
      return {
        color: "white",
        fillColor: chooseColor(feature.properties.NAME),
        fillOpacity: 0.5,
        weight: 1.5
      };
    }
  }).addTo(map);
});