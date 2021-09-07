// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with center at the San Francisco airport.
// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);
//OR
// let map = L.map("mapid", {center:[40.7,-94.5],zoom:4});


// Add GeoJSON data.


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/iliarafa/Mapping_Earthquakes/main/majorAirports.json"

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  pointToLayer: function (feature, data) {
    console.log(feature);
    return L.marker(data)
    .bindPopup ("<h3> Airport code: " + feature.properties.faa  + "<hr> <h3> Airport Name: " + feature.properties.name);
  }
}).addTo(map);
});


