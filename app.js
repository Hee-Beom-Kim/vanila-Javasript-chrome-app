const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h1.classList.toggle("clicked");
}

console.log("commit test 10/19");

h1.addEventListener("click", handleTitleClick);
