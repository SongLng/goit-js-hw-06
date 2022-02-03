const input = document.querySelector("#name-input");

const output = document.querySelector("#name-output");
console.log(output);

input.addEventListener("input", (event) => {
  if (input.value === "") {
    output.textContent = "Anonymous";
  } else output.textContent = event.currentTarget.value.trim();
});
