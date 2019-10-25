// #5 javascript object literals - can be placed all on one line too

// #5 can store objects within and array
const blogs = [
  { title: 'why mac & cheese rules', likes: 30 },
  { title: '10 things to make with marmite', likes: 50 }
];

console.log(blogs);

let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'berlin',
  // #5 now using objects for blog entries
  // blogs: ['why mac & cheese rules', '10 things to make with marmite'],
  blogs: [
    { title: 'why mac & cheese rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 50 }
  ],
  // #5 a fucntion defined on an object is an method
  // #5 regular function shorthand
  // login: function() {
  login() {  
    console.log('the user logged in');
  },
  // #5 regular function shorthand
  // logout: function() {
  logout() {  
    console.log('the user logged out');
  },
  // #5 logBlogs is not an arrow fucntion as the 'this' keyword would not work
  // #5 regular function shorthand
  // logBlogs: function() {
  logBlogs() {
    // #5 cannot access object properties directly, must use this
    // console.log(blogs);
    // #5 this here refers to the user object as it's insode a regular function
    // #5 when calling a method, javascript sets this to be the object the method the call was ran on
    // #5 MUST be a regular fucntion to reset 'this' 
    console.log(this);

    // #5 lgo out the blogs
    console.log('this user has written the following blogs:');
    this.blogs.forEach(blog => {
      // #5 now using blog obejcts not strings
      // console.log(blog);
      console.log(blog.title, blog.likes);
    })
  },
  // #5 logBlogs as an arrow function, 'this' is not changed from what it was when fucntion was invoked
  logBlogs2: () => {
    console.log(this);
  },
  

};

// # accessing object properties using dot notation - preferred
console.log(user);
console.log(user.name);

// #5 update object properties
// user.age = 35;
console.log(user.age);

// #5 accessing object properties using square bracket notation - key must be in string format
// #5 square brackets useful when passign in a variable
const key = 'location';
console.log(user[key]);

console.log(user['email']);
user['name'] = 'chun-li';
console.log(user.name);

// #5 type is an object
console.log(typeof user);

// #5 using dot notation to access and objects methods  
user.login();

// #5 using dot notation to access a method on a string
const name = 'mario';
console.log(name.toUpperCase());
console.log(name);

user.logout();

user.logBlogs();

// #5 this here refers to the global context, which is the window object
console.log(this);

user.logBlogs2();

// #5 Math object - javascript has many built into the language
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area2 = 7.2;
console.log(Math.round(area2));
console.log(Math.floor(area2));
console.log(Math.ceil(area2));
console.log(Math.trunc(area2));

const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));


// #5 random numbers - used often
const random = Math.random();
console.log(random);

// #5 get random number between 1 and 100
console.log(Math.round(random * 100));

// #5 javascript has primitve and reference types
// #5 primitives are stored in the stack, they can be accessed quickly, which has limited space
// #5 reference types are stored on the heap, they are access slower but can store more data
// #5 a pointer to an object on the heap is stored in the stack
// #5 when making a copy of a variable on the heap, the stack pointers point to the same onject on the heap 
// #5 thus making an a change to an objects properties affects all

// #5 primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// #5 reference types - stored on heap with pointer on stack,
// #5 the two stack pointers point to the same object 
const userOne = {name: 'ryu', age: 30};
const userTwo = userOne;

console.log(userOne, userTwo);

userTwo.age = 40;
userOne.age = 40;

console.log(userOne, userTwo);




