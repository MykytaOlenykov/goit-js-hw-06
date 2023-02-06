const fieldEl = document.querySelector("#validation-input");

const correctValueLength = Number(fieldEl.dataset.length);

fieldEl.addEventListener("blur", (event) => {
  const valueLength = event.currentTarget.value.length;

  if (valueLength === correctValueLength) {
    if (fieldEl.classList.contains("invalid")) {
      fieldEl.classList.replace("invalid", "valid");
    } else {
      fieldEl.classList.add("valid");
    }

    return;
  }

  if (fieldEl.classList.contains("valid")) {
    fieldEl.classList.replace("valid", "invalid");
  } else {
    fieldEl.classList.add("invalid");
  }
});
