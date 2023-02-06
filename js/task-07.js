const fontSizeControlEl = document.querySelector("#font-size-control");
const textSpanEl = document.querySelector("#text");

fontSizeControlEl.addEventListener("input", (event) => {
  textSpanEl.style.fontSize = event.currentTarget.value + "px";
});
