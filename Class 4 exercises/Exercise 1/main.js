function changeBgToRandom() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    event.target.style.color = `#${randomColor}`;
}

const eventListenerButton = document.querySelector(".btn_inline");
eventListenerButton.addEventListener("click", changeBgToRandom);





