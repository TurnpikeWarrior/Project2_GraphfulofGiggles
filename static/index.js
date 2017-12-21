// Initial SelectedZips

selectedZips = [];
selectedZipsData = [];
counter = 0;

// Creating map object
var map = L.map("map", {
    center: [40.7128, -74.0059],
    zoom: 7.5
  });
  
// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/helicon123/cjb1i52fgqpi12rkaruc9jlkb/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGVsaWNvbjEyMyIsImEiOiJjamFrYTAzdDAyaG93MnhxdXlycm1xbHk1In0.RZ02ssPS4DfeGvM2sx7INg").addTo(map);

function renderMap(){

    // Initial Zip Map
    var link = "../static/GeoJZipcodesforNJBorders.geojson";

    function chooseColor(zipcode) {
      if (selectedZips.indexOf(zipcode) > -1)
      {
        return "blue";
      }
      else {
        return "gray";
      } 
    }

    // Function that will determine opacity based on whether we see the selection
    function chooseOpacity(zipcode) {

      if (selectedZips.indexOf(zipcode) > -1)
      {
        return 0.85;
      }
      else {
        return 0.15;
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
            fillColor: chooseColor(feature.properties.ZCTA5CE10),
            fillOpacity: chooseOpacity(feature.properties.ZCTA5CE10),
            // stroke: false,
            weight: 0.5
          }
        },

        // Called on each feature
        onEachFeature: function(feature, layer) {
          layer.bindPopup("<h1>" + feature.properties.ZCTA5CE10 + "</h1>");
        }
      }).addTo(map);
    });
}

Plotly.d3.json('/allStores', function(error, cities){
   if (error) return console.warn('WHAT?');
   console.log(cities.length);
    for (var i = 0; i < cities.length; i++) {
      var city = cities[i];

    var marker = new L.marker(city.Location).addTo(map).on('click', onClick);
        marker.key = city.StoreName;
        marker.loc = city.Location;
        marker.bindPopup("<h1>" + city.StoreName + "</h1>");
    }
});

// Call Render Map
renderMap();

// var TradeArea=document.getElementById("TradeArea")
//==========================onClickStart========================================================================================
    function onClick(e) { 

      var TradeArea = document.getElementById("myRange").value;
      console.log(TradeArea);
      var stName=this.key;
      popValues  = [];
      popCities  = [];
      wealthValues = [];

      Plotly.d3.json('/allZips?Store='+stName+'&Scope='+TradeArea, function(error, zipList) {

        if (error) return console.warn(error);
        console.log(zipList);

        // Add zipcodes 
        for (var i=0; i<zipList.length; i++){
          selectedZips.push(zipList[i].Zipcode);     
          selectedZipsData.push(zipList[i]);  
          popValues.push(zipList[i].Population);
          popCities.push(zipList[i].City);
          wealthValues.push(zipList[i].Wealthy);
        }

        // Run the renderMap
        renderMap();

        // console.log(selectedZipsData)
        // Create Population Pie Chart
        var data = [{
          values: popValues,
          labels: popCities,
          title: 'Population Distribution by Cities',
          type: 'pie'
          },
          ];
        
        var layout = {
          height: 300,
          width: 425,
          showlegend: false
          
        };
        
        Plotly.newPlot('pieChart', data, layout);

        //Create Wealth Distribution Chart
        // Create Population Pie Chart
        var data = [{
          values: wealthValues,
          labels: popCities,
          type: 'pie'
        }];

        var layout = {
          height: 300,
          width: 425,
          showlegend: false
          // height: 400,
          // width: 500
        };

        Plotly.newPlot('wealthChart', data, layout);        

        var datatable = $("#data-table").DataTable({
            destroy: true,
            searching: true,
            filter: true,
            // dom: '<"top"fl>rt<"bottom"i,,Bp><"clear">',
            dom: "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
                  "<'row'<'col-sm-12'tr>>" +
                  "<'row'<'col-sm-5'i><'col-sm-7'p>>"+
                  "<'row'<'col-sm-12'B>>",
                  
            buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
            retrieve:true,
            lengthMenu:[[5,10, 25, 50, -1], [5,10, 25, 50, "All"]],

            // columns.render:true,
            data: selectedZipsData,  
            columns: [
                {data:"City" },
                {data:"Density" , render: $.fn.dataTable.render.number( ',', '.', 2) },
                {data:"Population" },
                {data:"State" },
                {data:"Wealthy" , render: $.fn.dataTable.render.number( ',', '.', 2, '$' ) },
                {data:"Zipcode" } 
            ],

        });

          datatable.clear();
          datatable.rows.add(selectedZipsData);
          datatable.draw();
      });   

      var circle = L.circle(this.loc, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: TradeArea/0.000621371
      }).addTo(map);

    }
//==========================onClickEnd========================================================================================     
function sliderChange(val) {
    document.getElementById('output').innerHTML = val;
      document.getElementById('slider').value = 60;
  }
