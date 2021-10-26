const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    //const userName = loginInput.value;
    // console.log(userName);
}

function onLinkClicked(event){
    event.preventDefault();
    console.log(event);
    // alert("click");
}

loginForm.addEventListener("submit", onLoginSubmit);

link.addEventListener("click", onLinkClicked);