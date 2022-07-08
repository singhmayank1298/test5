// to Add item in the list on click
// steps:=
// 1= when click on (Add item) it will store text that you have written
// 2= and then creat new li tag and give class name etc...
// 3= put textnode to li
// 4=then creat 2 botton tag and put inside the li tag by useing (appendchild)
// 5 = finel step put li tag into the ul tag  but before this first grap ul tag see below

let form=document.querySelector(".forminlinemb3")  //it is a form

form.addEventListener("submit",additem);//in the form when submit on button the event listener will call

function additem(e){
    e.preventDefault();
    let valueitem=document.querySelector(".formcontrolmr2").value   //step1
    
    let new1 =document.createElement("li") //step 2
    new1.className="list-group-item"//step 2
    let text=document.createTextNode(valueitem)// step 3 it is creating node 
    new1.appendChild(text) // step 3
    let newbutton=document.createElement("button")// step 4
    newbutton.className="btn btn-danger btn-sm float-right delete" //step 4
    newbutton.innerText="X" //step 4
    let newedit=document.createElement("button") //step 4
    newedit.className=" btn-danger btn-sm float-right " //step4
    newedit.innerText="edit" //step 4
    new1.appendChild(newbutton)//4
    new1.appendChild(newedit)//4
    let ultag =document.querySelector('.list-group') //step 5
    ultag.appendChild(new1)//step 5
}
//when click on X it will delete
// steps 
//1=whie click eventlistener will call 
//it will grap that tag or li 
// take confirmation and remome from ul

let ul=document.querySelector(".list-group")

ul.addEventListener("click",delete1)

function delete1(e){
    e.preventDefault()
    //console.log(e.target)
    if(e.target.classList.contains('btn')){ //when event is heppening when click on any button it will see there clas name if clase name is there in the tag it will executive to another if condition 
        if(confirm("you want to delete?")){  //it will take confirmation by passing you want to deleete
     let  li = e.target.parentElement      // then if u click on ok it will grap whole tag.in this e.target means button tag please see by use console .log(e.target) and more
     ul.removeChild(li)   // it is removing the tag
        }
}
 }

//  ///////////////////////////



let ullist =document.querySelector("#items")
let fiter= document.querySelector("#filter")
fiter.addEventListener("keyup",filter)


function filter(e){
// e.preventDefault()
 let text= fiter.value.toUpperCase() //when listenen will call first it will stor the text in uppercase or lower that the user have type
//console.log(text)
 let itemlist = ullist.getElementsByTagName("li") //then it store all li in array

 for(let i=0;i<itemlist.length;i++){ //we will checking full item list whenever user type only one cherecter for ex "i"then"it then it will check t is there in item list
  
   let findtext=itemlist[i].firstChild.textContent
   
   if(findtext.toUpperCase().indexOf(text)>-1){   //allways  only one cheracter is comming in indexof()(for ex. "t" have type) and it is checking the whole chrecter of the item one by one  if "t" is there in item then -1 become 1.it is hepping in this line only
     
     itemlist[i].style.display=""               // if itemlist have cherect
    }
    else{
     itemlist[i].style.display="none"
    }
   console.log(findtext)
 }
}