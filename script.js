const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const cityName = document.getElementById('cityName');
const country = document.getElementById('country');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const visibility = document.getElementById('visibility');
const condition = document.getElementById('condition');
const clock = document.getElementById('clock');

window.onload = function () {
  getWeather("Kathmandu");
};

const weekDay = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

const month = [
  "January", "February", "March", "April",
  "May", "June", "July", "August",
  "September", "October", "November", "December"
];

const d = new Date();
const day = weekDay[d.getDay()];
const monthName = month[d.getMonth()];
const monthDay = d.getDate();

document.getElementById('day').innerText = day;
document.getElementById('month').innerText = monthName;
document.getElementById('month-day').innerText = monthDay;

const weatherThemes = {
  'Clear': { card: 'linear-gradient(135deg, #1a1a2e, #e65c00)' },
  'Clouds': { card: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)' },
  'Rain': { card: 'linear-gradient(135deg, #0a0f1e, #0d3b6e, #1565c0)' },
  'Drizzle': { card: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)' },
  'Thunderstorm': { card: 'linear-gradient(135deg, #0d0221, #1a0533, #6a0dad)' },
  'Snow': { card: 'linear-gradient(135deg, #0a1628, #1a3a5c, #a8d8ea)' },
  'Mist': { card: 'linear-gradient(135deg, #1c1c1c, #2d2d2d, #4a4a4a)' },
  'Fog': { card: 'linear-gradient(135deg, #1c1c1c, #2d2d2d, #4a4a4a)' },
  'Haze': { card: 'linear-gradient(135deg, #1c1c1c, #2d2d2d, #4a4a4a)' },
};

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

function getWeather(city) {
  if (!city) return;

  const apiKey = config.apiKey;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  cityName.innerText = "Loading...";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      if (data.cod === '404') {
        cityName.innerText = 'City not found!';
        return;
      }

      const d = new Date();

      cityName.innerText = data.name;
      country.innerText = data.sys.country;
      clock.innerHTML = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      temperature.innerHTML = Math.round(data.main.temp);
      humidity.innerHTML = data.main.humidity + " %";
      wind.innerHTML = (data.wind.speed * 3.6).toFixed(1) + ' km/h';
      visibility.innerHTML = (data.visibility / 1000).toFixed(1) + ' km';
      condition.innerHTML = data.weather[0].description;

      const iconEl = document.getElementById('weatherIcon');
      iconEl.classList.add('fade-out');
      setTimeout(() => {
        iconEl.textContent = getWeatherIcon(data.weather[0].main);
        iconEl.classList.remove('fade-out');
      }, 300);

      const t = weatherThemes[data.weather[0].main] || weatherThemes['Clouds'];
      document.getElementById('card').style.background = t.card;
      console.log(`City: ${data.name}, Raw visibility: ${data.visibility} meters`);
    });
}

searchBtn.addEventListener('click', function () {
  getWeather(cityInput.value);
});

cityInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    getWeather(cityInput.value);
  }
});