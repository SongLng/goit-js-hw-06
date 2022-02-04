const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", onInputChange);

function onInputChange() {
  text.style.fontSize = `${input.value}px`;
}
