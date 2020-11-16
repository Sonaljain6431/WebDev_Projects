// Lists of books
let myLibrary=[];


//  Getting DOM elements
var text=document.getElementById("text");
var addbtn=document.getElementById("addbtn");
var submitbtn=document.getElementById("submitbtn");
    // console.log(text.value);

function Book(){
    // The constructor
}
function addBookToLibrary(){
    // do stuff here
    
    myLibrary.push(text.value);
    alert(`${text.value} successfully added to Library`);
    text.value=" ";
    console.log(myLibrary);

}
function displayLibrary(){
    let div=document.createElement('div');
    div.innerHTML=`Books available in library are:<br><ul>`;
    for(let i=0;i<myLibrary.length;){ 
        div.innerHTML+=`<li>${myLibrary[i++]}</li><br>`;
    }
    div.innerHTML+=`</ul>`;
    document.body.appendChild(div);
}