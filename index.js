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
// editing it with getelementsbyclassname
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[2].style.backgroundColor = 'green';

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
}

// editing it with getelementbytagname
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[2]);
li[2].style.backgroundColor = 'green';

for(var i=0;i<li.length;i++){
    li[i].style.fontWeight = 'bold';
}
