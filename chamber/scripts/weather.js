const key = "5eb185939858cdcb14f2ca3d22cf03e4";
const lat = "-23.21788441963602"
const lon = "-45.89116845341678"
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`

async function apiFetch(){
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        displayResults(data)
    }
    catch(error){
        console.log(error)
    }
}
const currentTemp = document.querySelector(".weather")
const forecastinfo = document.querySelector(".forecast")

function displayResults(data) {
    const div = document.createElement("div")
    // creating the HTML's tag
    let weatherIcon = document.createElement("img")
    let temp = document.createElement("p")
    let tempDesc = document.createElement("p")
    let highTemp = document.createElement("p")
    let lowTemp = document.createElement("p")
    let humidity = document.createElement("p")
    let wind = document.createElement("p")

    // setting values
    temp.innerHTML = `${data.main.temp.toFixed(0)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    tempDesc.innerHTML = desc;
    highTemp.innerHTML = `High: ${data.main.temp_max.toFixed(0)}&deg;C`
    lowTemp.innerHTML = `Low: ${data.main.temp_min.toFixed(0)}&deg;C`
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`
    wind.innerHTML = `Wind Speed: ${data.wind.speed.toFixed(0)*3.6}Km/h`

    // setting attributes
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('loading', "lazy");
    div.setAttribute("class","weatherInfo")
    temp.setAttribute("class","temp")
    
    // adding in HTML
    div.appendChild(weatherIcon)
    div.appendChild(temp)
    div.appendChild(highTemp)
    div.appendChild(lowTemp)
    div.appendChild(humidity)
    div.appendChild(wind)    

    currentTemp.appendChild(div)
}

async function apiFetchForecast() {
    try{
        const response = await fetch(urlForecast)
        const data = await response.json()
        console.log(data)
        displayForecast(processWeatherData(data))
    }
    catch(error){
        console.log(error)
    }
}

function displayForecast(data){
    data.forEach(tempFore  => {
        const div = document.createElement("div");
        const dateForecast = document.createElement("h4");
        const minForecast = document.createElement("p");
        const maxForecast = document.createElement("p");
        const imgForecast = document.createElement("img");

        dateForecast.textContent = tempFore.date;
        minForecast.innerHTML = `Min: ${tempFore.minTemp}&deg;C`;
        maxForecast.innerHTML = `Max: ${tempFore.maxTemp}&deg;C`;
        const icon = `https://openweathermap.org/img/w/${tempFore.icon}.png`

        minForecast.classList.add("minmax");
        maxForecast.classList.add("minmax");
        imgForecast.setAttribute('src', icon);
        imgForecast.setAttribute('alt', tempFore.desc);
        imgForecast.setAttribute('loading', "lazy");

        div.appendChild(dateForecast)        
        div.appendChild(imgForecast)     
        div.appendChild(minForecast)        
        div.appendChild(maxForecast)        
        
        forecastinfo.appendChild(div)
    });
}

function processWeatherData(data) {
    const days = {}; 
    data.list.forEach(item => {
        const date = new Date(item.dt * 1000).toLocaleDateString("en-US", {weekday: "short"});
        if (!days[date]) { 
            days[date] = []; 
        } 
        days[date].push(item);
    });
    const forecast = Object.keys(days).slice(0, 3).map(date => {
        const dayData = days[date]; 
        const temps = dayData.map(entry => entry.main.temp); 
        const minTemp = Math.min(...temps); 
        const maxTemp = Math.max(...temps); 
        return {
            date: date, 
            minTemp: minTemp.toFixed(0),
            maxTemp: maxTemp.toFixed(0), 
            icon: dayData[0].weather[0].icon,
            desc: dayData[0].weather[0].description,
        };
    });
    return forecast;
}

apiFetchForecast()

apiFetch()