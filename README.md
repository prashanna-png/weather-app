# 🌤️ The.Weather

A clean, minimal weather app that shows real-time weather data for any city in the world.

![Weather App](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML](https://img.shields.io/badge/HTML-5-orange) ![CSS](https://img.shields.io/badge/CSS-3-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

---

## 🔗 Live Demo

👉 https://weather-app-sand-ten-74.vercel.app

---

## 📸 Preview

<img width="1862" height="1050" alt="image" src="https://github.com/user-attachments/assets/dfbbf8fd-4589-4ef6-b3bd-6281f5467224" />
<img width="1862" height="1050" alt="image" src="https://github.com/user-attachments/assets/ccfb913a-a5b9-4ca1-abfa-8c521a66ae93" />
<img width="1862" height="1050" alt="image" src="https://github.com/user-attachments/assets/9b0c39c3-cbf4-410e-b3f9-2657f322ee67" />


---

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Real-time temperature in °C
- 🌤️ Dynamic weather icons based on conditions
- 🎨 Dynamic card background that changes with weather (clear, rain, clouds, snow, etc.)
- 💧 Humidity, wind speed, and visibility stats
- 🕐 Live date and time display
- 📱 Fully responsive — works on mobile, tablet, and desktop
- ⚡ Loads Kathmandu weather by default on startup

---

## 🛠️ Built With

- **HTML5** — structure
- **CSS3** — styling, glassmorphism effects, responsive media queries
- **Vanilla JavaScript** — logic, API calls, DOM manipulation
- **OpenWeatherMap API** — real-time weather data

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone git clone https://github.com/prashanna-png/weather-app.git
cd the-weather
```

### 2. Get an API key
- Go to [openweathermap.org](https://openweathermap.org/api)
- Create a free account
- Copy your API key

### 3. Set up your API key
Rename `config.example.js` to `config.js` and add your key:
```js
const config = {
  apiKey: 'your_api_key_here'
};
```

> ⚠️ **Never commit your real `config.js` to GitHub.** Make sure it's in `.gitignore`.

### 4. Open in browser
Just open `index.html` in your browser — no build tools needed.

---

## 📁 Project Structure

```
the-weather/
├── index.html          # Main HTML structure
├── style.css           # All styles + responsive design
├── script.js           # Weather logic + API calls
├── config.js           # API key (gitignored)
├── config.example.js   # Template for API key setup
└── logo/               # Icons (humidity, wind, visibility, favicon)
```

---

## 🔌 API Reference

This app uses the [OpenWeatherMap Current Weather API](https://openweathermap.org/current):

```
GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}&units=metric
```

---

## 📱 Responsive Breakpoints

| Screen | Breakpoint |
|--------|-----------|
| Mobile | `< 480px` |
| Tablet | `480px – 768px` |
| Desktop | `> 768px` |

---

## 🙋‍♂️ Author

**Prashanna**
- GitHub: prashanna-png
- Contact: prashandon97@gmail.com
- Deployed with ❤️ on [Vercel](https://vercel.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
