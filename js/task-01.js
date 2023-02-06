const listCategoriesEl = document.querySelector("ul#categories");

const itemsCategoriesEl = listCategoriesEl.children;
// const itemsCategoriesEl = listCategoriesRef.querySelectorAll("li.item");

console.log(`Number of categories: ${itemsCategoriesEl.length}`);

for (const categoryEl of itemsCategoriesEl) {
  // const categoryTitleEl = categoryEl.firstElementChild;
  const categoryTitleEl = categoryEl.querySelector("h2");

  console.log("");
  console.log("Category: " + categoryTitleEl.textContent);

  // console.log(
  //   "Elements: " + categoryTitleEl.nextElementSibling.children.length
  // );
  console.log("Elements: " + categoryEl.querySelector("ul").children.length);
}
