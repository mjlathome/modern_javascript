const scores = [10, 30, 15, 25, 50, 40, 5];

// filter in/out certain values
// each array element id evaluated, based upon true/false return value respectively
// filter is non-destructive - it does not alter the original array
// const filteredScores = scores.filter((score) => {
//   return score > 20;
// });

// console.log(scores);
// console.log(filteredScores);

// full user array - we want just premium users
const users = [
  {name: 'shaun', premium: true},
  {name: 'yoshi', premium: false},
  {name: 'mario', premium: false},
  {name: 'chun-li', premium: true}
];

// filter array - full syntax
// const premiumUsers = users.filter(user => {
//   return user.premium;
// });

// filter array - short form
const premiumUsers = users.filter(user => user.premium);

console.log(premiumUsers);

// map method - takes an array and maps to a new array
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// get array of half price values - full syntax
// const salePrices = prices.map((price) => {
//   return price / 2;
// });

// get array of half price values - short syntax
// const salePrices = prices.map(price => price / 2);
// console.log(salePrices);

// product array
const products = [
  {name: 'gold star', price: 20},
  {name: 'mushroom', price: 40},
  {name: 'green shells', price: 30},
  {name: 'banana skin', price: 10},
  {name: 'red shells', price: 50}
];

// sale products - only want items over 30 to be on-sale at 50%
const saleProducts = products.map(product => {
  if(product.price > 30){
    // create new object as price is affected
    return {name: product.name, price: product.price / 2};
    // destructive mistake - affects original array as reference to original object is passed in
    // product.price = product.price / 2;
    // return product;
  } else {
    return product;
  }
});

console.log(saleProducts, products);

// reduce method - want a count of scores over 50
const scores2 = [10, 20, 60, 40, 70, 90, 30];

// reduce has:
// callback function with values accumulator (e.g. acc) and current (e.g. curr)
// initial value argument too e.g. 0
const result = scores2.reduce((acc, curr) => {
  if(curr > 50){
    acc++;
  }
  return acc;
}, 0);

console.log(result);

// game scores - want total score by mario
const scores3 = [
  {player: 'mario', score: 50},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 70},
  {player: 'crystal', score: 60},
  {player: 'mario', score: 50},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 70},
  {player: 'crystal', score: 60},
  {player: 'mario', score: 90},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 70},
  {player: 'crystal', score: 60},
  {player: 'mario', score: 80},
  {player: 'yoshi', score: 30},
  {player: 'mario', score: 70},
  {player: 'crystal', score: 60}
];

// here the curr argument to callback function is an object reference
const marioTotal = scores3.reduce((acc, curr) => {
  if(curr.player === 'mario'){
    acc += curr.score;
  }
  return acc;
}, 0);

console.log(marioTotal);

// find method - results value of the first element in an array that passes a callback function
// the rest of the array will not be processed
const scores4 = [10, 5, 0, 40, 30, 10, 90, 70];

// find method - full syntax
// const firstHighScore = scores4.find((score) => {
//   return score > 50;
// });

// find method - short form
const firstHighScore = scores4.find(score => score > 50);

console.log(firstHighScore);

// example 1 - sorting strings
const names5 = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

// sort method is destructive and changes original array
// sort first...
names5.sort();

// ... then reverse to get descending sorted elements
// reverse elements in an array
names5.reverse();

console.log(names5);

// example 2 - sorting numbers
const scores5 = [10, 50, 20, 5, 35, 70, 45];

// WARNING - sort here only looks at the first character of each number thus 5 is after 10!
// scores5.sort();

// reverse elements in the array
scores5.reverse();
console.log(scores5);


scores5.sort((a,b) => b - a);
console.log(scores5);

// reverse using sort
scores5.sort((a,b) => a - b);
console.log(scores5);

// example 3 - sorting objects by score
const players5 = [
  {name: 'mario', score: 20},
  {name: 'luigi', score: 10},
  {name: 'chun-li', score: 50},
  {name: 'yoshi', score: 30},
  {name: 'shaun', score: 70}
];

// for more complex sorting we need to provide a function for the sort call
// args are 2 elements - need to return -ve if a comes first or +ve if b comes first or 0 if the same
// sort - full syntax
// players5.sort((a, b) => {
//   if(a.score > b.score){
//     // a comes first then b
//     return -1;
//   } else if (b.score > a.score){
//     // b comes first the a
//     return 1;
//   } else {
//     // no swap required
//     return 0;
//   }
// });

// sort - short form
players5.sort((a,b) => b.score - a.score);

console.log(players5);

// product array - need to filter out items not over 20
const products6 = [
  {name: 'gold star', price: 30},
  {name: 'green shell', price: 10},
  {name: 'red shell', price: 40},
  {name: 'banana skin', price: 5},
  {name: 'mushroom', price: 50}
];

// filter returns an array and so does map - without chaining
// const filtered = products6.filter(product => product.price > 20);
// console.log(filtered);

// const promos = filtered.map(product => {
//   return `the ${product.name} is ${product.price / 2} pounds`;
// });

// chaining approach - use a separate line for each method called
// chaining can be used for other data types e.g. strings
const promos = products6
  .filter(product => product.price > 20)
  .map(product => `the ${product.name} is ${product.price / 2} pounds`);

console.log(promos);