const inputVal = document.querySelector("#validation-input");

const input = document.querySelector("input");

const inputLength = input.dataset.length;

inputVal.addEventListener("blur", onInputChange);

function onInputChange(event) {
  const text = event.target.value;
  if (text.length === +inputLength) {
    inputVal.classList.remove("invalid");
    inputVal.classList.add("valid");
  } else {
    inputVal.classList.remove("valid");
    inputVal.classList.add("invalid");
  }
}
