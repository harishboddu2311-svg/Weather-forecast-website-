const apiKey = "YOUR_API_KEY_HERE";

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        document.getElementById('cityName').innerText = data.name;
        document.getElementById('temp').innerText = Math.round(data.main.temp) + "°C";
        document.getElementById('desc').innerText = data.weather[0].description;
    } catch (error) {
        alert("City not found!");
    }
}
