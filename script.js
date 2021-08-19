
function getWeatherForCity(city) {
    const endpoint = 'weather?q=' + city + '&units=metric';
    getData(endpoint).then(response => response.json())
    .then(data => { 
        let results = document.getElementById('results');
        let h2 = document.createElement("h2"); 
        let msg = 'Unknown error!';
        if (data.cod == 200){
            msg = 'Current weather in ' + data.name + ': ' + data.main.temp + ' degrees with ' + data.weather[0].description;
        }else {
            msg = 'ERROR for "'+ city +'": ' + data.message;
        }

        h2.appendChild( document.createTextNode(msg));
        results.prepend(h2);
    }) 
    .catch(error => {console.log(error)});
}

function getWeatherForCoordinates(lat,lon) {
    const endpoint = 'weather?lat='+ lat +'&lon=' + lon + '&units=metric';
    getData(endpoint).then(response => response.json())
    .then(data => { 
        let title = document.getElementById('curr');
        title.appendChild(document.createTextNode('Current weather in ' + data.name + ': ' + data.main.temp + ' degrees with ' + data.weather[0].description));
    }) 
    .catch(error => {console.log(error)});
}

function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    getWeatherForCoordinates(position.coords.latitude, position.coords.longitude);
}

function showCustomerWeather()
{
    const city = document.getElementById('city').value;
    if (city) {
        getWeatherForCity(city);
    }
}

getCurrentLocation();