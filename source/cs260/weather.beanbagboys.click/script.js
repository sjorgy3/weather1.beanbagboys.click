document.getElementById("weatherSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
      return;
    console.log(value);
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=b7dd38003b66fc130d4ea44292d5fc76";
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        let results = "";
        results += '<h2>Current Weather ' + json.name + "</h2>";
        for (let i=0; i < json.weather.length; i++) {
      results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
        }
        results += '<h2>' + json.main.temp + " &deg;F</h2>"
        results += "<p>"
        for (let i=0; i < json.weather.length; i++) {
      results += json.weather[i].description
      if (i !== json.weather.length - 1)
        results += ", "
        }
        results += "</p>";
        document.getElementById("weatherResults").innerHTML = results;
        console.log(json);
        //function 2
        const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=b7dd38003b66fc130d4ea44292d5fc76";
        fetch(url2)
          .then(function(response) {
            return response.json();
          }).then(function(json) {
            let forecast = "";
            for (let i=0; i < json.list.length; i= i+8) {
                forecast += "<div id = \"element\">";
          forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do') + "</h2>";
          forecast += "<p>Temperature: " + json.list[i].main.temp + "</p>";
          forecast += "<p>Wind Speed: " + json.list[i].wind.speed + " mph</p>";
          forecast += "<p>Feels Like: " + json.list[i].wind.speed + "</p>";
          forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
          forecast += "</div>";
            }
            document.getElementById("forecastResults").innerHTML = forecast;
          });
      });
  });