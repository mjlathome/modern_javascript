// #6 use oducment in the colsole to see the document model created by the browser when the web page loads
// #6 inside the console we see a representation of the DOM with the contents
// #6 use "document." to get the properties and methods
// #6 in javascript code we can use interogate/update the DOM
// #6 DOM sees html elements as a node within the DOM

// step 1 reach into DOM and get an element - best way
// goes into DO< and grabs the first p tag
// const para = document.querySelector('p');
// find first DOM element with class error
// const para = document.querySelector('.error');
// find first div DOM element with class error
// const para = document.querySelector('div.error');

// in developer tools inspect element, right click on doument elemnt, select copy -> copy selector for CSS selector
// get h1 DOM element
// const para = document.querySelector('body > h1');
// console.log(para);

// select all paragraphs - best way
// this returns a NodeList which looks like an array, but it is not, although we can do somethings to it
// const paras = document.querySelectorAll('p');
// console.log(paras);

// // get first element
// console.log(paras[0]);

// // loop through Nodes and output
// paras.forEach(para => {
//   console.log(para);
// });

// grab DOM elements with class of error
// const errors = document.querySelectorAll('.error');
// console.log(errors);

// get an element by ID - no need to supply '#' in front of selector
// const title = document.getElementById('page-title');
// console.log(title);

// get elements by their class name - no '.' needed as its implied 
// obtain HMTLCollection - cannot use forEach
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// cannot use the forEach method on a collection
// get:
// Uncaught TypeError: errors.forEach is not a function
// errors.forEach(error => {
//   console.log(error);
// });

// get elements by their tag name
// obtain HMTLCollection - cannot use forEach;  would need to be converted to an array
// const paras2 = document.getElementsByTagName('p');
// console.log(paras2);
// console.log(paras2[1]);

// get inner text property from a paragraph
// const para = document.querySelector('p');
// console.log(para.innerText);

// update the paragraphs text
// para.innerText = 'ninjas are awesome!';

/* removed
// update all paragraph text
const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//   console.log(para.innerText);
//   para.innerText += ' new text';
// });

// completely change DOM elements contents
// const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

// simpulate database query results
// const people = ['mario', 'luigi', 'yoshi'];

// output database results into DOM
// people.forEach(person => {
//   content.innerHTML += `<p>${person}</p>`;
// });

// extract HTML attributes
const link = document.querySelector('a');
console.log(link.getAttribute('href'));

// set HTML attributes
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = "The Net Ninja Website";

// get and set html class
// const mssg = document.querySelector('p');
// console.log(mssg);
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');

// // create new HTMl attribute
// mssg.setAttribute('style', 'color: green;');

// add new style to an element that already has one
// const title = document.querySelector('h1');
// // this would overwite all existing styles
// // title.setAttribute('style', 'margin: 50px;');

// // extract element style property
// console.log(title.style);
// console.log(title.style.color);

// // set the HTML margin
// title.style.margin = '50px';

// // change colour
// title.style.color = 'crimson';

// // change font-size using camel case JavaScript attribute equivalent
// title.style.fontSize = '60px';

// // remove a CSS property
// title.style.margin = '';

// extratc DOM element classes - returns DOMTokenList
const content = document.querySelector('p');

console.log(content.classList);
content.classList.add('error');

// remove a CSS class
content.classList.remove('error');

// add a class 
content.classList.add('success');

// challenge to add error class to error text p's and success class to success p's
const allPara = document.querySelectorAll('p');
console.log(allPara);

allPara.forEach(aPara => {
  console.log(aPara);

  // innerText returns all of the visible text inside the tag
  // textContent return all text, even if not visible  
  if(aPara.textContent.includes('error')) {
    aPara.classList.add('error');
  } else if(aPara.innerText.includes('success')) {
    aPara.classList.add('success');
  }

});

// toggle classes - add if not used and remove if used
// const title = document.querySelector('.title');
// title.classList.toggle('test');
// title.classList.toggle('test');

// DOM children - need to apply a class to all
const article = document.querySelector('article');

// HTMLCollection
// console.log(article.children);

// convert HTMLCollection to an array -  a new array, NOT destructive, original preserved
// console.log(Array.from(article.children));
// console.log(article.children);

// loop through article children any element...
Array.from(article.children).forEach(child => {
  child.classList.add('article-element');
});

// fidn a certain element and find its path
const title = document.querySelector('h2');

console.log(title);
console.log(title.parentElement);
console.log(title.parentElement.parentElement);
// returns null if no sibling found
console.log(title.nextElementSibling);
// returns null if no sibling found 
console.log(title.previousElementSibling);

// chaining - complicated but can be done on rare occasions.
console.log(title.nextElementSibling.parentElement.children);
*/



// remove DOM element
const ul = document.querySelector('ul');
// ul.remove();

// adding an event
// step 1 - get reference to DOM element for event
const button = document.querySelector('button');

// step 2 - add event to button
// see: https://developer.mozilla.org/en-US/docs/Web/Events
button.addEventListener('click', () => {
  // console.log('you clicked me');
  // append to our to do list
  // ul.innerHTML += '<li>something new</li>';

  // append element created via DOM
  // new elements click event for remove as this was added at the start
  const li = document.createElement('li');

  // set the text for the element - could set other classes etc.
  li.textContent = 'something new to do';

  // append to bottom of the parent
  // ul.append(li);

  // append to top of the parent
  ul.prepend(li);
});

/* removed as it can be costly to attach events to a lot of DOM elements
// step 1 - get reference to DOM element(s) for event
// returns a NodeList so forEach can be used
const items = document.querySelectorAll('li');

items.forEach(item => {
  // browser provides us the event name - we called it 'e'
  // in javascript the event starts at the event target and then Bubbles up through the parent heirarchy
  item.addEventListener('click', (e) => {
    // stop event from bubbling up to parent etc.
    console.log('event in LI');
    e.stopPropagation();

    // console.log('item clicked');
    // console.log(e);
    // extract traget for the click event - can be used even when not using forEach on an event
    // console.log(e.target);

    // only good here as we're using forEach
    // console.log(item);

    // use CSS style to cross out our to do items
    // e.target.style.textDecoration = 'line-through';

    // remove element from DOM
    e.target.remove();
  });
});
*/

ul.addEventListener('click', e => {
  // console.log('event in UL');

  // no callback on li tags anymore, but event fires for ul
  // this is event delegation in action
  // clicking between li elements still fires this event on the ul tag itself as the target
  // console.log(e.target);
  // DOM has li tagName as 'LI' 
  if(e.target.tagName === 'LI'){
    e.target.remove();
  }

});

// handle Copy event
const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
  console.log('OI! my content is copyright');
})

// get mouse co-ordinates
const box = document.querySelector('.box');

// see: https://developer.mozilla.org/en-US/docs/Web/Events#Mouse_events
box.addEventListener('mousemove', e => {
  // offsetX and offsetY is the X,Y positions from the top of the element
  // console.log(e.offsetX, e.offsetY);
  // good to track where the user is looking on the webpage
  box.textContent = `x pos -${e.offsetX}  y pos -${e.offsetY}`;
});

// trap middle button scroll of webpage event
document.addEventListener('wheel', e => {
  // event target properties pageX and pageY are the positons relevant to where the event occured on the webpage itself
  // from WheelEvent extract pageX and pageY only
  console.log(e.pageX, e.pageY);
});



