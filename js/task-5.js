const colorText = document.querySelector('.color')
const btn = document.querySelector('.change-color');
const body = document.querySelector('body');

btn.addEventListener("click", onBtnClick);

function onBtnClick() {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  colorText.textContent = body.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
