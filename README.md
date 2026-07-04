# 🌤️ The.Weather

A clean, minimal weather app that shows real-time weather data for any city in the world.

![Weather App](https://img.shields.io/badge/Status-Live-brightgreen) ![HTML](https://img.shields.io/badge/HTML-5-orange) ![CSS](https://img.shields.io/badge/CSS-3-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

---

## 🔗 Live Demo

👉 [https://weather-app-sand-ten-74.vercel.app](https://weather-app-sand-ten-74.vercel.app)

---

## 📸 Preview

<img width="1862" height="1050" alt="image" src="https://github.com/user-attachments/assets/dfbbf8fd-4589-4ef6-b3bd-6281f5467224" />

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
- 🔒 API key secured via Vercel serverless functions

---

## 🛠️ Built With

- **HTML5** — structure
- **CSS3** — styling, glassmorphism effects, responsive media queries
- **Vanilla JavaScript** — logic, API calls, DOM manipulation
- **OpenWeatherMap API** — real-time weather data
- **Vercel Serverless Functions** — secure API key handling

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/prashanna-png/weather-app.git
cd weather-app
```

### 2. Get an API key
- Go to [openweathermap.org](https://openweathermap.org/api)
- Create a free account
- Copy your API key

### 3. Set up environment variable

**For Vercel deployment:**
1. Go to your project on [vercel.com](https://vercel.com)
2. Navigate to **Settings → Environment Variables**
3. Add `OPENWEATHER_API_KEY` as the key and paste your API key as the value
4. Redeploy

> ⚠️ **Never commit your API key to GitHub.** This project uses a serverless function to keep the key secure on the server side.

### 4. Open in browser
Just open `index.html` in your browser — no build tools needed.

---

## 📁 Project Structure

```
weather-app/
├── api/
│   └── weather.js          # Vercel serverless function (hides API key)
├── logo/                   # Icons (humidity, wind, visibility, favicon)
├── index.html              # Main HTML structure
├── style.css               # All styles + responsive design
├── script.js               # Weather logic + fetch calls
├── config.example.js       # Template showing expected config format
└── README.md
```

---

## 🔌 API Reference

Weather data is fetched through a serverless function to keep the API key hidden:

```
GET /api/weather?city={city}
```

Which internally calls the OpenWeatherMap API:

```
GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={key}&units=metric
```

---

## 🔒 Security

This project uses a **Vercel serverless function** (`/api/weather.js`) to proxy API requests. The OpenWeatherMap API key is stored as an environment variable on Vercel and is never exposed to the frontend or committed to the repository.

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
- GitHub: [prashanna-png](https://github.com/prashanna-png)
- Contact: prashandon97@gmail.com
- Deployed with ❤️ on [Vercel](https://vercel.com)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
