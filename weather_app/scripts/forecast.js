// #126
class Forecast{
  constructor(){
    this.key = 'qOD8ENtqS5G69uDvGGJa3ayveuR2VFvi';
    this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
    this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  }

  // get the city and weather data
  async updateCity(city){
    // console.log(city);

    // can call out forecast.js functions as forecast.js is above our app.js functions within the HTML doc

    // wait until the Location api has finished 
    const cityDets = await this.getCity(city);

    // wait until the Current Conditions api has finished
    const weather = await this.getWeather(cityDets.Key);

    // return object of city and weather objects as properties
    /* use object shorthand notation as property name and value are the same
    return {
      cityDets: cityDets,
      weather: weather
    };
    */
    return { cityDets, weather };
  }  

  // get city information
  async getCity(city){

    // query arguments
    const query = `?apikey=${this.key}&q=${city}`;

    // get the response
    const response = await fetch(this.cityURI + query);

    // get the json data
    const data = await response.json();

    // get the first element from the city array
    // console.log(data[0]);

    return data[0];
  }

  // get weather information
  async getWeather(id){
    // query arguments - city id and apikey query arg
    const query = `${id}?apikey=${this.key}`;

    // get the response
    const response = await fetch(this.weatherURI + query);

    // get the json data
    const data = await response.json();

    // for weather there is only one object in the array
    // console.log(data);

    // return the single object from the array
    return data[0];
  }

}

/* #126 
// create AccuWeather account, generate free App and get the App key.  see:
// https://developer.accuweather.com/
// with free account can only get the weather 50 times per day, 
// but can create a new app and get a new key 
const key = 'qOD8ENtqS5G69uDvGGJa3ayveuR2VFvi';

// get weather information
const getWeather = async (id) => {
  // base url
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';

  // query arguments - city id and apikey query arg
  const query = `${id}?apikey=${key}`;

  // get the response
  const response = await fetch(base + query);

  // get the json data
  const data = await response.json();

  // for weather there is only one object in the array
  // console.log(data);

  // return the single object from the array
  return data[0];
};

// get city information
const getCity = async (city) => {
  // base url
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';

  // query arguments
  const query = `?apikey=${key}&q=${city}`;

  // get the response
  const response = await fetch(base + query);

  // get the json data
  const data = await response.json();

  // get the first element from the city array
  // console.log(data[0]);

  return data[0];
};
*/

/* test
// call Location api function and handle Promise 
getCity('manchester').then(data => {
  // console.log(data)
  // call the Current Conditions api to get city Key provided weather
  return getWeather(data.Key);
}).then(data => {
  console.log(data);
}).catch(err => console.log(err));

// weather test with hardcoded city Key
// getWeather(329260);
*/

