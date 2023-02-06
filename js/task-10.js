function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsBoxRef = document.querySelector("#controls");

const fieldEl = controlsBoxRef.querySelector("input");
const createBoxBtnEl = controlsBoxRef.querySelector("[data-create]");
const destroyBoxBtnEl = controlsBoxRef.querySelector("[data-destroy]");

const containerForBoxesRef = document.querySelector("#boxes");

createBoxBtnEl.addEventListener("click", () => {
  if (fieldEl.value === "") {
    alert("Заповніть усі доступні поля!");

    return;
  }

  if (fieldEl.value > 100 || fieldEl.value < 1) {
    alert("Діапазон доступних значень 1-100!");

    return;
  }

  if (containerForBoxesRef.children.length !== 0) {
    alert(
      "В колекції вже є елементи! Для того, щоб створити нову колекцію, очистіть стару!"
    );

    return;
  }

  createBoxes(fieldEl.value);
});

destroyBoxBtnEl.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const markup = [];

  for (let i = 0; i < amount; i++) {
    const boxEl = document.createElement("div");
    const sideValueLength = 30 + i * 10 + "px";

    boxEl.style.width = sideValueLength;
    boxEl.style.height = sideValueLength;
    boxEl.style.backgroundColor = getRandomHexColor();

    markup.push(boxEl);
  }

  containerForBoxesRef.append(...markup);
}

function destroyBoxes() {
  if (containerForBoxesRef.children.length === 0) {
    alert("Спочатку створіть колекцію елементів!");

    return;
  }

  containerForBoxesRef.innerHTML = "";
}
