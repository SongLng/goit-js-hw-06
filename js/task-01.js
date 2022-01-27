const itemEl = document.querySelectorAll(".item");
const qntOfItems = itemEl.length;

console.log("Number of categories: ", qntOfItems);

itemEl.forEach(function (category) {
  console.log("Category: ", category.firstElementChild.textContent);
  console.log("Element: ", category.lastElementChild.children.length);
});
