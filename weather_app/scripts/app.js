// climate icons source was:
// http://adamwhitcroft.com/climacons/
// however thse were relabelled and downlodaed from  the following lesson 108 url...
// https://github.com/iamshaunjp/modern-javascript/tree/lesson-108
// .. and extracted under img folder within project

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
// #126 use classes
const forecast = new Forecast();

console.log(forecast);

const updateUI = (data) => {
  // extract data into local vars
  // console.log(data);
  // const cityDets = data.cityDets;
  // const weather = data.weather;

  // destructure properties - Destructuring
  // this allows us to store object properties in local vars
  // so long as the name remains the same
  const { cityDets, weather } = data;

  // update details template
  details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  // update the night/day & icon images
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);
  
  // use ternanry operator
  
  // let timeSrc = null;
  // if(weather.IsDayTime){
  //   timeSrc = 'img/day.svg';
  // } else {
  //   timeSrc = 'img/night.svg';
  // }
  
  let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';   
  time.setAttribute('src', timeSrc);  

  // remove the d-none class if present
  if(card.classList.contains('d-none')){
    card.classList.remove('d-none');
  }
};

// #126 use classes
// // get the city and weather data
// const updateCity = async (city) => {
//   // console.log(city);

//   // can call out forecast.js functions as forecast.js is above our app.js functions within the HTML doc

//   // wait until the Location api has finished 
//   const cityDets = await getCity(city);

//   // wait until the Current Conditions api has finished
//   const weather = await getWeather(cityDets.Key);

//   // return object of city and weather objects as properties
//   // use object shorthand notation as property name and value are the same
//   // return {
//   //   cityDets: cityDets,
//   //   weather: weather
//   // };
  
//   return { cityDets, weather };
// };

cityForm.addEventListener('submit', e => {
  // prevent default action
  e.preventDefault();

  // get city field value and trim it
  const city = cityForm.city.value.trim(); 

  // clear form fields
  cityForm.reset();

  // update the ui with new city and handle the Promise
  // #126 classes
  // updateCity(city)
  forecast.updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

  // #14 - set local storage
  localStorage.setItem('city', city);    
});

// use ternanry operator
const result = true ? 'value 1' : 'value 2';
console.log(result);

// #14 - get local storage city value if already set.
// #14 - if not set then null is returned which is falsey so code block does not run

if(localStorage.getItem('city')){
  // make api call to get city weather and update our UI
  // #126 use classes
  // updateCity(localStorage.getItem('city'))
  forecast.updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data))
    .catch(err => console.log(err));
}
