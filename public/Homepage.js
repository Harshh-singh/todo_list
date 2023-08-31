let form = document.getElementById('description');
let container = document.getElementById('description-container');

function changecolor() {
  container.style.backgroundColor = 'lightgrey',
  form.style.backgroundColor = 'lightgrey';
}

form.addEventListener('click', changecolor);


function deleteTask () {
  // get all the checkboxes from the document
  let checkboxes = document.querySelectorAll ('input[type=checkbox]');
  // loop through each checkbox
  for (let checkbox of checkboxes) {
    // check if the checkbox is checked
    if (checkbox.checked) {
      // get the id of the checkbox
      let id = checkbox.name;
      // get the list item that contains the checkbox
      let listItem = document.getElementById (id);
      // get the parent element of the list item, which is the ul element
      let parent = listItem.parentElement;
      // remove the list item from the parent element
      parent.removeChild (listItem);
    }
  }
}