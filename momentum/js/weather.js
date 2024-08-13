const API_KEY = '4c8e59807a58ff1dfb85beb610114a0e'; //my API key 

function onGeoSuccess(position){ //성공시 실행할 함수
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; //current weather data를 보여주는 url
    fetch(url) //JS가 url을 부른다.
      .then((response) => response.json())
      .then((data) => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        weather.innerText = `${data.weather[0].main}`;
        city.innerText = data.name;
    });
}

function onGeoError(){ //실패시 실행할 함수
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);