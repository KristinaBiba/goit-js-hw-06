const inputFontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
let fontSize = inputFontSizeControlEl.value;

inputFontSizeControlEl.addEventListener('input', onSizeControl);

function onSizeControl() {
    fontSize = inputFontSizeControlEl.value+'px';
    textEl.style.fontSize = fontSize;
}