
const counterValueEl = document.querySelector('#value');
let counterValue = Number(0);

const BtnDecrementEl = document.querySelector('button[data-action="decrement"]');
BtnDecrementEl.addEventListener('click', OnBtnDecrement);

function OnBtnDecrement() {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
}

const BtnIncrementEl = document.querySelector('button[data-action="increment"]');
BtnIncrementEl.addEventListener('click', OnBtnIncrement);

function OnBtnIncrement() {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
}

