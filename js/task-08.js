const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmitBtnClick);

function onSubmitBtnClick(event) {
    event.preventDefault();

    if ((event.currentTarget.elements.email.value !== "") && (event.currentTarget.elements.password.value !== "")) {
        const formData = {
            email: event.currentTarget.elements.email.value,
            password: event.currentTarget.elements.password.value,
       }
        console.log(formData);
    } else {
        alert("Заповніть, будь ласка, всі поля.")
    }

    event.currentTarget.reset();
}

