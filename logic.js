mapboxgl.accessToken = 'pk.eyJ1IjoiaGVsaWNvbjEyMyIsImEiOiJjamFrYTAzdDAyaG93MnhxdXlycm1xbHk1In0.RZ02ssPS4DfeGvM2sx7INg';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-96, 37.8],
    zoom: 3
  });

// Creating map object
var map = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 7.5
  });
  
// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/helicon123/cjb1i52fgqpi12rkaruc9jlkb/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGVsaWNvbjEyMyIsImEiOiJjamFrYTAzdDAyaG93MnhxdXlycm1xbHk1In0.RZ02ssPS4DfeGvM2sx7INg").addTo(map);

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
  L.geoJson(data, {
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

var cities = [{
  location: [39.924045, -75.037583],
  name: "CHERRY HILL"
},
{
  location: [41.3017884, -72.7093312],
  name: "GUILFORD"
},
{
  location: [40.5549767, -74.3165411],
  name: "WOODBRIDGE"
}
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
    .bindPopup("<h1>" + city.name + "</h1>")
    .addTo(map);
}