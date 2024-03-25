document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('weather-section').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way
        const city = document.getElementById('weather-input').value;
        getWeather(city);
    });
});

async function getWeather(city) {
    const apiKey = '62144361df1c2f8aaf9da0c3860fa5c7'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        displayWeatherError(error);
    }
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather');
    weatherContainer.innerHTML = `
        <h3>Weather in ${data.name}</h3>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].main}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather icon" />
    `;
}

function displayWeatherError(error) {
    const weatherContainer = document.getElementById('weather');
    weatherContainer.innerHTML = `<p>Error fetching weather: ${error.message}</p>`;
}
