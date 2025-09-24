async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "YOUR_API_KEY"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},in&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    document.getElementById("weather-result").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Temp: ${data.main.temp}°C</p>
      <p>☁️ Condition: ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
    `;
  } catch (error) {
    document.getElementById("weather-result").innerHTML = `<p>${error.message}</p>`;
  }
}
  