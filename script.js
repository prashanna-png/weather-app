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
const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const d = new Date();
const day = weekDay[d.getDay()];
const monthName = month[d.getMonth()];
const monthDay = d.getDate();

document.getElementById('day').innerText = day;
document.getElementById('month').innerText = monthName;
document.getElementById('month-day').innerText = monthDay;


searchBtn.addEventListener('click', function () {
  getWeather(cityInput.value);
});

cityInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    getWeather(cityInput.value);
  }
});

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

// Inside your .then(data) block:

function getWeather(city) {
  if (!city) return;

  const apiKey = config.apiKey;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      cityName.innerText = data.name;
      country.innerText = data.sys.country;
      const time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      clock.innerHTML = time;

      temperature.innerHTML = Math.round(data.main.temp);
      humidity.innerHTML = data.main.humidity;
      wind.innerHTML = (data.wind.speed * 3.6).toFixed(1) + ' ';
      visibility.innerHTML = (data.visibility / 1000).toFixed(1) + ' ';
      condition.innerHTML = data.weather[0].description;
      document.getElementById('weatherIcon').textContent = getWeatherIcon(data.weather[0].main);

    });
};