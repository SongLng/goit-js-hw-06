const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const allIngredients = document.querySelector("#ingredients");

const makeList = ingredients.reduce(
  (str, item) => str + `<li>${item}</li>`,
  ""
);

allIngredients.innerHTML = makeList;
