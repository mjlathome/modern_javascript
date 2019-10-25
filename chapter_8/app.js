const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
// const perc = document.querySelector('body > div.result > div > p > span');

// capture submit event
form.addEventListener('submit', e => {
  // stop page refresh
  e.preventDefault();

  let score = 0;

  // get value of the input radio-button fields
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check answers - pass in answer and the array index 
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
      score += 25;
    }
  });

  // show result on page
  // console.log(score);  
  // perc.textContent = `${score}%`;

  // scroll user to top of the window
  scrollTo(0,0);  

  // search within scope of previously found result div  
  // result.querySelector('span').textContent = `${score}%`;
  result.classList.remove('d-none');

  // animate the score
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

});

// window is the mother of all objects in JavaScript
// no need to use window in front of the properties as it's the outmost object
// window is inferred

// console.log(window);
// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form'));

// alert('hello');
// window.alert('hello');

// count 3 seconds and then run function
// setTimeout(() => {
//   alert('hello ninjas');
// }, 3000);

// setInterval keeps firing the callback function at timer value in mill-seconds
// let i = 0;
// const timer = setInterval(() => {
//   console.log('hello');
//   i++;
//   if(i === 5){
//     // remove timer after 5 event triggers
//     clearInterval(timer);
//   }
// }, 1000);