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
const weatherThemes = {
  'Clear': {
    body: 'linear-gradient(135deg, #f97316, #fbbf24)',
    card: 'rgba(255,255,255,0.2)',
    cityName: '#7c2d12',
    temp: '#7c2d12',
    condition: '#b45309',
    humidity: '#92400e',
    dateTime: '#7c2d12',
    btn: '#f97316',
    input: 'rgba(255,255,255,0.3)',
    inputBorder: 'rgba(255,255,255,0.4)',
    inputColor: '#7c2d12',
  },
  'Clouds': {
    body: 'linear-gradient(135deg, #1e3a5f, #4a6fa5)',
    card: 'rgba(0,0,0,0.2)',
    cityName: '#00b4d8',
    temp: '#ffffff',
    condition: '#94a3b8',
    humidity: '#cbd5e1',
    dateTime: '#7a9aaa',
    btn: '#4a6fa5',
    input: 'rgba(255,255,255,0.08)',
    inputBorder: '#2c5364',
    inputColor: '#ffffff',
  },
  'Rain': {
    body: 'linear-gradient(135deg, #0c1445, #1d4ed8)',
    card: 'rgba(0,0,0,0.25)',
    cityName: '#60a5fa',
    temp: '#ffffff',
    condition: '#93c5fd',
    humidity: '#bfdbfe',
    dateTime: '#60a5fa',
    btn: '#3b82f6',
    input: 'rgba(255,255,255,0.08)',
    inputBorder: '#1d4ed8',
    inputColor: '#ffffff',
  },
  'Drizzle': {
    body: 'linear-gradient(135deg, #0c1445, #1d4ed8)',
    card: 'rgba(0,0,0,0.25)',
    cityName: '#60a5fa',
    temp: '#ffffff',
    condition: '#93c5fd',
    humidity: '#bfdbfe',
    dateTime: '#60a5fa',
    btn: '#3b82f6',
    input: 'rgba(255,255,255,0.08)',
    inputBorder: '#1d4ed8',
    inputColor: '#ffffff',
  },
  'Thunderstorm': {
    body: 'linear-gradient(135deg, #0a0a1a, #2d1b4e)',
    card: 'rgba(0,0,0,0.3)',
    cityName: '#a78bfa',
    temp: '#fbbf24',
    condition: '#c4b5fd',
    humidity: '#ddd6fe',
    dateTime: '#a78bfa',
    btn: '#7c3aed',
    input: 'rgba(255,255,255,0.06)',
    inputBorder: '#2d1b4e',
    inputColor: '#ffffff',
  },
  'Snow': {
    body: 'linear-gradient(135deg, #e0f2fe, #bae6fd)',
    card: 'rgba(255,255,255,0.4)',
    cityName: '#0369a1',
    temp: '#0c4a6e',
    condition: '#0369a1',
    humidity: '#075985',
    dateTime: '#0369a1',
    btn: '#0369a1',
    input: 'rgba(255,255,255,0.6)',
    inputBorder: '#bae6fd',
    inputColor: '#0c4a6e',
  },
  'Mist': {
    body: 'linear-gradient(135deg, #1c1c1c, #3d3d3d)',
    card: 'rgba(0,0,0,0.2)',
    cityName: '#9ca3af',
    temp: '#ffffff',
    condition: '#d1d5db',
    humidity: '#e5e7eb',
    dateTime: '#9ca3af',
    btn: '#6b7280',
    input: 'rgba(255,255,255,0.08)',
    inputBorder: '#3d3d3d',
    inputColor: '#ffffff',
  },
  'Fog': {
    body: 'linear-gradient(135deg, #1c1c1c, #3d3d3d)',
    card: 'rgba(0,0,0,0.2)',
    cityName: '#9ca3af',
    temp: '#ffffff',
    condition: '#d1d5db',
    humidity: '#e5e7eb',
    dateTime: '#9ca3af',
    btn: '#6b7280',
    input: 'rgba(255,255,255,0.08)',
    inputBorder: '#3d3d3d',
    inputColor: '#ffffff',
  },
  'Haze': {
    body: 'linear-gradient(135deg, #1c1c1c, #3d3d3d)',
    card: 'rgba(0,0,0,0.2)',
    cityName: '#9ca3af',
    temp: '#ffffff',
    condition: '#d1d5db',
    humidity: '#e5e7eb',
    dateTime: '#9ca3af',
    btn: '#6b7280',
    input: 'rgba(255,255,255,0.08)',
    inputBorder: '#3d3d3d',
    inputColor: '#ffffff',
  },
};

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
      searchBtn.style.background = t.btn;
      document.querySelector('.input-wrap').style.background = t.input;
      document.querySelector('.input-wrap').style.border = `1px solid ${t.inputBorder}`;
      cityInput.style.color = t.inputColor;
      document.getElementById('dateTime').style.color = t.dateTime;

    });
}