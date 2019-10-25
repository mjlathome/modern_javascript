// dates & times
// use date constructor via new to create Date object

// create a date in the past - other formats are available
const before = new Date('February 1 2019 7:30:59');
const now = new Date();

console.log(now);
console.log(typeof now);

// year, month, day, times
console.log('getFullYear:', now.getFullYear());

// month is zero based so January is 0
console.log('getMonth:', now.getMonth());

console.log('getDate:', now.getDate());

// day is zero based.  Sunday is 0
console.log('getDay:', now.getDay());

console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

// timestamps represented as number of milli-seconds since 12am on Jan 1st 1970
// useful to compare 2 dates together
console.log('timestamp:', now.getTime(), before.getTime());

// get millio-second difference
const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins, hours, days);

console.log(`The blog was written ${days} days ago`);

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

// converting timestamps into Date objects
const timestamp = 1675938474990;
console.log(new Date(timestamp));

// clock app
const clock = document.querySelector('.clock');

const tick = () => {

  // create new Date
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  // console.log(h, m, s);

  const html = `
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span>
  `;

  clock.innerHTML = html;
};

// call tick function every second
setInterval(tick, 1000);

/* see Dateb FNS library
https://date-fns.org/
https://date-fns.org/docs/Getting-Started
https://date-fns.org/v2.3.0/docs/format
*/
// dateFns loaded in HTML script tag
// console.log(dateFns.isToday(now));

// formatting options
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));

// fexible with the separator - can be commas
console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));

// comparing dates using dateFNS - addSuffix adds the 'ago' text
console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));

