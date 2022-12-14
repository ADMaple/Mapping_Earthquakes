// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [satelliteStreets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
/*let airportData = "https://raw.githubusercontent.com//miwermi/mapping-earthquakes/main/majorAirports.json";*/

// Accessing the Toronto airline routes GeoJSON URL.
/*let torontoData = "https://raw.githubusercontent.com/miwermi/mapping-earthquakes/main/torontoRoutes.json";
let lineStyle = {
  color: "#0088FF",
  weight: 2
}*/

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/miwermi/mapping-earthquakes/main/torontoNeighborhoods.json";

let lineStyle = {
  color: "#0088FF",
  weight: 1
}

// Grabbing our GeoJSON data.
/*d3.json(torontoHoods).then(function(data) {
  console.log(data);
  L.geoJson(data).addTo(map);
  });*/

// Skill drill
d3.json(torontoHoods).then(function(data) {
  L.geoJson(data,{
    style : lineStyle,
    onEachFeature : function(feature,layer) {
      layer.bindPopup("<h3> Area Name: "+ feature.properties.AREA_NAME + "</h3>");  }
  }).addTo(map);
  });