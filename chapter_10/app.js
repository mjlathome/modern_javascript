// get reference to our form
const addForm = document.querySelector('.add');

// get reference to todos unordered list
const list = document.querySelector('.todos');

// get reference to search input field
const search = document.querySelector('.search input');

// generate HTML template from provide todo string
// external function so that it can be used in multiple places
const generateTemplate = todo => {

  // template stolen from HTML todo item and changed for passed in todo arg
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  // append to our todo list
  list.innerHTML += html;
};

// console.log(addForm);

addForm.addEventListener('submit', e => {
  // prevent page re-load
  e.preventDefault();

  // extract add input field value
  // remove whitespace using trim
  const todo = addForm.add.value.trim();
  // console.log(todo);

  // check user inputeed data - length is 0 i.e. falsey if blank
  if(todo.length){
    // generate HTML template
    generateTemplate(todo);

    // clear the input field
    addForm.reset();
  }
});

// delete todos
// use event delegation on the parent unordered list
// this is more efficient than attaching individual event listeners to each trash can
// also it handles the case when new todo tasks are added via the form
list.addEventListener('click', e => {
  // check if delete trash icon was selected
  if(e.target.classList.contains('delete')){
    // get parent li element in our todo list
    e.target.parentElement.remove();
  }
});

// perform todo filter by arg
const filterTodos = (term) => {
  // console.log(term);
  // extract HTMLCollection of todo li elements from unordered list parent
  // convert it to an array
  // within the console window we can expand __proto__ to see filter method
  // console.log(Array.from(list.children));

  // filter the todo li array for none matching todos
  // add in filtered class
  // case sensitive so convert to lowercase first
  // chaining is spread onto separate lines for clarity
  Array.from(list.children)
    .filter((todo) => {
      // search li textContent which has the span tags text as it's the only text in the li
      // console.log(todo.textContent);

      // keep by returning true; remove by returning false
      // want to filter out the ones that don't match as we don't need to do anything with these
      // use negate '!' here as we want todos which don't contain the term
      return !todo.textContent.toLowerCase().includes(term);
    })
    // add in filtered class to our todos that need to be hidden
    // use debug console inspect element to see
    .forEach(todo => todo.classList.add('filtered')); 
    
  // filter the todo li array for matching todos
  // remove filtered class
  // case sensitive so convert to lowercase first
  // chaining is spread onto separate lines for clarity
  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));     
};

// search keyup event
search.addEventListener('keyup', () => {
  // extract user search term removing whitespace
  // case sensitive so convert to lowercase first
  const term = search.value.trim().toLowerCase();

  filterTodos(term);

});