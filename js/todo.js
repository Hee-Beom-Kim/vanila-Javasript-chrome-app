const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];
const TO_DOS_KEY = "toDos";

function saveToDos(){
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;    
    toDos = toDos.filter((item) => item.id != parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newToDo){    
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""; 
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    } ;  
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

function sayHello(item){
    console.log("hello ", item);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TO_DOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}