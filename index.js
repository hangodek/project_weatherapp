const myTemp = document.querySelector("#temp");
const myHumidity = document.querySelector("#humidity");
const locationInput = document.querySelector("#locationInput");
const myBtn = document.querySelector("#myBtn");

async function getWeatherData() {
    const fetchData = await fetch(`http://api.weatherapi.com/v1/current.json?key=3a09b50ecf7b4998a2c43253240106&q=${locationInput.value.toLowerCase()}`);
    const fetchJson = await fetchData.json();
    console.log(fetchJson.current.temp_c);

    myTemp.textContent = `${locationInput.value.charAt(0).toUpperCase() + locationInput.value.slice(1)} current temp is ${fetchJson.current.temp_c} C`;
    myHumidity.textContent = `${locationInput.value.charAt(0).toUpperCase() + locationInput.value.slice(1)} current humidity is ${fetchJson.current.humidity} %`;
}

myBtn.addEventListener("click", getWeatherData);

