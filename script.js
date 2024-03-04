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
    console.log("Displaying weather information: ", weatherData);
    const weatherInfo = document.getElementById('weather-info');
    const container = document.querySelector('.container');
    const greetingElement = document.getElementById('greeting');

    if (weatherData.cod === 200) {
        const cityName = weatherData.name;
        const temperature = weatherData.main.temp;
        const humidity = weatherData.main.humidity;
        const conditions = weatherData.weather[0].description;

        // dynamic greeting based on temperature
        let greeting = '';
        if (temperature > 25) {
            greeting = "A bit hot, isn't it 🔥Stay cool!";
            container.style.backgroundColor = '#ffcccb';
        } else if (temperature < 10) {
            greeting = "Bundle up! ❄️ It's a bit chilly.";
            container.style.backgroundColor = '#add8e6';
        } else {
            greeting = 'Enjoy the weather! 😊';
            container.style.backgroundColor = '#fff';
        }

        weatherInfo.innerHTML = `
            <h2>Weather Information:</h2>
            <p>City: ${cityName}</p>
            <p>Temperature: ${temperature}&deg;C</p>
            <p>Humidity: ${humidity}%</p>
            <p>Conditions: ${conditions}</p>
        `;
        console.log("greeting: ", greeting);
        greetingElement.textContent = greeting;
        greetingElement.style.color = 'orange';  // Change color to blue temporarily

    } else {
        weatherInfo.innerHTML = '<p>Weather information not available.</p>';
    }
}

