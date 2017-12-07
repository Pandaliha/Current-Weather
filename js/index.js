var f;
var c;
$.getJSON("https://api.wunderground.com/api/a0b51a3c87e2d6a2/geolookup/conditions/q/autoip.json", function(data) {
  console.log(data);
  document.getElementById("city").innerHTML = data.location.city;
  console.log(data.location.city);
  document.getElementById("temp").innerHTML = data.current_observation.temp_c + '\xB0' + 'C';
  document.getElementById("forecast").innerHTML = data.current_observation.weather;
  $('#icon img').attr('src', data.current_observation.icon_url);
  f = data.current_observation.temp_f;
  c = data.current_observation.temp_c;
});

function changeTemp() {
  document.getElementById("temp").innerHTML = f + '\xB0' + 'F';
}
function changeBack() {
  document.getElementById("temp").innerHTML = c + '\xB0' + 'C';
}