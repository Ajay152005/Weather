function fetchWeather() {
    const city = document.getElementById('city').value;

    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e7eb06ed659e4df5d930197cac5176f2&units=metric`)
            .then(response => response.json())
            .then(data => displayWeather(data))
            .catch(error => console.error('Error:', error));
    } else {
        alert('Please enter a city name.');
    }
}

function displayWeather(weatherData) {
    const weatherInfo = document.getElementById('weather-info');

    if (weatherData.cod === 200) {
        const cityName = weatherData.name;
        const temperature = weatherData.main.temp;
        const humidity = weatherData.main.humidity;
        const conditions = weatherData.weather[0].description;

        weatherInfo.innerHTML = `
            <h2>Weather Information:</h2>
            <p>City: ${cityName}</p>
            <p>Temperature: ${temperature}&deg;C</p>
            <p>Humidity: ${humidity}%</p>
            <p>Conditions: ${conditions}</p>
        `;
    } else {
        weatherInfo.innerHTML = '<p>Weather information not available.</p>';
    }
}

