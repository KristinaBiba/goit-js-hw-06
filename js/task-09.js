const bodyEl = document.querySelector("body");
const changeColorBtnEl = document.querySelector('.change-color');
const colorSpanEl = document.querySelector('.color');

changeColorBtnEl.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorSpanEl.textContent = bodyEl.style.backgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
