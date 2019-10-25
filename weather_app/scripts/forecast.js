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

