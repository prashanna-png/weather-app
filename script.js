import weatherThemes from './themes.js';

const cityInput = document.getElementById('cityInput');
const weatherCard = document.getElementById('weatherCard');
const searchBtn = document.getElementById('searchBtn');
const temperature = document.getElementById('temperature');
const cityName = document.getElementById('cityName');
const condition = document.getElementById('condition');
const humidity = document.getElementById('humidity');
const country = document.getElementById('country');
const wind = document.getElementById('wind');
const visibility = document.getElementById('visibility');

// Default theme on page load
document.body.style.background = 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)';
document.querySelector('h1').style.color = '#00b4d8';
searchBtn.style.background = '#00b4d8';
searchBtn.style.color = '#0f2027';
document.querySelector('.input-wrap').style.background = 'rgba(255,255,255,0.08)';
document.querySelector('.input-wrap').style.border = '1px solid #2c5364';
cityInput.style.color = '#ffffff';

// Weather themes


// Weather icons
function getWeatherIcon(weatherMain) {
  const icons = {
    'Clear': '☀️',
    'Clouds': '☁️',
    'Rain': '🌧️',
    'Drizzle': '🌦️',
    'Thunderstorm': '⛈️',
    'Snow': '❄️',
    'Mist': '🌫️',
    'Fog': '🌫️',
    'Haze': '🌫️',
  };
  return icons[weatherMain] || '🌡️';
}

// Search button
searchBtn.addEventListener('click', function () {
  getWeather(cityInput.value);
});

// Enter key
cityInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    getWeather(cityInput.value);
  }
});

function getWeather(city) {
  if (!city) return;

  const apiKey = config.apiKey;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  cityName.textContent = 'Loading...';

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      if (data.cod === '404') {
        cityName.textContent = 'City not found!';
        return;
      }

      // Display data
      cityName.textContent = data.name;
      country.textContent = data.sys.country;
      temperature.textContent = Math.round(data.main.temp) + '°C';
      condition.textContent = data.weather[0].description;
      humidity.textContent = data.main.humidity + '%';
      wind.textContent = (data.wind.speed * 3.6).toFixed(1) + ' km/h';
      visibility.textContent = (data.visibility / 1000).toFixed(1) + ' km';

      // Icon
      document.getElementById('weatherIcon').textContent = getWeatherIcon(data.weather[0].main);

      // Date and time
      const now = new Date();
      const day = now.toLocaleDateString('en-US', { weekday: 'long' });
      const date = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
      const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      document.getElementById('dateTime').textContent = `${day}, ${date} · ${time}`;

      // Apply theme
      const t = weatherThemes[data.weather[0].main] || weatherThemes['Clouds'];

      weatherCard.style.background = t.body;
      cityName.style.color = t.cityName;
      temperature.style.color = t.temp;
      condition.style.color = t.condition;
      humidity.style.color = t.humidity;
      wind.style.color = t.humidity;
      visibility.style.color = t.humidity;
      document.getElementById('dateTime').style.color = t.dateTime;

    });
}