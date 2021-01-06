const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const iconWeather = document.querySelector('.icon-weather');
const btn = document.querySelector('.btn');
const wind = document.querySelector('.wind');

const getWeather = () => {
  let city = document.querySelector('.city').value;
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3eabe3da60a0bd4f4b5a5d7d3763dc4b`
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      temp.innerHTML = Math.round(data.main.temp - 273) + '&deg;';
      description.textContent = data.weather[0]['description'];
      iconWeather.innerHTML = `<img class="icon" src="assets/icon/${data.weather[0]['icon']}.svg">`;
      wind.textContent = `wind ${data.wind['speed']}  m/s`;
    })
    .catch(function () {
      // catch any errors
    });
};

btn.addEventListener('click', getWeather);

getWeather();
