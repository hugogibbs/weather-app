let weather = {
    apiKey: "a77fe1a0aeeed44c29856e7253db881c",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { temp, humidity } = data.main;
        const { icon, description } = data.weather[0];
        const { speed } = data.wind;
        console.log(name, temp, humidity, speed)
        document.querySelector(".city").innerText = name;
        document.querySelector(".temp").innerText = temp + " °C";
        document.querySelector(".icon").src = 
            "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind: " + speed + " km/h";
        document.querySelector(".weatherBox").classList.remove("loading");
        document.querySelector(".contentBox").style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
        this.fetchWeather(document.querySelector("input.text").value);
    }
};

document.querySelector("button.search").addEventListener("click", function () {
    weather.search();
});

document.querySelector("input.text").addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Vancouver");