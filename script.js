var DateToday = moment().format('LL');
var showTodayDate = $("#date");
showTodayDate.text(DateToday);

lookInfo.addEventListener("click", submitCity);

function submitCity() {
    var newCity = document.querySelector("textInput").value;
    var stringSearch = textInput.value;
    showCity.innerHTML=stringSearch[0]+stringSearch.slice(1);
    console.log(newCity)

    var currentWeather = "api.openweathermap.org/data/2.5/weather?q="+newCity+"&units=metric&appid=c3ee8919b50c668953c3299c41acd2c0"

    $.ajax({
        datatype: "JSON", url: currentWeather, method: "GET"
    })

    .then(function(data) {
        console.log(data);
        $("#temperature").append(JSON.stringify(data.main.temperature)+"C");
        $("#humdity").append(JSON.stringify(data.main.humidity)+"%");
        $("#wind").append(JSON.stringify(data.wind.speed));
        
    });

}

