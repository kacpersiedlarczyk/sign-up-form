const signUp = document.querySelector(".sign-up-form");
const fristName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

signUp.addEventListener("submit", (event) => {
    handleSubmit(event);
});

fristName.addEventListener("input", (event) => {
    handleInvalid(fristName);
});

lastName.addEventListener("input", (event) => {
    handleInvalid(lastName);
});

email.addEventListener("input", (event) => {
    handleInvalid(email);
});

password.addEventListener("input", (event) => {
    checkPassword();
    matchPassword();
});

confirmPassword.addEventListener("input", (event) => {
    matchPassword();
});

function matchPassword() {
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    if (passwordValue !== confirmPasswordValue || confirmPasswordValue === "") {
        handleError(confirmPassword, "Passwords must match");
    } else {
        handleError(confirmPassword, "");
    }
}

function checkPassword() {
    const hasNumber = new RegExp(/\d/);
    const passwordValue = password.value;

    if (passwordValue === "" || passwordValue === null) {
        handleError(password, "Password connot be empty");
    } else if (passwordValue.length < 8) {
        handleError(password, "Minimum 8 characters");
    } else if (!hasNumber.test(passwordValue)) {
        handleError(password, "At least one number");
    } else {
        handleError(password, "");
    }
}

function handleError(element, messege) {
    const errorMessage = element.nextElementSibling;

    if (messege !== "") {
        element.classList.add("invalid");
        element.classList.remove("valid");
    } else {
        element.classList.add("valid");
        element.classList.remove("invalid");
    }

    errorMessage.innerText = messege;
}

function handleInvalid(element) {
    if (!element.checkValidity()) {
        element.classList.add("invalid");
        element.classList.remove("valid");
    } else {
        element.classList.add("valid");
        element.classList.remove("invalid");
    }
}

function handleSubmit(event) {
    const passwordRegex = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    if (passwordValue !== confirmPasswordValue) {
        event.preventDefault();
    } else if (!passwordRegex.test(passwordValue)) {
        event.preventDefault();
    }
};