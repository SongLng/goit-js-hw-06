const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const allIngredients = document.querySelector("#ingredients");

const makeList = [...ingredients].forEach((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;
  allIngredients.appendChild(itemEl);
});

console.log(allIngredients);
