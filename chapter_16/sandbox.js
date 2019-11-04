// #130 update recipe list in dom 
const list = document.querySelector('ul');
const form = document.querySelector('form');

// #134 get unsubscribe real-time listener button in dom
const button = document.querySelector('button');

// add a recipe into the dom
const addRecipe = (recipe, id) => {
  // console.log(recipe.created_at.toDate());
  let time = recipe.created_at.toDate();

  // generate html to insert
  // #132 use custom html data attribute for the document id
  let html = `
    <li data-id="${id}">
      <div>${recipe.title}</div>
      <div>${time}</div>
      <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
  `;

  // console.log(html);

  // update doc list
  list.innerHTML += html;
};

/* #133 set up rela time listener to the database
// #130 get data from collection and handle promise
db.collection('recipes').get().then((snapshot) => {
  // when we have the data
  // a snapshot of the data at the time
  // get first documents data
  // console.log(snapshot.docs[0].data());

  // use forEach to extract each document
  snapshot.docs.forEach(doc => {
    // console.log(doc.data());
    // #132 get document id 
    // console.log(doc.id);
    addRecipe(doc.data(), doc.id);
  });
}).catch(err => {
  console.log(err);
});
*/

// #133 remove recipe from dom
const deleteRecipe = (id) => {
  // get all recipe li tags in the dom
  const recipes = document.querySelectorAll('li');

  // loop ech recipe li tag
  recipes.forEach(recipe => {
    // if recipe li tags html data-id attribute matches 
    // our document id then remove from dom
    if(recipe.getAttribute('data-id') === id){
      recipe.remove();
    }
  });
};

// #133 get documents using real-time listener
// #134 store function returned when setting up a snapshot listener
const unsub = db.collection('recipes').onSnapshot(snapshot => {
  // first snapshot all documents are considered as changes 
  // i.e. type property is "added"
  // upon document deletion we get type property set to "removed"
  // console.log(snapshot.docChanges());
  snapshot.docChanges().forEach(change => {
    // console.log(change);
    const doc = change.doc;
    // console.log(doc);
    if(change.type === 'added'){
      addRecipe(doc.data(), doc.id);
    } else if(change.type === 'removed'){
      deleteRecipe(doc.id);
    };
  });
});

// #131 add documents using an event listener and callback function
form.addEventListener('submit', e => {
  e.preventDefault();

  // get current date
  const now = new Date();

  const recipe = {
    // extract title from recipe input field
    title: form.recipe.value,    
    // generate timestamp for the current date
    created_at: firebase.firestore.Timestamp.fromDate(now)
    // ignore author for now as not used
  };

  // add new document to our collection and handle promise due to asyn method
  db.collection('recipes').add(recipe).then(() => {
    console.log('recipe added');
  }).catch(err => {
    console.log(err);
  });
});

// #132 deleting data
// use event delegation by attaching event to the list and 
// not each button within the list
list.addEventListener('click', e => {
  // console.log(e);
  // check if button clicked
  if(e.target.tagName === 'BUTTON'){
    // extract document id from list item elements html data-id attribute
    const id = e.target.parentElement.getAttribute('data-id');
    // console.log(id);

    // #132 delete the document from the collection and handle promise
    db.collection('recipes').doc(id).delete().then(() => {
      console.log('recipe deleted');
    });
  };
});

// #134 unsub from database changes
button.addEventListener('click', e => {
  // #134 invoke function returned when setting up a snapshot listener
  unsub();
  console.log('unsubscribed from collection changes');
});