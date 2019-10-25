// #2 use semi-colon at end of JS statement (a good habit)
// #2 code in the majority of the time will work without semi-colon
// #2 alert('hello, world');
// #2 JS runs from top to bottom
// console.log(1);
// console.log(2);
// #2 create variable modern way - not all browsers suppprt these
// #2 cannot have any spaces, can contain numbers, dollar signs and underscores.
// #2 cannot start with anumber and no keywords.  See:
// #2 js is losely typed language as datatype can change
/* #2 multi-line comment
let age = 25;
let year = 2019;

// #2 output all vars
console.log(age, year);

// #2 update var
age = 30;
console.log(age, year);

// #2 constant vars
const point = 100;
// #2 ERROR: Uncaught TypeError: Assignment to constant variable.
// #2 point = 50;
console.log(point);

// #2 old variable define way 
var score = 75;
console.log(score);
*/

/* #2 removed 
// #2 strings - a series of letters, numbers and characters in quotes
console.log('hello, world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

// #2 strings concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName)

// #2 getting characters
// #2 js is a zero based language
console.log(fullName[0]);
console.log(fullName[2]);

// #2 string length - a property, hence no () parenthesis required
console.log(fullName.length);

// #2 string methods - a function associated with a particular data type or object 
// #2 some methods do not and some so alter original value
console.log(fullName.toUpperCase());

// #2 store method result in a var
let result = fullName.toLowerCase();
console.log(result, fullName);

// #2 use method argument to get position of '@'
let index = email.indexOf('@');
console.log(index);
*/

/* #2 removed
// #2 common string methods
let email = 'mario@thenetninja.co.uk';

// #2 find last 'n' position
// let result = email.lastIndexOf('n');

// #2 slice a section of a string - use args from and to
// let result = email.slice(0,5);

// #2 substring: starting a first arg, extract a number of characters
// let result = email.substring(4,10);

// #2 replace: replace first instance of a character with another character
// #2 can use  replace with regular expressions
// let result = email.replace('m', 'w');
let result = email.replace('n', 'w');

console.log(result);
*/

/* #2 removed
// #2 numbers
// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// #2 math operators +, -, *, /, ** (power), % (remainder)
// console.log(10 / 2);
// let result = radius % 3;

// #2 circumference
// #2 order of operation - B(brackets) I(indices) D(division) M(multiplication) A(addition) S(subtraction)
// let result = pi * radius**2;
// console.log(result);

// #2 use shorthand e.g. ++ and --
let likes = 10;
// #2 likes = likes + 1;
// likes++;
// likes += 10;
// likes -= 5;
// likes *= 2;
likes /= 2; 

console.log(likes);

// #2 NaN - not a number
console.log(5 / 'hello');
console.log(5 * 'hello');

// #2 string concat with numbers - new way is template strings
let result = 'the blog has ' + likes + ' likes';
console.log(result);
*/

/* #2 removed
// #2 template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// #2 concatenation way - okay for one variable, but messy with many
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);

// #2 template string way - usesd back ticks;  prefered by net ninja
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// #2 creating html templates -  good use case for template strings
// good for dyanimc data returned from a db
let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes</span> 
`;
console.log(html);
*/

/* #2 removed
// #2 arrays - store strings
let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas);

// #2 get secnond element as zero based
console.log(ninjas[1]);

// #2 override position 1
ninjas[1] = 'ken';
console.log(ninjas[1]);

// #2 store numbers in an array
let ages = [20,25,30,35];
console.log(ages[2]);

// #2 store different data types - may not make sense
let random = ['shaun', 'crystal', 30, 20];
console.log(random);

// #2 get length property
console.log(ninjas.length);

// #2 array methods
// #2 join: take array and join each element into a single string
// let result = ninjas.join('-');

// #2 indexOf: find element position
// let result = ninjas.indexOf('chun-li');

// #2 concat: join to arrays together
// let result = ninjas.concat(['ken', 'crystal']);

// #2 push (destructive - changes orginal value): push new value onto an array; returns length of new array
let result = ninjas.push('ken');
console.log(result);
console.log(ninjas);

// #2 pop (destructive - changes orginal value): pop value from an array; returns length of new array
result = ninjas.pop();
console.log(result);
console.log(ninjas);
*/

/* #2 removed
// #2 null and undefined - 'undefined' appears inside template string too
// let age;
// #2 null in a formula is zero - good to clear a form field
let age = null;

console.log(age, age + 3, `the age is ${age}`);
*/

// #2 booleans (true,false NOT "true","false") and comparisons
// console.log(true, false, "true", "false");

// #2 methods can return booleans
/* #3 removed
let email = 'luigi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];
*/

// let result = email.includes('@');
// console.log(result);

// result = email.includes('!');
// console.log(result);

// result = names.includes('luigi');
// console.log(result);

// result = names.includes('bowser');
// console.log(result);

/* #2 removed
// #2 comparison operators
let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 25);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

// #2 in JS lowercase letters are greater than uppercase
let name = 'shaun';
console.log(name == 'shaun');  // lose equality - no value type compare
console.log(name == 'Shaun');
console.log(name > 'crystal');
console.log(name > 'Shaun');
console.log(name > 'Crystal');
*/

/* #2 removed 
// #2 loose and strict comparison
let age = 25;

// #2 loose comparison (different types can still be equal) 

console.log(age == 25);
console.log(age == '25');  // JS is converting the string to a number prior to compare, thus still true
console.log(age != 25);
console.log(age != '25');

// #2 strict comparison (different types cannot be equal) - checks type and value;  use the most of the time
console.log(age === 25);
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25');
*/

/* #3 removed
// #2 type conversion (explictly ourselves or implicitly behind the scenes)

// #2 add 1 to score, but due to dtring we get concatenation
let score = '100';
console.log(score + 1);
console.log(typeof score);

// #2 add 1 to score, but this time convert to a number first
score = Number(score);
console.log(score + 1);

// #2 get type of var
console.log(typeof score);

// #2 NaN returned when attempting to convert a String to a Number 
let result = Number('hello');
console.log(result);

result = String(50);
console.log(result, typeof result);

// #2 converts number to boolean - 100 is truthy; both positve and negative are truthy
result = Boolean(100);
console.log(result, typeof result);

result = Boolean(-100);
console.log(result, typeof result);

// #2 0 is a falsy value
result = Boolean(0);
console.log(result, typeof result);

// #2 Strings of any length are a truthy value
result = Boolean('0');
console.log(result, typeof result);

// #2 Strings of no length are a falsy value
result = Boolean('');
console.log(result, typeof result);
*/

/* #3 removed
// #3 for loops - no semi-colon at end for loops
// #3 for loop: (initialization; condition; final expression - executes at end of code block)
for(let i = 0; i < 5; i++){
  // #3 code block
  console.log('in loop:', i);
}

console.log('loop finished');

// #3 loop through an array - iteration; each cycle is one iteration
const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
  // console.log(names[i]);
  let html = `<div>${names[i]}</div>`;
  console.log(html);
}

// #3 while loops
let i = 0;  // #3 must be declared outside
while(i < 5){
  console.log('in while loop: ', i);

  // #3 increment loop var
  i++;
}

i = 0;
while(i < names.length){
  console.log(names[i]);
  i++;
}

// #3 do while loops
i = 3;
do{
  console.log('val of i is: ', i);
  i++;
} while(i < 5);
*/

/* #3 removed
// #3 if statements
const age = 25;
if(age > 20){
  console.log('you are over 20 years old');  
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];
if(ninjas.length > 3){
  // #3 use double quotes so single quote does not close a string
  console.log("that's a lot of ninjas");
}

if(ninjas.length > 4){
  // #3 use double quotes so single quote does not close a string
  console.log("that's a lot more ninjas");
}

const password = 'p@ss12';

// #3 logical operators - OR || and AND &&
if(password.length >= 12 && password.includes('@')){
  console.log('that password is mighty strong');
} else if(password.length >= 8 || password.includes('@') && password.length >= 5){
  console.log('that password is strong enough!');
} else {
  console.log('password is not strong enough');
}

// #3 logical NOT (!) - does not change the value
let user = false;

if(!user){
  console.log('you must be logged in to continue');
}

console.log(!true);
console.log(!false);

// #3 break and continue
const scores = [50, 25,0,30,100, 20, 10];

for(let i = 0; i < scores.length; i++) {

  // #3 skip zero using continue 
  if(scores[i] === 0){
    continue;
  }

  console.log('your score: ', scores[i]);

  // #3 exit lopp at 100 to exit loop
  if(scores[i] === 100) {
    console.log('congrats, you got the top score!');
    break;
  }

}

// #3 switch statement - as soon as cases matches its code and all others are run
// #3 break ensures that the code for other cases is not ran once a match is found 
// #3 switch statements use struct equality
const grade = 'D';

switch(grade) {
  case 'A': 
    console.log('you got an A!');
    break;
  case 'B': 
    console.log('you got an B!');
    break;
  case 'C': 
    console.log('you got an C!');
    break;
  case 'D': 
    console.log('you got an D!');
    break;
  case 'E': 
    console.log('you got an E!');
    break;
  default:
    console.log('not a valid grade');
}
*/

// #3 variables and block scope

// #3 vars in root of document have global scope anywhere in the file
// #3 same scope rules apply to let and const
// #3 however a variable defined as var ignores block scope and is available outside the block
let age = 30;

if(true){
  // #3 change global scope var value
  // age = 40;

  // #3 use local/block scope
  let age = 40;
  let name = 'shaun';
  console.log('inside 1st code block: ', age, name);

  // #3 nested code block - takes the most recently defined value
  if(true) {
    // #3 ise a new local scoped var
    let age = 50;
    console.log('inside 2nd code block: ', age);
    var test = 'hello';
  }
}

// #3 name not shown as block scoped
// console.log('outside code block: ', age, name, test);

// #4 function expression - NOT hoisted to top, normally do this to esnure declared first, storred inside variable, need semi-colon at the end of an expression
// #4 use default function parameter values
const speak = function(name = 'luigi', time = 'night') {
  // #4 function parameters are treated as local var scope within function
  // #4 parameters must be passed in with the correct order
  console.log(`good ${time} ${name}!`);
};

greet();
greet();
greet();

speak('mario', 'morning');
speak('luigi', 'afternoon');
speak('wilson', 'night');
speak();
speak('shaun');

// #4 function declaration - hoisted to the top when run in browser, no semi-colon at end required
function greet() {
  console.log('hello there');
}

// #4 regular function returning a value
// const calcArea = function(radius) {
  /* #4 can return directly without local var 
  let area = 3.14 * radius**2;
  return area;
  */
//  return 3.14 * radius**2;
// };

// #4 store function return value
// const area = calcArea(5);

// console.log(area);

// #4 can re-use a value within subsequent fucntion calls
const calcVol = function(area) {

};

// calcVol(area);

// #4 arrow functions - cleaner and shorter function approach
/*
const calcArea = (radius) => {
  return 3.14 * radius**2;
};
*/ 

// #4 with one param no parenthesis is necessary
// #4 with single return value no return statement is needed
// #4 binding to this is different with arrow functions
const calcArea = radius => 3.14 * radius**2;

const area = calcArea(5);
console.log('area is:', area);

// #4 practise arrow functions
const greet2 = () => 'hello, world';

const result = greet2();

console.log(result);

const bill = (products, tax) => {
  let total = 0;
  for(let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
}

// #4 log directly to console
console.log(bill([10,15,30],0.2));

const name = 'shaun';

// #4 functions
const greet3 = () => 'hello';

let resultOne = greet3();
console.log(resultOne);

// #4 methods - invoke built in method using dot notation on the back of something an object
let resultTwo = name.toUpperCase();
console.log(resultTwo);

// #4 callbacks and foreach
// #4 callbacks are normal fucntions that pass into another function or method as an argument
const myFunc = (callbackFunc) => {
  // do something - call our callback function
  let value = 50;
  callbackFunc(value);
};

// #4 pass in a function as an argument
// myFunc(function(value){
//   // do something
//   console.log(value);
// });
// #4 callback with arrow notation
myFunc(value => {
  // do something
  console.log(value);
});


// #4 us built in array method
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// #4 iterate over the array - more elegant, use singular name for the array element
// people.forEach(function(person) {
//   console.log(person);
// });

// #4 declare a callback function using arrows  
const logPerson = (person, index) => {
  console.log(`${index} - hello ${person}`);
};

// #4 use arrow with array index too 
// people.forEach((person, index) => {
//   console.log(index, person);
// });

// #4 now take in a callback function - looks nicer
people.forEach(logPerson);

// #4 update DOM
// #4 get a reference to the 'ul' HTML element using a CSS selector
const ul = document.querySelector('.people');

// #4 initialize html template string
let html = ``;


// people.forEach(function(person) {
//   // #4 append to HTML template
//   html += `<li style="color: purple">${person}</li>`;
// });

// #4 convert to an arrow function
people.forEach(person => {
  // #4 append to HTML template
  html += `<li style="color: purple">${person}</li>`;
});


console.log(html);

// #4 update HTML element 
ul.innerHTML = html;

// #5 object literals - can be placed all on one line too
let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);
