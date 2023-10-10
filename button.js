var form = document.getElementById('addForm');
console.log(form);
var itemList = document.getElementById('items');
console.log(itemList);
var filter = document.getElementById('filter');
console.log(filter);

// // Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  console.log(newItem)
 

  // Create new li element
  var li = document.createElement('li');

  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  

  // Create del button element
  var deleteBtn = document.createElement('button');
  console.log(deleteBtn)
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
  
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}



//add an edit button next to the delete icon.[Dont have to build the Edit  functionality, just add the button] //


// Select the list items with the class 'list-group-item'
var listItems = document.querySelectorAll('.list-group-item');

// Loop through each list item and add an "Edit" button
listItems.forEach(function(item) {
    var editButton = document.createElement("button");
    editButton.className = "btn btn-primary btn-sm float-right edit";
    editButton.textContent = "Edit";
    item.appendChild(editButton);
});
