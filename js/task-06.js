const inputVal = document.querySelector("#validation-input");
// const valid = document.querySelector("#validation-input.valid");
// const invalid = document.querySelector("#validation-input.invalid");
const input = document.querySelector("input");
const inputLength = input.dataset.length;

// input.addEventListener("focus", onInputFocus);
// input.addEventListener("blur", onInputBlur);
inputVal.addEventListener("change", onInputChange);

// function onInputFocus() {
//   console.log("focus here");
// }

// function onInputBlur(event) {
//   if (inputLength <= 6) {
//     console.log("too less");
//   }
// }

function onInputChange(event) {
  const text = event.target.value;
  if (text.length <= inputLength) {
    inputVal.classList.add("valid");
  } else {
    inputVal.classList.add("invalid");
  }
}
