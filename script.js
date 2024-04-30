const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
 function add(){
    if(inputBox.value === ''){
        alert("add something");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    save();
 }

 listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
     e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        save();
    }
 }, false);


//  used to store tasks, that means on refreshing these tasks will appear
 function save(){
    localStorage.setItem("data", list-container.innerHTML);
 }

 function show(){
    listContainer.innerHTML= localStorage.getItem('data');
 }
 show();
