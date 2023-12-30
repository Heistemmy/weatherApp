const apiKey = "7a9a69cccd764a812451f74bdfbd3fbc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display ="block";
        // document.querySelector(".error").style.display ="none";
    }
    else {
        var data = await response.json();



    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    const weatherIcons = {
        clouds: "images/clouds.png",
        clear: "images/clear.png",
        rain: "images/rain.png",
        drizzle: "images/drizzle.png",
        mist: "images/mist.png"
    };
    
    // Check if the weather condition exists in the weatherIcons object
    const weatherCondition = data.weather[0].main.toLowerCase();
    if (weatherIcons.hasOwnProperty(weatherCondition)) {
        weatherIcon.src = weatherIcons[weatherCondition];
    } else {
        // Default icon for unspecified conditions
        weatherIcon.src = "images/default.png";
    }
    

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display ="none";
    }
    
}


searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})
