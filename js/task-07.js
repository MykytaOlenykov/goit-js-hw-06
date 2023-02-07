const fontSizeControlEl = document.querySelector("#font-size-control");
const textSpanEl = document.querySelector("#text");

textSpanEl.style.fontSize = `${fontSizeControlEl.value}px`;

fontSizeControlEl.addEventListener("input", (event) => {
  textSpanEl.style.fontSize = `${event.currentTarget.value}px`;
});
