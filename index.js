
const inputbox = document.getElementById(`input-box`);

const listcontainer = document.getElementById(`list-container`);

function Addtask(){
    if (inputbox.value ===""){
        alert("you must write something !!!");

    }else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";// ading x icon 
        li.appendChild(span);
    }
    inputbox.value=" ";
    savedata();
}
// below function work to cheked & unchekde3d ;
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();