
////////////////////////////////////////////////////////////////

let form=document.querySelector(".forminlinemb3")  
form.addEventListener("submit",additem);
function additem(e){
    e.preventDefault();
    let valueitem=document.querySelector(".formcontrolmr2").value  
    let decValue =document.querySelector("#w3review")   //first it will store a value that user will type 
    
    let new1 =document.createElement("li") 
    new1.className="list-group-item"
    let text=document.createTextNode(valueitem)
    new1.appendChild(text)
    let newbutton=document.createElement("button")
    newbutton.className="btn btn-danger btn-sm float-right delete" 
    newbutton.innerText="X" 
    let newedit=document.createElement("button") 
    newedit.className=" btn-danger btn-sm float-right " 
    newedit.innerText="edit" 
    new1.appendChild(newbutton)
    new1.appendChild(newedit)
    let ultag =document.querySelector('.list-group')
    let decrection=document.createElement("textarea") // creat decreption tag 
 let node= document.createTextNode("decValue")  // it is making node 

 decrection.appendChild(node) //it is storing node or value type by user to decreption tag
 new1.appendChild(decrection) //now the decrection tag will store in li tag 
    ultag.appendChild(new1)
}


let ul=document.querySelector(".list-group")

ul.addEventListener("click",delete1)

function delete1(e){
    e.preventDefault()
    console.log(e.target)
    if(e.target.classList.contains('btn')){
        if(confirm("you want to delete?")){
     let  li = e.target.parentElement
     ul.removeChild(li)
        }
}
 }



 ///////////////////////////

 let ullist =document.querySelector("#items")
 let fiter= document.querySelector("#filter")
 fiter.addEventListener("keyup",filter)


 function filter(e){
  e.preventDefault()
  let text= fiter.value.toUpperCase()
console.log(text)
  let itemlist = ullist.getElementsByTagName("li")

  for(let i=0;i<itemlist.length;i++){
  
    let findtext=itemlist[i].firstChild.textContent
    if(findtext.toUpperCase().indexOf(text)>-1){
      itemlist[i].style.display=""
     }
     else{
      itemlist[i].style.display="none "
     }
    console.log(findtext)
  }
 }




 
 