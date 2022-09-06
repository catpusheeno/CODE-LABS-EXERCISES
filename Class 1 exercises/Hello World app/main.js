const headingOne = document.querySelector("h1");
const headingTwo = document.querySelector(".heading-two");
headingOne.innerText = "Updated Hello World From Javascript!";
headingTwo.style.color = "#134e4a";

const bodyE1 = document.querySelector("body");
function updateColors() {
    bodyE1.style.backgroundColor = "#0c4a6e";
    headingOne.style.color ="#f0f9ff";
    headingTwo.style.color = "#7dd3fc";
}