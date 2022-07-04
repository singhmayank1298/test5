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

let add=document.getElementById('main-header')
add.style.borderBottom=" solid black "


//getelementbt class  use this to grap multipels element,it give result in array
 // to seclect the inner tag must be link to main tag atherwise it will not work
let add1=document.getElementsByClassName('title')
console.log(add1)
add1[0].style.color="green"
add1[0].innerHTML='<b>Add items'
//for (let i=0;i<add1.length;i++){   //use for loop for multiple change
 //   add1[i].innerText="Add items"
//} 

let add2 =document.getElementsByClassName('list-group-item')
//console.log(add2)
add2[2].style.background='green'
for (let i=0;i<add2.length;i++){
    add2[i].style.fontWeight = 'bold';
}