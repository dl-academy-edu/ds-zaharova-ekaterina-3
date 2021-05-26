function getDataFromForm(form) {
    let data = {};
    form.querySelectorAll('input');
    const inputs = form.querySelectorAll('input');
    for (const input of inputs) {
        switch (input.type) {
            case 'checkbox':
                if (!data[input.name]) {
                    data[input.name] = [];
                }
                if (input.checked) {
                    data[input.name].push(input.value);
                } else if (!input.checked) {
                    data[input.name].length = 0;
                }
                break;
            default:
                data[input.name] = input.value;
        }

    }
    console.log(data)
    return data;
};
function setErrorMessage(input, message) {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('invalid-feedback');
    input.classList.add("is-invalid");
    errorMessage.innerText = message;
    errorMessage.style = 'padding-top: 10px';
    input.insertAdjacentElement('afterend', errorMessage);
    input.addEventListener('input', function handler() {
        input.classList.remove("is-invalid");
        input.removeEventListener('input', handler);
        errorMessage.remove();
    });
};
function checkEmail(email) {
    return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
};
signUp.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = getDataFromForm(signUp);
    let errors = {};
    if (!checkEmail(data.email)) {
        errors.email = 'Введен неверный адрес почты';
        const input = signUp.querySelector('input[name = "email"]');
        setErrorMessage(input, errors.email);
    }
    if (data.password.length < 8) {
        errors.password = 'Пароль должен содержать не менее 8-ми символов';
        const input = signUp.querySelector('input[name = "password"]');
        setErrorMessage(input, errors.password);
    }
    if (data.password !== data.repeatPass) {
        errors.repeatPass = 'Не совпадают пароли';
        const input = signUp.querySelector('input[name = "repeatPass"]');
        setErrorMessage(input, errors.repeatPass);
    }
    if (data.accept[0] !== 'yes') {
        errors.accept = 'Вы должны согласиться с нашими правилами';
        const input = signUp.querySelector('input[name = "accept"]');
        const container = signUp.querySelector('.flex')
        container.style = 'display: flex; flex-direction: column-reverse;'
        setErrorMessage(input, errors.accept);
    }
    console.log(errors)
})
