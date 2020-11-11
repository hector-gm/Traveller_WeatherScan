var DateToday = moment().format('LL');
var showTodayDate = $("#date");
showTodayDate.text(DateToday);

lookInfo.addEventListener("click", submitCity);

function submitCity() {
    var newCity = document.getElementById("textInput").value;
    var stringSearch = textInput.value;
    showCity.innerHTML=stringSearch[0].toUpperCase()+stringSearch.slice(1);
    console.log(newCity);

    var currentCityWeather = "api.openweathermap.org/data/2.5/weather?q="+newCity+"&units=metric&appid=c3ee8919b50c668953c3299c41acd2c0";
    // var currentUV = "http://api.openweathermap.org/data/2.5/uvi?lat={lat}&lon={lon}&appid=c3ee8919b50c668953c3299c41acd2c0"
    // var cityForecast = "https://api.openweathermap.org/data/2.5/forecast?q="+newCity+"&cnt=5&units=metric&appid=c3ee8919b50c668953c3299c41acd2c0";

    $.ajax({
        datatype: "JSON", url: currentCityWeather, method: "GET"
    }).then(function(response) {
        console.log(response);
        $("#temperature").append(JSON.stringify(data.main.temp)+"C");
        $("#humdity").append(JSON.stringify(data.main.humidity)+"%");
        $("#wind").append(JSON.stringify(data.wind.speed)+"km/h");
        
    });

}

