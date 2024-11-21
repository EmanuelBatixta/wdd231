const key = "5eb185939858cdcb14f2ca3d22cf03e4";
const lat = "-23.21788441963602"
const lon = "-45.89116845341678"
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`

async function apiFetch(){
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        displayResults(data)
    }
    catch(error){
        window.alert(error)
    }
}
const currentTemp = document.querySelector(".weather")

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

apiFetch()