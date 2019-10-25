console.log(1);
console.log(2);

// emulate waiting for 2 seconds and firing a callback function
// this is non-blocking code
setTimeout(() => {
  console.log('callback function fired');
}, 2000);

console.log(3);
console.log(4);

// create re-usable function to GET our todos list and call callback
// resource is the URL we want to get data from
// with Promise callback no longer required
// const getTodos = (resource, callback) => {
const getTodos = (resource) => {  

  // now returns a Promise
  return new Promise((resolve, reject) => {

    // build HTTP request
    const request = new XMLHttpRequest();

    // handle request state change
    // see:
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    request.addEventListener('readystatechange', () => {
      // console.log(request, request.readyState);

      // check when request is complete (i.e. readyState is 4)
      // and request status is 200 (i.e. OK)
      // see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
      if(request.readyState === 4 && request.status === 200){
        // get Endpoint response data parded from JSON to JavaScript array
        // JSON - JavaScript Object Notation
        const data = JSON.parse(request.responseText);
        // with Promise callback no longer required
        // callback(undefined, data);
        // use Promise resolve
        resolve(data);
        // console.log(request, request.responseText)
      } else if(request.readyState === 4){
        // with Promise callback no longer required
        // callback('could not fetch data', undefined);
        // use Promise reject
        reject('error getting resource');
        // console.log('could not fetch the data');
      }
    });

    // see example from:
    // https://jsonplaceholder.typicode.com/
    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

    // use local json data file
    // request.open('GET', 'todos.json');
    request.open('GET', resource);

    // send request to Endpoint.
    // Use F12 debug tools -> Network -> Headers to see request type & Response to see results 
    request.send();
  });

};

console.log(1);
console.log(2);

// run getTodos function with callback arrow function 
// callback is more flexible to handle reponse
// convention is error first then data
// this is no-blocking code
// Now using Promise below 
// getTodos('todos/luigi.json', (err, data) => {
//   console.log('callback fired');
//   // console.log(err, data);
//   if(err){
//     console.log(err);
//   } else{
//     // data is just a string that looks like JavaScript object  
//     // data transfer for browser with server is done in text format
//     // JSON is just a way of transferring data bewteen server and client
//     console.log(data);

//     // create a second request
//     // this is called callback hell due to nesting
//     getTodos('todos/mario.json', (err, data) => {
//       console.log(data);
//       getTodos('todos/shaun.json', (err, data) => {
//         console.log(data);
//       });
//     });
//   }
// });

// Now using mutliple Promises below
// resolves callback hell 
getTodos('todos/luigi.json').then(data => {
  console.log('Promise 1 resolved:', data);
  // make getTodos function return a promise too which allows 'then' method usage
  return getTodos('todos/mario.json');
}).then(data => {
  // this is the second Promise resolve 
  console.log('Promise 2 resolved:', data);
  // make getTodos function return a promise too which allows 'then' method usage
  return getTodos('todos/shaun.json');
}).then(data => {
  // this is the third Promise resolve 
  console.log('Promise 3 resolved:', data);
}).catch(err => {
  // catch gets any Promise error
  console.log('Promise rejected:', err);
});

console.log(3);
console.log(4);

// promise example

const getSomething = () => {
  // Promise is something that takes time to do
  // Promise is either resolved (i.e. get data) or rejected (i.e. get error)
  return new Promise((resolve, reject) => {
    // fetch something
    // resolve('some data');
    reject('some error');
  });
};

// when we get a Promise back from a function call we can call the 'then' method to run either the resolve or reject callback function  
// getSomething().then((data) => {
//   console.log(data);
// }, (err) => {
//   console.log(err);
// });

// alternative reject error handling with catch method
// this is sometimes a little neater, especially with chainied promises
// getSomething().then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// });

// fetch api for easier HTTP Requests
// fetch is a function built right into JavaScript language
// fetch returns a Promise
// fetch is much less code to write and easier to maintain
fetch('todos/luigi.json').then(response => {
  // fetch resolves with a bad URL, so need to check 'status' property
  console.log('resolved', response);

  // call json method which returns a Promise
  return response.json();
}).then(data => {
  // handle json Promise resolve which passes in URL json results
  console.log(data);
})
.catch((err) => {
  // fetch rejects is there is a network issue reaching the resource
  console.log('rejected', err);
});

// async & await - non-blocking
// allow us to chain Promises together in a clear and more readable way
// async always returns a Promise
// async & await is not supported yet in all browsers i.e. Internet Explorer
const getTodosA = async() => {

  // await stalls JavaScript and does not allow the assignment until the fetch is complete
  // await within the asyncronous fucntion are executed in order one by one
  const response = await fetch('todos/luigis.json');
  // console.log(response);

  // handle response when URL is incorrect so that response.json is not ran
  if(response.status !== 200){
    // throw an new Error object
    throw new Error('cannot fetch the data');  
  }

  const data = await response.json();

  // console.log(data);  
  return data;

};

// const test = getTodosA();
// console.log(test);

// prove async is asyncronoius non-blocking code
console.log(1);
console.log(2);

// handle Promise resolve
getTodosA()
  .then(data => console.log('resolved:', data))
  // handle error object and call message method
  .catch(err => console.log('rejected:', err.message));

console.log(3);
console.log(4);
  
