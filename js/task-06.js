const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onValidationInput);

function onValidationInput() {
(inputEl.value.length == inputEl.getAttribute('data-length')) ? inputEl.classList.add('valid') : inputEl.classList.add('invalid');
    }
