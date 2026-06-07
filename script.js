const cityInput = document.getElementById('cityInput');
const weatherCard = document.getElementById('weatherCard');
const searchBtn = document.getElementById('searchBtn');
const temperature = document.getElementById('temperature');
const cityName = document.getElementById('cityName');
const condition = document.getElementById('condition');
const humidity = document.getElementById('humidity');

searchBtn.addEventListener('click', function () {
  const city = cityInput.value;
  getWeather(city);
});

function getWeather(city) {
  const apiKey = config.apiKey;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  cityName.textContent = 'Loading...';

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.cod === '404') {
        cityName.textContext = 'city not found!!';
        return;
      }
      console.log(data);
      cityName.textContent = data.name;
      temperature.textContent = data.main.temp + '°C';
      condition.textContent = data.weather[0].description;
      humidity.textContent = 'Humidity: ' + data.main.humidity + '%';
    })
}

cityInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    getWeather(cityInput.value);
  }
})
