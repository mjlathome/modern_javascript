// when listeniung for a submit event we attach the event to the form, not the submit button itself
// benefit is the from will handle enter key too
const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
// const username = document.querySelector('#username');

// allow access to keyup too
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
  // default form action is that the page refreshes - prevent this
  e.preventDefault();

  // get form field data, if you already have a reference
  // console.log(username.value);

  // get form data using dot notation via using an 'id' or 'name' attribute on the form field
  // console.log(form.username.value);

  // determine what we wnat then write regular expression to match that pattern
  // see: https://regex101.com/

  // validation
  const username = form.username.value;  
  // const usernamePattern = /^[a-zA-Z]{6,12}$/;

  if(usernamePattern.test(username)){
    // feedback good info
    feedback.textContent = 'that username is valid!';
  } else {
    // feedback help info
    feedback.textContent = 'username must contain letters only & be between 6 & 12 characters long';
  }
});

// live feedback
form.username.addEventListener('keyup', e => {
  console.log(e);

  // 2 ways to get the form field value
  // console.log(e.target.value, form.username.value);

  // overwrite class based upon pattern match test results
  if(usernamePattern.test(e.target.value)){
    // console.log('passed');
    form.username.setAttribute('class', 'success');
  } else {
    // console.log('failed');
    form.username.setAttribute('class', 'error');
  }
});

/* removed
// testing RegEx - must me at least 6 a-z characters in length
const username = 'shaunp34343';
const pattern = /^[a-z]{6,}$/;

// take pattern and use test method passing in the data to check 
// let result = pattern.test(username);
// console.log(result);

// other approach below uses search mehtod on the value we want to check to test against the pattern argument provided
// returns integer on where RegEx pattern found - zero based
let result = username.search(pattern);

console.log(result);

if(result){
  console.log('regex test passed :)');
} else{
  console.log('regex test failed :(');
}
*/