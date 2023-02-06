const inputFieldEl = document.querySelector("input#name-input");
const outputFieldEl = document.querySelector("span#name-output");

inputFieldEl.addEventListener("input", (event) => {
  if (event.currentTarget.value === "") {
    outputFieldEl.textContent = "Anonymous";
    return;
  }

  outputFieldEl.textContent = event.currentTarget.value;
});
