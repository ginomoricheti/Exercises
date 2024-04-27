
document.addEventListener("DOMContentLoaded", function() {
  // API URL & API KEY OF WEATHER API ON https://openweathermap.org/
  const apiKey = "751c6dcb61cfd87099bc56464ec82a64";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
  
  // DATA BRIING FROM THE USER
  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button");

  // API CALL
  async function checkWeather(city){
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);

    // VALIDATE IF THE CITY NAME IN THE INPUT IS CORRECT
    if(response.status == 404) {
      document.querySelector(".error").style.display = "block"
      document.querySelector(".weather").style.display = "none"
    } else{
      var data = await response.json();
      
      document.querySelector(".error").style.display = "none"
      document.querySelector(".weather").style.display = "block"
      
      // MODIFYING WHEATER IMG, TEMP, CITY NAME, HUMIDITY AND WIND SPEED
      document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
      document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
      document.querySelector(".weather-icon").src = `/HTML-CSS-JS/34-weather_app/images/${data.weather[0].main}.png`;
    }
  }

  // CALLING FUNCTION CHECKWEATHER WITH CLICK
  searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
    searchBox.value = "" // EMPTYING THE SEARCHBOX
  });
  // CALLING FUNCTION CHECKWEATHER WITH ENTER
  searchBox.addEventListener("keypress", (event)=>{
    if (event.key === "Enter") {
      checkWeather(searchBox.value);
      searchBox.value = "" // EMPTYING THE SEARCHBOX
    }
  });
});