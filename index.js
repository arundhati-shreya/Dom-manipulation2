// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);

// Ques No 2-Manipulate the title of the page
// console.log(document.title);
// document.title=123;

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent="Hello";
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// ELEMENTS BY ID

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent='Hello';
// headerTitle.innerText='Goodbye';
// // console.log(headerTitle.textContent);
// headerTitle.innerHTML='<h3>Hello</h3>';

// QUES NO-3 Make the title have a black border 
// header.style.borderBottom ='solid 3px #000';

// ELEMENTS BY CLASSNAME

// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';

// FOR making 1 item bold and change its backgroundcolor

// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'green';

// QUES No-3  ADD ITEM bold and change the font color to greeen
// FOR making all items bold and change their backgroundcolor

// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor = 'green';
//     items[i].style.fontWeight = 'bold';
// }

// QUES NO 4 Write the code as per the youtuber does
// Make the 3 rd element in the list have green background color
// Make all the elements in the list have bold color font

// items[2].style.backgroundColor='green';
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold';
// }

// //Get Elements by TagName
// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent ='Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow';

// // items.style.backgroundColor='#f4f4f4';

// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor='#f4f4f4';
// }

// Assignment-4 Add a new li element without the same class Name 
// // editing it with getelementsbyclassname
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2]);
// items[2].style.backgroundColor = 'green';

// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold';
// }

// // editing it with getelementbytagname
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[2]);
// li[2].style.backgroundColor = 'green';

// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight = 'bold';
// }

// Assignment 5 
//Make the 2nd item have green background color
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor='green';

// // Make the 3rd item invisible
// var secondItem = document.querySelector('.list-group-item:nth-child(3)');
// secondItem.style.color='transparent';

// //Using QuerySelectorALL change the font color to green for 2nd item in the item list
// var items = document.querySelectorAll('.list-group-item');
// console.log(items);
// items[1].style.color='green';

// //Choose all the odd elements and make their background green using QuerySelectorALL
// var odd=document.querySelectorAll('li:nth-child(odd)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }


// TRAVERSING THE DOM //

var itemList = document.querySelector('#items');

  //parentNode

console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
 console.log(itemList.parentNode.parentNode.parentNode);


  //parentElement

console.log(itemList.parentElement);
 itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);



  //childNodes

console.log(itemList.childNodes);
 console.log(itemList.children);
 console.log(itemList.children[1]);
 itemList.children[1].style.backgroundColor = 'yellow';



  // FirstChild
console.log(itemList.firstChild);
  // firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';



  // lastChild
console.log(itemList.lastChild);
  // lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';


  // nextSibling
console.log(itemList.nextSibling);
  // nextElementSibling
console.log(itemList.nextElementSibling);


  // previousSibling
console.log(itemList.previousSibling);
  // previous ElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';



//     createElement      //

  // Create a div
var newDiv = document.createElement('div');
  // Add class
newDiv.className= 'hello';
  // Add id
newDiv.id = 'hello1';
// setAttribute
  // Add attr
newDiv.setAttribute('title', 'Hello Div');
// createtesxtnode
  // Create text node
var newDivText = document.createTextNode('Hello World');
//appendchild 
//Add text to div
newDiv.appendChild(newDivText);



//  add HEllo word before Item Lister  //

var container = document.querySelector('header.container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
container.insertBefore(newDiv, h1);



//    add HEllo word before Item 1      //

// created a newDiv
var newDiv2 = document.createElement('div');
newDiv2.className= 'hello';
newDiv2.id = 'hello1';
newDiv2.setAttribute('title', 'Hello Div');
var newDiv2Text = document.createTextNode('Hello World');
newDiv2.appendChild(newDiv2Text);
//added the newDiv before item 1
var ul = document.querySelector('ul.list-group');
var c = document.querySelector('.list-group-item');
console.log(newDiv2);
ul.insertBefore(newDiv2, c);