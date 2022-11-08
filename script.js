let weather = document.querySelector('img');

async function getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Search}&APPID=a77fe1a0aeeed44c29856e7253db881c`, {mode: 'cors'})
    const weatherData = await response.json();
    img.src = weatherData.data.images.original.url;
  }

  getWeather();