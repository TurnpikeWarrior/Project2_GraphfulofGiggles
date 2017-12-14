var elements=[];

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
//------------------------------------------------------------Jon's code-------------------------------------------------------------  

var stores=
  [
  {
  "City": "CHERRY HILL",
  "Location": [
  39.924045,
  -75.037583
  ],
  "StoreName": "CHERRY HILL",
  "Zip": 8002
  },
  {
  "City": "GUILFORD",
  "Location": [
  41.3017884,
  -72.7093312
  ],
  "StoreName": "GUILFORD",
  "Zip": 6437
  },
  {
  "City": "ISELIN",
  "Location": [
  40.5549767,
  -74.3165411
  ],
  "StoreName": "WOODBRIDGE",
  "Zip": 8830
  },
  {
  "City": "NORTH BRUNSWICK",
  "Location": [
  40.462958,
  -74.458852
  ],
  "StoreName": "NORTH BRUNSWICK",
  "Zip": 8902
  },
  {
  "City": "CLOSTER",
  "Location": [
  40.9689706,
  -73.9550911
  ],
  "StoreName": "CLOSTER",
  "Zip": 7624
  },
  {
  "City": "DEPTFORD",
  "Location": [
  39.8281757,
  -75.0972588
  ],
  "StoreName": "DEPTFORD",
  "Zip": 8096
  },
  {
  "City": "MATAWAN",
  "Location": [
  40.424851,
  -74.270436
  ],
  "StoreName": "MATAWAN",
  "Zip": 7747
  },
  {
  "City": "BRIDGEWATER",
  "Location": [
  40.561258,
  -74.55719
  ],
  "StoreName": "HARMON/BRIDGEWATER",
  "Zip": 88079252
  },
  {
  "City": "MORRIS PLAINS",
  "Location": [
  40.844016,
  -74.467051
  ],
  "StoreName": "MORRIS PLAINS",
  "Zip": 7950
  },
  {
  "City": "DEPTFORD",
  "Location": [
  39.8281823,
  -75.0961815
  ],
  "StoreName": "DEPTFORD, NJ",
  "Zip": 8096
  },
  {
  "City": "HAMILTON",
  "Location": [
  40.192511,
  -74.641169
  ],
  "StoreName": "HAMILTON",
  "Zip": 8691
  },
  {
  "City": "WATERFORD",
  "Location": [
  41.3748225,
  -72.1449958
  ],
  "StoreName": "WATERFORD",
  "Zip": 6385
  },
  {
  "City": "WEST CALDWELL",
  "Location": [
  40.8509303,
  -74.2945378
  ],
  "StoreName": "WEST CALDWELL",
  "Zip": 7006
  },
  {
  "City": "DEPTFORD",
  "Location": [
  39.827319,
  -75.096713
  ],
  "StoreName": "DEPTFORD",
  "Zip": 80965662
  },
  {
  "City": "STAMFORD",
  "Location": [
  41.0672423,
  -73.546219
  ],
  "StoreName": "STAMFORD",
  "Zip": 6905
  },
  {
  "City": "PARAMUS",
  "Location": [
  40.9222386,
  -74.0743803
  ],
  "StoreName": "PARAMUS",
  "Zip": 7652
  },
  {
  "City": "SHELTON",
  "Location": [
  41.2647214,
  -73.1304463
  ],
  "StoreName": "SHELTON",
  "Zip": 6484
  },
  {
  "City": "PEMBROKE PINES",
  "Location": [
  40.6682962,
  -74.4794486
  ],
  "StoreName": "GILLETTE",
  "Zip": 7933
  },
  {
  "City": "BRICK",
  "Location": [
  40.0547304,
  -74.1561212
  ],
  "StoreName": "BRICK",
  "Zip": 8723
  },
  {
  "City": "CHERRY HILL",
  "Location": [
  39.9160576,
  -75.0080231
  ],
  "StoreName": "CHERRY HILL BBBABY",
  "Zip": 80342301
  },
  {
  "City": "WETHERSFIELD",
  "Location": [
  41.6930654,
  -72.6579672
  ],
  "StoreName": "WETHERSFIELD",
  "Zip": 6109
  },
  {
  "City": "JERSEY CITY",
  "Location": [
  40.724411,
  -74.040091
  ],
  "StoreName": "JERSEY CITY",
  "Zip": 7302
  },
  {
  "City": "RARITAN",
  "Location": [
  40.5754143,
  -74.6328282
  ],
  "StoreName": "RARITAN",
  "Zip": 8869
  },
  {
  "City": "PARAMUS",
  "Location": [
  40.922004,
  -74.074133
  ],
  "StoreName": "IKEA DRIVE",
  "Zip": 76521253
  },
  {
  "City": "ELIZABETH",
  "Location": [
  40.660944,
  -74.1732656
  ],
  "StoreName": "ELIZABETH",
  "Zip": 7201
  },
  {
  "City": "EAST HANOVER",
  "Location": [
  40.8023343,
  -74.361784
  ],
  "StoreName": "EAST HANOVER",
  "Zip": 7936
  },
  {
  "City": "BRIDGEWATER",
  "Location": [
  40.577614,
  -74.630982
  ],
  "StoreName": "BRIDGEWATER BBBABY",
  "Zip": 88072401
  },
  {
  "City": "NEW YORK",
  "Location": [
  40.7458581,
  -73.9946806
  ],
  "StoreName": "CHELSEA BBBABY",
  "Zip": 7094
  },
  {
  "City": "FLANDERS",
  "Location": [
  40.883046,
  -74.706517
  ],
  "StoreName": "MT OLIVE",
  "Zip": 7836
  },
  {
  "City": "ROCKAWAY",
  "Location": [
  40.90722,
  -74.562452
  ],
  "StoreName": "ROCKAWAY",
  "Zip": 7866
  },
  {
  "City": "FAIRFIELD",
  "Location": [
  41.1508911,
  -73.243012
  ],
  "StoreName": "FAIRFIELD",
  "Zip": 6824
  },
  {
  "City": "HOLMDEL",
  "Location": [
  40.415517,
  -74.15989
  ],
  "StoreName": "HOLMDEL",
  "Zip": 7733
  },
  {
  "City": "BRICK",
  "Location": [
  40.0547304,
  -74.1561212
  ],
  "StoreName": "BRICK",
  "Zip": 8723
  },
  {
  "City": "EAST HANOVER",
  "Location": [
  40.8042939,
  -74.3659704
  ],
  "StoreName": "EAST HANOVER",
  "Zip": 7936
  },
  {
  "City": "ORANGE",
  "Location": [
  41.261513,
  -73.002641
  ],
  "StoreName": "ORANGE",
  "Zip": 6477
  },
  {
  "City": "SOUTHINGTON",
  "Location": [
  41.6395661,
  -72.8712445
  ],
  "StoreName": "SOUTHINGTON",
  "Zip": 6489
  },
  {
  "City": "SIMSBURY",
  "Location": [
  41.8173342,
  -72.8649798
  ],
  "StoreName": "SIMSBURY",
  "Zip": 6070
  },
  {
  "City": "NEWTON",
  "Location": [
  41.072539,
  -74.740598
  ],
  "StoreName": "NEWTON",
  "Zip": 7860
  },
  {
  "City": "TOMS RIVER",
  "Location": [
  39.9829964,
  -74.1823375
  ],
  "StoreName": "TOMS RIVER",
  "Zip": 8753
  },
  {
  "City": "MANALAPAN",
  "Location": [
  40.3135001,
  -74.3060001
  ],
  "StoreName": "MANALAPAN",
  "Zip": 7726
  },
  {
  "City": "PARAMUS",
  "Location": [
  40.965287,
  -74.07533
  ],
  "StoreName": "PARAMUS",
  "Zip": 7652
  },
  {
  "City": "MIDDLETOWN",
  "Location": [
  40.4051786,
  -74.1255641
  ],
  "StoreName": "MIDDLETOWN",
  "Zip": 7748
  },
  {
  "City": "FARMINGTON",
  "Location": [
  41.718482,
  -72.760606
  ],
  "StoreName": "WEST FARMS",
  "Zip": 6032
  },
  {
  "City": "WOODLAND PARK",
  "Location": [
  40.8592391,
  -74.465927
  ],
  "StoreName": "WOODLAND PARK, NJ",
  "Zip": 7424
  },
  {
  "City": "DAYVILLE",
  "Location": [
  41.841341,
  -71.882393
  ],
  "StoreName": "KILLINGLY",
  "Zip": 6241
  },
  {
  "City": "PARAMUS",
  "Location": [
  40.935,
  -74.0197
  ],
  "StoreName": "HARMON / IKEA DRIVE",
  "Zip": 76529019
  },
  {
  "City": "WATCHUNG",
  "Location": [
  40.641127,
  -74.415795
  ],
  "StoreName": "WATCHUNG",
  "Zip": 7069
  },
  {
  "City": "HACKENSACK",
  "Location": [
  40.8764962,
  -74.0656436
  ],
  "StoreName": "HACKENSACK",
  "Zip": 7601
  },
  {
  "City": "WATERFORD",
  "Location": [
  41.372991,
  -72.144
  ],
  "StoreName": "WATERFORD",
  "Zip": 6385
  },
  {
  "City": "CLIFTON",
  "Location": [
  40.830355,
  -74.13807
  ],
  "StoreName": "CLIFTON",
  "Zip": 7013
  },
  {
  "City": "RAMSEY",
  "Location": [
  41.069356,
  -74.139457
  ],
  "StoreName": "RAMSEY",
  "Zip": 7446
  },
  {
  "City": "SOUTH PLAINFIELD",
  "Location": [
  40.5585391,
  -74.4382724
  ],
  "StoreName": "SOUTH PLAINFIELD",
  "Zip": 7080
  },
  {
  "City": "WAYNE",
  "Location": [
  40.93866,
  -74.270657
  ],
  "StoreName": "WAYNE",
  "Zip": 7470
  },
  {
  "City": "BRICK",
  "Location": [
  40.0606723,
  -74.1405174
  ],
  "StoreName": "BRICK",
  "Zip": 8723
  },
  {
  "City": "MANAHAWKIN",
  "Location": [
  39.696949,
  -74.265368
  ],
  "StoreName": "MANAHAWKIN",
  "Zip": 8050
  },
  {
  "City": "ROCKAWAY",
  "Location": [
  40.907722,
  -74.548309
  ],
  "StoreName": "ROCKAWAY",
  "Zip": 78661649
  },
  {
  "City": "TOTOWA",
  "Location": [
  40.898095,
  -74.240144
  ],
  "StoreName": "TOTOWA BBBABY",
  "Zip": 75121735
  },
  {
  "City": "WAYNE",
  "Location": [
  40.9303521,
  -74.2279088
  ],
  "StoreName": "VALLEY RIDGE",
  "Zip": 7470
  },
  {
  "City": "DANBURY",
  "Location": [
  41.377197,
  -73.487374
  ],
  "StoreName": "DANBURY",
  "Zip": 6810
  },
  {
  "City": "MANCHESTER",
  "Location": [
  41.809604,
  -72.530109
  ],
  "StoreName": "MANCHESTER",
  "Zip": 6040
  },
  {
  "City": "MT LAUREL",
  "Location": [
  39.9680946,
  -74.9137428
  ],
  "StoreName": "MT LAUREL",
  "Zip": 8054
  },
  {
  "City": "NORWALK",
  "Location": [
  41.126978,
  -73.3845802
  ],
  "StoreName": "NORWALK",
  "Zip": 6851
  },
  {
  "City": "succusunna",
  "Location": [
  40.8704808,
  -74.6467435
  ],
  "StoreName": "SUCCUSUNNA",
  "Zip": 7876
  },
  {
  "City": "MAYS LANDING",
  "Location": [
  39.451683,
  -74.63776
  ],
  "StoreName": "MAYS LANDING, NJ",
  "Zip": 8330
  },
  {
  "City": "CARLSTADT",
  "Location": [
  40.8416176,
  -74.1020413
  ],
  "StoreName": "CARLSTADT",
  "Zip": 7072
  },
  {
  "City": "FLEMINGTON",
  "Location": [
  40.498102,
  -74.85672
  ],
  "StoreName": "FLEMINGTON",
  "Zip": 8822
  },
  {
  "City": "WEST LONG BRANCH",
  "Location": [
  40.2915165,
  -74.0353789
  ],
  "StoreName": "WEST LONG BRANCH",
  "Zip": 77641026
  },
  {
  "City": "EATONTOWN",
  "Location": [
  40.289719,
  -74.0449708
  ],
  "StoreName": "EATONTOWN",
  "Zip": 7724
  },
  {
  "City": "ROCKAWAY",
  "Location": [
  40.887091,
  -74.528438
  ],
  "StoreName": "ROCKAWAY",
  "Zip": 7866
  },
  {
  "City": "OCEAN",
  "Location": [
  40.228444,
  -74.044718
  ],
  "StoreName": "SEAVIEW SQUARE",
  "Zip": 7712
  },
  {
  "City": "CHERRY HILL",
  "Location": [
  33.724321,
  -117.790335
  ],
  "StoreName": "HARMON / CHERRY HILL",
  "Zip": 80029122
  },
  {
  "City": "PARAMUS",
  "Location": [
  40.918022,
  -74.059182
  ],
  "StoreName": "PARAMUS",
  "Zip": 7652
  },
  {
  "City": "SHORT HILLS",
  "Location": [
  40.720026,
  -74.33006
  ],
  "StoreName": "MILLBURN",
  "Zip": 7078
  },
  {
  "City": "X",
  "Location": [
  39.8281812,
  -75.0967229
  ],
  "StoreName": "DEPTFORD",
  "Zip": 8096
  },
  {
  "City": "ORANGE",
  "Location": [
  41.262436,
  -73.001394
  ],
  "StoreName": "ORANGE",
  "Zip": 6477
  },
  {
  "City": "EDGEWATER",
  "Location": [
  40.8199349,
  -73.9770593
  ],
  "StoreName": "EDGEWATER",
  "Zip": 7020
  },
  {
  "City": "TORRINGTON",
  "Location": [
  41.8184533,
  -73.0755029
  ],
  "StoreName": "TORRINGTON",
  "Zip": 6790
  },
  {
  "City": "DANBURY",
  "Location": [
  41.375623,
  -73.476313
  ],
  "StoreName": "DANBURY",
  "Zip": 6810
  },
  {
  "City": "KINNELON",
  "Location": [
  40.9905314,
  -74.3330718
  ],
  "StoreName": "BUTLER",
  "Zip": 7405
  },
  {
  "City": "SPRINGFIELD",
  "Location": [
  40.685001,
  -74.3317335
  ],
  "StoreName": "SPRINGFIELD, NJ",
  "Zip": 7081
  },
  {
  "City": "HAMDEN",
  "Location": [
  41.3673714,
  -72.9192501
  ],
  "StoreName": "HAMDEN",
  "Zip": 6514
  },
  {
  "City": "EDGEWATER",
  "Location": [
  40.8110603,
  -73.9828924
  ],
  "StoreName": "EDGEWATER",
  "Zip": 7020
  },
  {
  "City": "MANCHESTER",
  "Location": [
  41.812572,
  -72.531697
  ],
  "StoreName": "MANCHESTER",
  "Zip": 6040
  },
  {
  "City": "EDISON",
  "Location": [
  40.5162354,
  -74.3766022
  ],
  "StoreName": "EDISON",
  "Zip": 8817
  },
  {
  "City": "SPRINGFIELD",
  "Location": [
  40.718757,
  -74.330373
  ],
  "StoreName": "SPRINGFIELD",
  "Zip": 7081
  },
  {
  "City": "PRINCETON",
  "Location": [
  40.300224,
  -74.679577
  ],
  "StoreName": "PRINCETON",
  "Zip": 85405938
  },
  {
  "City": "BRIDGEWATER",
  "Location": [
  40.5617136,
  -74.5560499
  ],
  "StoreName": "BRIDGEWATER",
  "Zip": 8807
  },
  {
  "City": "LAWRENCEVILLE",
  "Location": [
  40.297338,
  -74.685609
  ],
  "StoreName": "LAWRENCEVILLE",
  "Zip": 8648
  },
  {
  "City": "PARSIPPANY",
  "Location": [
  40.87241513,
  -74.42837602
  ],
  "StoreName": "PARSIPPANY",
  "Zip": 7054
  },
  {
  "City": "CHERRY HILL",
  "Location": [
  39.923764,
  -75.037036
  ],
  "StoreName": "CHERRY HILL",
  "Zip": 8002
  },
  {
  "City": "PARAMUS",
  "Location": [
  40.965528,
  -74.075376
  ],
  "StoreName": "PARAMUS BBBABY",
  "Zip": 76523613
  },
  {
  "City": "ABERDEEN",
  "Location": [
  40.397946,
  -74.224385
  ],
  "StoreName": "MATAWAN",
  "Zip": 7747
  },
  {
  "City": "ISELIN",
  "Location": [
  40.559558,
  -74.308046
  ],
  "StoreName": "WOODBRIDGE",
  "Zip": 8830
  },
  {
  "City": "MILFORD",
  "Location": [
  41.236496,
  -73.033989
  ],
  "StoreName": "MILFORD",
  "Zip": 64602703
  },
  {
  "City": "SHREWSBURY",
  "Location": [
  40.3335892,
  -74.0630453
  ],
  "StoreName": "SHREWSBURY",
  "Zip": 77024139
  },
  {
  "City": "NEWTON",
  "Location": [
  41.067922,
  -74.743405
  ],
  "StoreName": "NEWTON",
  "Zip": 7860
  },
  {
  "City": "ENFIELD",
  "Location": [
  41.9898916,
  -72.582993
  ],
  "StoreName": "ENFIELD",
  "Zip": 6082
  },
  {
  "City": "HOWELL",
  "Location": [
  40.1526084,
  -74.2280434
  ],
  "StoreName": "HOWELL",
  "Zip": 7731
  },
  {
  "City": "ROCKVILLE",
  "Location": [
  40.5892962,
  -74.5012245
  ],
  "StoreName": "GREENBROOK",
  "Zip": 8812
  },
  {
  "City": "ROCKAWAY",
  "Location": [
  40.907416,
  -74.548584
  ],
  "StoreName": "ROCKAWAY, NJ",
  "Zip": 7866
  },
  {
  "City": "BROOKFIELD",
  "Location": [
  41.4365147,
  -73.4132361
  ],
  "StoreName": "BROOKFIELD",
  "Zip": 6804
  },
  {
  "City": "MANALAPAN",
  "Location": [
  40.288837,
  -74.29554
  ],
  "StoreName": "MANALAPAN",
  "Zip": 7726
  },
  {
  "City": "SEWELL",
  "Location": [
  39.71636111,
  -75.03042298
  ],
  "StoreName": "TURNERSVILLE",
  "Zip": 8080
  },
  {
  "City": "FRANKLIN",
  "Location": [
  41.103017,
  -74.580801
  ],
  "StoreName": "FRANKLIN",
  "Zip": 7416
  },
  {
  "City": "FREEHOLD",
  "Location": [
  40.2558065,
  -74.2867027
  ],
  "StoreName": "FREEHOLD",
  "Zip": 7728
  },
  {
  "City": "MILFORD",
  "Location": [
  41.2371072,
  -73.0391802
  ],
  "StoreName": "MILFORD",
  "Zip": 6460
  },
  {
  "City": "BRIDGEWATER",
  "Location": [
  40.5821985,
  -74.6221007
  ],
  "StoreName": "BRIDGEWATER, NJ",
  "Zip": 8807
  },
  {
  "City": "LIVINGSTON",
  "Location": [
  40.798053,
  -74.3476589
  ],
  "StoreName": "LIVINGSTON",
  "Zip": 70391740
  },
  {
  "City": "TOTOWA",
  "Location": [
  40.895681,
  -74.234486
  ],
  "StoreName": "TOTOWA",
  "Zip": 7512
  },
  {
  "City": "NORWALK",
  "Location": [
  41.1318525,
  -73.4237643
  ],
  "StoreName": "NORWALK",
  "Zip": 6851
  },
  {
  "City": "BROOKLYN",
  "Location": [
  40.6593468,
  -74.0044481
  ],
  "StoreName": "LIBERTY VIEW BBBABY",
  "Zip": 7094
  },
  {
  "City": "WESTWOOD",
  "Location": [
  40.9973398,
  -74.0388428
  ],
  "StoreName": "WESTWOOD",
  "Zip": 7675
  },
  {
  "City": "CLIFTON",
  "Location": [
  40.830767,
  -74.138796
  ],
  "StoreName": "CLIFTON",
  "Zip": 7014
  },
  {
  "City": "NEWARK",
  "Location": [
  40.7334165,
  -74.142984
  ],
  "StoreName": "NEWARK",
  "Zip": 7105
  },
  {
  "City": "EAST BRUNSWICK",
  "Location": [
  40.4563223,
  -74.3988223
  ],
  "StoreName": "EAST BRUNSWICK",
  "Zip": 8816
  },
  {
  "City": "TOTOWA",
  "Location": [
  40.898423,
  -74.240287
  ],
  "StoreName": "ROUTE 46",
  "Zip": 7512
  },
  {
  "City": "MARLTON",
  "Location": [
  39.8693329,
  -74.9200008
  ],
  "StoreName": "MARLTON",
  "Zip": 8053
  },
  {
  "City": "VINELAND",
  "Location": [
  39.432657,
  -75.038136
  ],
  "StoreName": "VINELAND",
  "Zip": 8360
  },
  {
  "City": "PARSIPPANY",
  "Location": [
  40.8620831,
  -74.3739297
  ],
  "StoreName": "PARSIPPANY",
  "Zip": 7054
  },
  {
  "City": "WESTFIELD",
  "Location": [
  40.6501296,
  -74.3384378
  ],
  "StoreName": "WESTFIELD",
  "Zip": 7090
  },
  {
  "City": "RIO GRANDE",
  "Location": [
  39.015454,
  -74.87633
  ],
  "StoreName": "RIO GRANDE",
  "Zip": 8242
  },
  {
  "City": "MAYS LANDING",
  "Location": [
  39.4482404,
  -74.6310071
  ],
  "StoreName": "MAYS LANDING",
  "Zip": 8330
  }
  ];





// Loop through the stores array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < stores.length; i++) {
  var city = stores[i];
  // var loc = '[' + city.Lat + ',' + city.Long + ']';
  mark = L.marker(city.Location)
    .bindPopup("<h1>" + city.StoreName + "</h1>")
    .addTo(map)

  console.log(mark+"ZZZZ")
  console.log(city.Location+" XXXX")
//------------------------------------------------------------Jon's code-------------------------------------------------------------    
}



elements = document.getElementsByClassName("leaflet-marker-icon")
console.log(elements)
for(var i=0; i<elements.length; i++){
  elements[i].addEventListener("click", function(e){
    onClick(e);
  }, false)
}

// function onClick(e) {alert("Radius");}
function onClick(e) {
  
  console.log(e.target+"BBBBB");
  console.log(mark._latlng+"YYYY");
  var circle = L.circle(mark._latlng, {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 50000
}).addTo(map);}
//------------------------------------------------------------Jon's code-------------------------------------------------------------
