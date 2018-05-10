function getWeather(lat, lon, myCity, unit) {

  var localWeather = $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=0b0a8ecd5fff93a57cad62caaaa59bf1", function(json) {
    var localTemp = json.main.temp;
    var localTempF = Math.round(1.8 * (localTemp - 273) + 32);
    var localTempC = Math.round(localTemp - 273);
    var description = json.weather[0].description;
    var icon = json.weather[0].icon;
    var pressure = json.main.pressure;
    var humidity = json.main.humidity;
    var windSpeed = json.wind.speed
    var windSpeedImp = Math.round(json.wind.speed * 2.23694)
    var windDir = json.wind.deg;

    if (windDir <= 11.25 || windDir > 348.75) {
      windDir = "N";
    } else if (windDir > 11.25 && windDir <= 33.75) {
      windDir = "NNE";
    } else if (windDir > 33.75 && windDir <= 56.25) {
      windDir = "NE";
    } else if (windDir > 56.25 && windDir <= 78.75) {
      windDir = "ENE";
    } else if (windDir > 78.75 && windDir <= 101.25) {
      windDir = "E";
    } else if (windDir > 101.25 && windDir <= 123.75) {
      windDir = "ESE";
    } else if (windDir > 123.75 && windDir <= 146.25) {
      windDir = "SE";
    } else if (windDir > 146.25 && windDir <= 168.75) {
      windDir = "SSE";
    } else if (windDir > 168.75 && windDir <= 191.25) {
      windDir = "S";
    } else if (windDir > 191.25 && windDir <= 213.75) {
      windDir = "SSW";
    } else if (windDir > 213.75 && windDir <= 236.25) {
      windDir = "SW";
    } else if (windDir > 236.25 && windDir <= 258.75) {
      windDir = "WSW";
    } else if (windDir > 258.75 && windDir <= 281.25) {
      windDir = "W";
    } else if (windDir > 281.25 && windDir <= 303.75) {
      windDir = "WNW";
    } else if (windDir > 303.75 && windDir <= 326.25) {
      windDir = "NW";
    } else {
      windDir = "NNW";
    }

    if (unit == "f") {
      $("#weatherBox").html("<img class= weather_icon src=http://openweathermap.org/img/w/" + icon + ".png><br>" + localTempF + " &#8457<br>" + description + "<br>" + myCity);

      $("#weatherSup1").html("<b><u>Wind</u></b><br>" + windDir + " @<br>" + windSpeedImp + " miles/hour");

      $("#weatherSup2").html("<b><u>Humidity</u></b><br>" + humidity + "%");

      $("#weatherSup3").html("<b><u>Pressure</u></b><br>" + ((pressure * .0002953) * 100).toFixed(2) + " in");

    } else {
      $("#weatherBox").html("<img class= weather_icon src=http://openweathermap.org/img/w/" + icon + ".png><br>" + localTempC + " &#8451<br>" + description + "<br>" + myCity);

      $("#weatherSup1").html("<b><u>Wind</u></b><br>" + windDir + " @<br>" + windSpeed + " meters/sec");

      $("#weatherSup2").html("<b><u>Humidity</u></b><br>" + humidity + "%");

      $("#weatherSup3").html("<b><u>Pressure</u></b><br>" + ((pressure * .0002953) * 100).toFixed(2) + " in");
    }

  });
}

$(document).ready(function() {

  $.getJSON('http://ipinfo.io', function(data) {

    var geoLocation;

    geoLocation = (data.loc).toString().split(",");
    var myCity = data.city + ", " + data.region;
    var lat = geoLocation[0];
    var lon = geoLocation[1];
    var unit = "f";

    getWeather(lat, lon, myCity, unit);
  });

  $("#UnitF").on("click", function() {
    $.getJSON('http://ipinfo.io', function(data) {

      var geoLocation;

      geoLocation = (data.loc).toString().split(",");
      var myCity = data.city + ", " + data.region;
      var lat = geoLocation[0];
      var lon = geoLocation[1];
      var unit = "f";

      getWeather(lat, lon, myCity, unit);
    });
  });

  $("#UnitC").on("click", function() {
    $.getJSON('http://ipinfo.io', function(data) {

      var geoLocation;

      geoLocation = (data.loc).toString().split(",");
      var myCity = data.city + ", " + data.region;
      var lat = geoLocation[0];
      var lon = geoLocation[1];
      var unit = "c";

      getWeather(lat, lon, myCity, unit);
    });
  });

});