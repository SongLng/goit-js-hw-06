function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let initialSizeOfBox = 30;
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");
const input = document.querySelector("#controls").firstElementChild;

createBtn.addEventListener("click", btnLtn);
destroyBtn.addEventListener("click", destroyBtn);

function btnLtn() {
  const amountOfBoxes = createBoxes(input.value);
  boxes.append(...amountOfBoxes);
}

function createBoxes(amount) {
  let sizeOfBox = 0;
  const boxElements = [];

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.backgroundColor = getRandomHexColor();
    const size = sizeOfBox + i * 10;
    boxEl.style.display = "block";
    sizeOfBox = initialSizeOfBox + i * 10;
    boxEl.style.width = `${size}px`;
    boxEl.style.height = `${size}px`;
    boxElements.push(boxEl);
  }
  initialSizeOfBox = sizeOfBox + 10;
  return boxElements;
}

function destroyBoxes() {
  boxes.innerHTML = "";
  initialSizeOfBox = 30;
}
