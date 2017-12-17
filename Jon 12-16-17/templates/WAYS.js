
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



Plotly.d3.json('/allStores', function(error, cities){
   if (error) return console.warn('WHAT?');
   console.log(cities.length);

    for (var i = 0; i < cities.length; i++) {
      var city = cities[i];
      console.log(city.Location)
      
      // L.marker(city.location)
      //   .bindPopup("<h1>" + city.name + "</h1>")
      //   .addTo(map);
    var marker = new L.marker(city.Location).addTo(map).on('click', onClick);
        marker.key = city.StoreName;
        marker.loc = city.Location;
    }
});

var TradeArea=document.getElementById("TradeArea")

//==========================onClickStart========================================================================================
    function onClick(e) {
      // console.log(city.Location+"JJJJJ")
     
      

      
      // var TradeArea=document.getElementById("TradeArea")
      var TradeArea=20
      
      var stName=this.key;
    // alert(stName); // i can expect my keys here

    //  console.log("in 76 " + stName);
      Plotly.d3.json('/allZips?Store='+stName+'&Scope='+TradeArea, function(error, zipList) {
        if (error) return console.warn(error);
          console.log(zipList);

        

        setTimeout(Demographic, 0);

        function Demographic(){
          $(document).ready(function(){
                    $('#data-table').DataTable({
                        destroy: true,
                        searching: true,
                        retrieve:true,
                        // columns.render:true,
                        data: zipList,  
                        columns: [
                            {data:"City" },
                            {data:"Density" },
                            // {data:"HouseOfUnits" },
                            // {data:"LandArea" },
                            // {data:"Latitude" },
                            // {data:"Longitude" },
                            // {data:"NEBoundLatitude" },
                            // {data:"NEBoundLongitude" },
                            {data:"Population" },
                            // {data:"SWBoundLatitude" },
                            // {data:"SWBoungLongitude" },
                            {data:"State" },
                            // {data:"TotalWages" },
                            // {data:"WaterArea" },
                            {data:"Wealthy" },
                            {data:"Zipcode" },
                            // {data:"ZipcodeType" }
                                
                            
                        ]
                    }).rows().invalidate('data').draw(false);
                });}


        });

        var circle = L.circle(this.loc, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: TradeArea/0.000621371
        
}).addTo(map);


console.log(TradeArea/0.000621371);

// $('#data-table').ajax.reload();

// var table = $('#data-table').DataTable();
// table.ajax.reload();

}
//==========================onClickEnd========================================================================================     

