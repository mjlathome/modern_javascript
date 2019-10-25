// within browser console can just type window.localStorage to see the data
// everything in localStorage is stored as a string with a key
// console.log(window.localStorage);

// as window is a global object its presence is inferred so the following works too
// console.log(localStorage);

// store data in local storage - will be turned into a string
// localStroage hangs around after a browser refresh, you can comment this out and the values will stay around
// even works under a new tab
// survives hard restart too
localStorage.setItem('name', 'mario');
localStorage.setItem('age', 50);

// can also view under Application tab in debug window under Storage
console.log(localStorage);

// get data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);

// updating data
// just use the original property name again with new value
localStorage.setItem('name', 'luigi');

// can use dot notation to update properties too
localStorage.age = 40;

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age);

// deleting data from local storage
// localStorage.removeItem('name');

// remove all items from localStorage for your wepapp
localStorage.clear();

name = localStorage.getItem('name');
age = localStorage.getItem('age');

console.log(name, age);

// working with local storage of arrays which must be converted to/from a string
const todos = [
  {text: 'play mariokart', author: 'shaun'},
  {text: 'buy some milk', author: 'mario'},
  {text: 'buy some bread', author: 'luigi'}
];

// a JSON string must have quotes around it's properties
console.log(JSON.stringify(todos));

// store JSON as string in local storage
localStorage.setItem('todos', JSON.stringify(todos));

// retrieve
const stored = localStorage.getItem('todos');
console.log(stored);

// convert back to JSON array
console.log(JSON.parse(stored));


