const input = document.querySelector('input');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes')

let size = 30;

create.addEventListener("click", createMarkup);
destroy.addEventListener("click", destroyMarkup);

function createMarkup(e) {
  if (+input.value > 100 || +input.value < 0) {
    return;
  }

  createBoxes(+input.value);
  
}

function destroyMarkup() {
  boxes.innerHTML = "";
  input.value = '';
}

function createBoxes(amount) {
  boxes.innerHTML = "";
  size = 30;

  const arr = [];

  for (let i = 0; i < amount; i++) {
    // 1 варіант

    // const newBox = document.createElement('div');
    // newBox.style.width = `${size}px`;
    // newBox.style.height = `${size}px`;
    // newBox.style.backgroundColor = getRandomHexColor();
    // arr.push(newBox)
    // size += 10;

    // 2 варіант

    boxes.insertAdjacentHTML("beforeend", `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`);
    size += 10;
  }

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}