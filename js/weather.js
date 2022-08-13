const API_KEY = "02dbcf29a3be3825742179e5b5fbde1d";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("you live in", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:first-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("위치 정보가 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
