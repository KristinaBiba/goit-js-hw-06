const dataCreateBtnEl = document.querySelector('[data-create]');
const dataDestroyBtnEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');

dataCreateBtnEl.addEventListener('click', onCreateBtnClick);

function onCreateBtnClick() {
  const counter = inputEl.value;
  return createBoxes(counter);
}

const divArrEl = [];

function createBoxes(amount) {
  for (let index = 1; index <= amount; index += 1) {
    let divEl = document.createElement('div');
    const divSize = 20 + 10 * index;
    divEl.style.width = divSize+'px';
    divEl.style.height = divSize+'px';
    divEl.style.backgroundColor = getRandomHexColor();
    
    divArrEl.push(divEl);
  }
  console.log(divArrEl);
  boxesEl.append(...divArrEl);

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

dataDestroyBtnEl.addEventListener('click', () => { boxesEl.innerHTML = ''; inputEl.value = ''; divArrEl.length = 0;});
