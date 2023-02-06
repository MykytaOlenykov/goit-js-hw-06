function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widgetBoxRef = document.querySelector(".widget");

const changeColorBtnEl = widgetBoxRef.querySelector("button.change-color");
const valueColorEl = widgetBoxRef.querySelector("span.color");

changeColorBtnEl.addEventListener("click", () => {
  const currentColor = getRandomHexColor();

  valueColorEl.textContent = currentColor;

  document.body.style.backgroundColor = currentColor;
});
