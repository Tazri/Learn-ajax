// Add event listener on search btn
getElement('search-btn').addEventListener('click',updateWeather);

// function i need
function updateWeather(event){
    const cityName = getElement('city-input').value || 'dhaka';
    
    // send request
    fetch(getUrl(cityName))
        .then(response=> response.json())
        .then(data => {
            // update data
            getElement('city').innerText = data.name;
            getElement('temperature').innerText = getCelsius(data.main.temp);
            getElement('weather-status').innerText = data.weather[0].main;
            getElement('img').src = getIcon(data.weather[0].icon);
        })
}

function getUrl(city){
    return `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a856c9b06ec8d65ad91332884da8d88d`
}

function getElement(element){
    return document.getElementById(element);
}

function getCelsius(temperature){
    return (temperature - 273.15).toFixed(2);
}

function getIcon(icon){
    return `http://openweathermap.org/img/wn/${icon}@2x.png`
}
// calling function
updateWeather();