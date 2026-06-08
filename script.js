const cityInput = document.getElementById('cityInput');
const weatherCard = document.getElementById('weatherCard');
const searchBtn = document.getElementById('searchBtn');
const temperature = document.getElementById('temperature');
const cityName = document.getElementById('cityName');
const condition = document.getElementById('condition');
const humidity = document.getElementById('humidity');
const country = document.getElementById('country');


document.body.style.background = 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)';
document.querySelector('h1').style.color = '#00b4d8';
searchBtn.style.background = '#00b4d8';
searchBtn.style.color = '#0f2027';
cityInput.style.background = 'rgba(255,255,255,0.08)';
cityInput.style.color = '#ffffff';
cityInput.style.border = '1px solid #2c5364';

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
      country.textContent = data.sys.country;
      humidity.textContent = 'Humidity: ' + data.main.humidity + '%';
    })
}

cityInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    getWeather(cityInput.value);
  }
})
const now = new Date();
console.log(now);




