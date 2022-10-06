const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onValidationInput);

function onValidationInput() {
  if (inputEl.value.length != inputEl.getAttribute("data-length")) {
    inputEl.classList.add("invalid");
  } else {
    inputEl.classList.contains("invalid")
      ? inputEl.classList.replace("invalid", "valid")
      : inputEl.classList.add("valid");
  }
}
