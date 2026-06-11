const cityInput = document.getElementById('cityInput');
const weatherCard = document.getElementById('weatherCard');
const searchBtn = document.getElementById('searchBtn');

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
let hour = d.getHours();
let minutes = d.getMinutes();

document.getElementById('day').innerText = day;
document.getElementById('month').innerText = monthName;
document.getElementById('month-day').innerText = monthDay;
document.getElementById('hour').innerText = hour;
document.getElementById('min').innerText = minutes;

cityInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    getWeather(cityInput.value);
  }
});

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
      document.getElementById('cityName').innerHTML = data.name;
      document.getElementById('country').innerHTML = data.sys.country;
    });
}