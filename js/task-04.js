const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

console.log(value.textContent);

let counterValue = 0;

const mouseClickDec = (event) => {
  value.textContent = counterValue -= 1;
};
const mouseClickInc = (event) => {
  value.textContent = counterValue += 1;
  console.log(value);
};

btnDec.addEventListener("click", mouseClickDec);
btnInc.addEventListener("click", mouseClickInc);
