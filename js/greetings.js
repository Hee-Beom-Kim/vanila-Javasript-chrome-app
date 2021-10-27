const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USER_NAME_KEY = "userName";

function paintGreetings(userName){
    greeting.classList.remove(HIDDEN_CLASSNAME);    
    greeting.innerText = `Hello ${userName}`
}

function onLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    localStorage.setItem(USER_NAME_KEY, userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(userName);    
}

const savedUserName = localStorage.getItem(USER_NAME_KEY);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUserName);
}