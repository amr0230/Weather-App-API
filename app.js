// Call Elements using JS //
let btn = document.querySelector('.search-btn');
let searchWithEnterKey = document.querySelector('.search-bar');

// create function loadData() to do fetch API //
function loadData() {
    let searchInput = document.querySelector('.search-bar').value;
    const API_KEY = '6f42773426e5679c68a498c493fa8d52';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${API_KEY}&units=metric`;
    fetch(API_URL)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            // Pull Information from JSON file
            let cityName = data.name;
            let cityTemp = data.main.temp;
            let iconWeather = data.weather[0].icon;
            let weatherDesc = data.weather[0].description;
            let weatherHumidity = data.main.humidity;
            let windSpeed = data.wind.speed;

            // Calling elements from HTML file
            let city = document.querySelector('.city');
            let temp = document.querySelector('.temp');
            let imgIcon = document.querySelector('.icon');
            let description = document.querySelector('.description');
            let humidity = document.querySelector('.humidity');
            let wind_speed = document.querySelector('.wind-speed');

            // Binding the elements in HTML file to the elements in JSON file 
            city.innerHTML = "Weather in " + cityName;
            temp.innerHTML = cityTemp.toFixed(0) + "°C";
            imgIcon.src = "https://openweathermap.org/img/wn/" + iconWeather + ".png";
            description.innerHTML = weatherDesc;
            humidity.innerHTML = "Humidity: " + weatherHumidity + "%";
            wind_speed.innerHTML = "Wind Speed: " + windSpeed + " km/h";

            let weatherMainContainer = document.querySelector('.w-main-container');
            weatherMainContainer.style.backgroundSize = "100%";

            // Different Types of Weather Conditions //

            // Sunny
            if (weatherDesc == "clear sky" || weatherDesc == "sunny") {
                weatherMainContainer.style.color = "black";
                weatherMainContainer.style.backgroundImage = "url('./CSS/Images/clear.gif')";
            }
            // Cloudy
            else if (weatherDesc == "cloudy" || weatherDesc == "broken clouds" || weatherDesc == "partially cloudy" || weatherDesc == "overcast clouds" || weatherDesc == "few clouds" || weatherDesc == "scattered clouds") {
                weatherMainContainer.style.color = "black";
                weatherMainContainer.style.backgroundImage = "url('./CSS/Images/clouds.gif')";

            }
            // Fog
            else if (weatherDesc == "fog" || weatherDesc == "haze" || weatherDesc == "mist") {
                weatherMainContainer.style.backgroundImage = "url('./CSS/Images/fog.gif')";
            }
            // Rainy
            else if (weatherDesc == "drizzle" || weatherDesc == "rainy" || weatherDesc == "moderate rain" || weatherDesc == "light rain" || weatherDesc == "heavy intensity rain") {
                weatherMainContainer.style.backgroundImage = "url('./CSS/Images/rain.gif')";
                weatherMainContainer.style.opacity = '1';
            }
            // Snow
            else if (weatherDesc == "snow" || weatherDesc == "light snow") {
                weatherMainContainer.style.backgroundImage = "url('./CSS/Images/snow.gif')";
            }
            // Thunder Storm
            else if (weatherDesc == "thunder storm") {
                weatherMainContainer.style.backgroundImage = "url('./CSS/Images/thunderstorm.gif')";
            }
            // Dust
            else if (weatherDesc == "dust") {
                weatherMainContainer.style.backgroundImage = "url('./CSS/Images/dust.gif')";
                weatherMainContainer.style.opacity = '1';
            }
        })
    // Function to delete value of search bar text input when clicked
    function searchbarClicked() {
        document.querySelector('.search-bar').value = "";
    }
    searchbarClicked();
}
btn.addEventListener('click', loadData);

searchWithEnterKey.addEventListener('keyup', function (event) {
    if (event.key == "Enter") {
        loadData();
    }
})