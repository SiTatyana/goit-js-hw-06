// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const fontSize = document.querySelector("#font-size-control");
fontSize.value = 16;
const text = document.querySelector("#text");
let size;

fontSize.addEventListener("input", (event) => {
    size = fontSize.value;
    text.style.fontSize = size + "px";
    // console.log(fontSize.value)
})

