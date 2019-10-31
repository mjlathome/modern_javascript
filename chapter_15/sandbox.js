/* #115
// how to create an array - 2 methods 
const names = ['shaun', 'crystal'];
console.log(names);

const ages = new Array(20, 25, 30);
console.log(ages);

// object created via constructor using literal syntax - with no properties 
const userOne = {};
console.log(userOne);

// object constructor 
const userTwo = new Object();
console.log(userTwo);

// all of the primitive types of objects in JavaScript are not objects 
// i.e Strings, numbers, booleans, null
const name = 'mario';
console.log(name, name.length, name.toUpperCase()); 

// when we use a property on a primitive, 
// JavaScript wraps the primitive as a Object, 
// calls method and then un-wraps all under the hood 

// a string wrapper object 
const nameTwo = new String('ryu');
console.log(nameTwo);

// a number wrapper object
console.log(new Number(5));

// a boolean wrapper object
console.log(new Boolean(true));

// everything in JavaScript can behave like an Object
*/

/* #117
// objects use literal notiation - not maintainable as code repeats
const userOne = {
  username: 'ryu',
  email: 'ryu@thenetninja.co.uk',
  login(){
    console.log('the user logged in');    
  },
  logout(){
    console.log('the user logged out');
  }
};

console.log(userOne.email, userOne.username);
userOne.login();

const userTwo = {
  username: 'chun li',
  email: 'chun.li@thenetninja.co.uk',
  login(){
    console.log('the user logged in');    
  },
  logout(){
    console.log('the user logged out');
  }
};

console.log(userTwo.email, userTwo.username);
userTwo.login();

// best to creat our own classes
// const userThree = new User('shaun@thenetninja.co.uk', 'shaun');

// one way is the prototype way directly - old way
// with ES6 we can use classes (syntatic sugar) which still use the prototype method under the hood
*/

/* #118

// JavaScript does not have Classes built it
// it emulates them using the prototype model

// encapsulate everything for a user inside the class
class User{
  // set up properties and associate values 
  constructor(username, email){    
    this.username = username;
    this.email    = email;
    this.score    = 0;
  }
  // don't comma separate methods
  // we use regular functions as arrow functions don't bind a value to the 'this' keyword which would be the Window Object
  login(){
    // with no return value JS returns undefined
    console.log(`${this.username} just logged in`);
    // return this to allow chaining, not mandatory
    return this;
  }
  logout(){
    console.log(`${this.username} just logged out`);
    // return this to allow chaining, not mandatory
    return this;
  }
  incScore(){
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    // return this to allow chaining, not mandatory
    return this;
  }
}

// a subsclass extends another class
// like an admin user
class Admin extends User{
  // if there is no constructor defined then the superclass constructor is called
  constructor(username, email, title){
    // must call super to user superclass constructor first
    super(username, email);
    this.title = title;
  }
  deleteUser(user){
    // filter - iterates an array
    // fires callback function for each array element
    // if return value is true then array element is kept else removed 
    // users = users.filter((u) => {
    //  return u.username !== user.username;
    // })
    // shortform
    users = users.filter(u => u.username !== user.username);
  }
}

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object

// create class instances
const userOne = new User('mario', 'mario@thenetnija.co.uk');
const userTwo = new User('luigi', 'luigi@thenetnija.co.uk');
const userThree = new Admin('shaun', 'shaun@thenetnija.co.uk', 'black-belt-ninja');

console.log(userOne, userTwo, userThree);

userOne.login();
userOne.logout();

userTwo.logout();

userOne.incScore();
userOne.incScore();

userOne.login().incScore().incScore().logout();
userThree.login();

// build array of users 
let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);

// only admins can use delete - this causes an error
// userOne.deleteUser(userThree);
*/

/* #122

// use prototype way to create a Class, prior to Class keyword 
// Uppercase function prefix by convention indicates a Class
function User(username, email){
  this.username = username;
  this.email = email;

  // can add methods via contructor, but there is a better way in the prototype
  // this is stored on the object, not in the proto property
  // this.login = function(){
  //   console.log(`${this.username} just logged in`);
  // }
}

// use contructor functions to 
// store 'login' method on the User prototype
User.prototype.login = function(){
  // 'this' refers to the object the method is called on
  console.log(`${this.username} just logged in`);

  // allow chaining, if required, else undefined returned
  return this;
}

User.prototype.logout = function(){
  // 'this' refers to the object the method is called on
  console.log(`${this.username} just logged out`);

  // allow chaining, if required, else undefined returned
  return this;
}

// create Admin contructor function
function Admin(username, email, title){
  // call User constructor function as super does not work as not a Class
  // pass througn new Object to attach properties
  // followed by the constructor values
  User.call(this, username, email);

  this.title = title;
}

// copy the User prototype methods to the Admin prototype
Admin.prototype = Object.create(User.prototype);

// add new method to Admin prototype, but not the Object
// methods in the second prototype are from the User prototype
Admin.prototype.deleteUser = function(){

};

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object

// create class instances
const userOne = new User('mario', 'mario@thenetnija.co.uk');
const userTwo = new User('luigi', 'luigi@thenetnija.co.uk');
const userThree = new Admin('shaun', 'shaun@thenetnija.co.uk', 'black-belt-ninja', 'black-belt-ninja');

console.log(userOne, userTwo, userThree);
userOne.login();

// demo of proto fucntions for an array of numbers
const nums = [1,2,3,4,5];
console.log(nums);

// when calling a prototype function,
// we don't use the __proto__ property 
// as JS automatically proxies the methods onto the Objects root level
// nums.__proto__.filter(() => );

// built in Object prototypes
console.log(Array.prototype);
console.log(Date.prototype);

// custom Object prototypes
console.log(User.prototype);
console.log(Admin.prototype);

userOne.logout();

userOne.login().logout();
*/

// #125
console.log(new Array(1,2,3,4,5));

// every object type in js inherits from Object
console.log(new Object);

console.log(new XMLHttpRequest);
