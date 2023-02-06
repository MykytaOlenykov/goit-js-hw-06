let counterValue = 0;

const counterBoxRef = document.querySelector("#counter");

const refs = {
  fieldValue: counterBoxRef.querySelector("#value"),
  decrementBtn: counterBoxRef.querySelector('[data-action="decrement"]'),
  incrementBtn: counterBoxRef.querySelector('[data-action="increment"]'),
};

refs.decrementBtn.addEventListener("click", onDecrementValue);

refs.incrementBtn.addEventListener("click", onIncrementValue);

function onDecrementValue() {
  counterValue += Number(this.textContent);
  // counterValue += -1;

  onOverwritesValue();
}

function onIncrementValue() {
  counterValue += Number(this.textContent);
  // counterValue += 1;

  onOverwritesValue();
}

function onOverwritesValue() {
  refs.fieldValue.textContent = counterValue;
}
