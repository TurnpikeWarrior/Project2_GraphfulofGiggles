// Creating map object
var map = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 7.5
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

  console.log("Should be first")
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data, {
    style: function(feature) {
      return {
        color: "white",
        fillColor: chooseColor(feature.properties.NAME),
        fillOpacity: 0.15,
        weight: 1.5
      };
    }
  }).addTo(map);

  var stores = [{
  location: [40.5549767, -74.037583],
  name: "CHERRY HILL",
  state: "NJ",
  radius: 20000,
  color: "red"
},
{
  location: [41.3017884, -72.7093312],
  name: "GUILFORD",
  state: "CT",
  radius: 100000,
  color: "blue"
},
 {
  location: [40.5549767, -74.3165411],
  name: "WOODBRIDGE",
  state: "NJ",
  radius: 20000,
  color: "cyan"
}
];

// Loop through the stores array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < stores.length; i++) {
  console.log("SECOND ")
  var store = stores[i];
  console.log(store.location)

  L.circle(store.location, {
    fillColor: store.color,
    color: "blue",
    width: 0.2,
    weight: 0.01,
    fillOpacity: 0.50,
    radius: store.radius
    })
    .bindPopup("<h4>" + "Radius" + "</h4> <hr> <h5>" + store.name + ", " + store.state + "</h5>")
    .addTo(map);

    L.circle(store.location, {
    color: "blue",
    fillColor: "blue",
    fillOpacity: 0.50,
    radius: store.radius / 1000
    })
    .bindPopup("<h4>" + "Bed Bath & Beyond @ " + "</h4> <hr> <h5>" + store.name + ", " + store.state + "</h5>")
    .addTo(map);
}
});

// L.marker([40.8550,-74.8507], {
//   draggable: true,
//   title: "My First Marker"
// }).addTo(myMap);

// marker.bindPopup("Hello there!");


// var circle = L.circle([40.8540, -74.8291], 50000).addTo(map);
// L.circle(store.location,30000)
// var centerMarker = L.marker(40.5549767, -74.3165411);
// centerMarker.on('click', selectMarker);
// centerMarker.addTo(map);

