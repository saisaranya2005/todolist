const inputtext = document.getElementById("input-text");
const listadd = document.getElementById("listadd");

function addTask() {
    if (inputtext.value === '') {
        alert("You must enter some text!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputtext.value;
        listadd.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
        inputtext.value = '';
        saveData();
    }
}
listadd.addEventListener("click",function(e){
if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName==="SPAN"){
e.target.parentElement.remove();
saveData();
}
},false);

function saveData(){
    localStorage.setItem("data",listadd.innerHTML);
}
function showtask(){
    listadd.innerHTML=localStorage.getItem("data");
}
showtask();
