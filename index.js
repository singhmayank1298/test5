// example of document object

// console.log(document)  //document is a object to acass all element in the html//
// console.log(document.url)
// console.log(document.title)
// document.title="123change";
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);  // dont use this it will give out in array
// console.log(document.forms)

//getelementbyid

// let add=document.getElementById('main-header')
// add.style.borderBottom=" solid black "


// //getelementbt class  use this to grap multipels element,it give result in array
//  // to seclect the inner tag must be link to main tag atherwise it will not work
// let add1=document.getElementsByClassName('title')
// console.log(add1)
// add1[0].style.color="green"
// add1[0].innerHTML='<b>Add items'
// //for (let i=0;i<add1.length;i++){   //use for loop for multiple change
//  //   add1[i].innerText="Add items"
// //} 

// let add2 =document.getElementsByClassName('list-group-item')
// //console.log(add2)
// add2[2].style.background='green'
// for (let i=0;i<add2.length;i++){
//     add2[i].style.fontWeight = 'bold';
// }
// //tag name
// let add3 =document.getElementsByTagName('li')
// for (let i=0;i<add3.length;i++){
//     add3[i].style.color = 'red';
// }

// //querySelector

// let add4 = document.querySelectorAll('li')
// add4[1].style.background='green'
// add4[3].style.visibility="hidden"

// //travling the Dom  (imp)=dont make  again-again variable to grap element grap by travling the dom see below code

// //parentNode or Element
 let itemlist =document.querySelector("#items")
// //1=parent node
//console.log(itemlist.parentElement)
// itemlist.parentElement.style.background="gray"
// itemlist.parentElement.parentElement.style.background="yellow"

// //child node
// console.log(itemlist.childNodes)//dont use this use children 
 //console.log(itemlist.children)

//Firstchild
//console.log(itemlist.firstChild) dont use this
// console.log(itemlist.firstElementChild)
// itemlist.firstElementChild.innerText="hello";

//Lastchild
//console.log(itemlist.lastChild) //dont use this in console (text) will output try this
// console.log(itemlist.lastElementChild)
// itemlist.lastElementChild.innerText="hello";

// //Next sibling
// console.log(itemlist.nextSibling)
 //console.log(itemlist.nextElementSibling.nextElementSibling.nextElementSibling)

//Previues sibling
//Next sibling
// console.log(itemlist.previousSibling)
// console.log(itemlist.previousElementSibling.previousElementSibling)
//itemlist.previousElementSibling.previousElementSibling.style.background ="red"

//CreatElement

   // so make div

//  let newdiv =document.createElement("div")
//  newdiv.className="rrr"  //add class
//  newdiv.id="eee" //add id
//  newdiv.innerText="mayank" //add text
//  newdiv.setAttribute('href','link') // add attribute ,first add attribute name and then valse
// // console.log(newdiv) 

// // Put new element to document

// let container =document.querySelector("#main-header") //first grap upper one
// let hi =document.querySelector("#contaner")  // then second one 
// container.insertBefore(newdiv,hi)  //and put container means upper and hi means second ,,and 
// // newdiv means middle one


// //assigement answer 
// //2
// //console.log(itemlist.firstElementChild)
// //1 this is for  test
// let newdiv =document.createElement("div")
// console.log(newdiv)
// newdiv.innerHTML="<h1>mayank" // we can also use childappend() see video
// let container =document.querySelector("#main") 
// let hi =document.querySelector("#title")  
// container.insertBefore(newdiv,hi)









