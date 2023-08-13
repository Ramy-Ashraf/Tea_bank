
const form = document.getElementById("form");
const title = document.getElementById("title");
const signupBtn = document.getElementById("signupBtn");
const signinBtn = document.getElementById("signinBtn");
const loginBtn = document.getElementById("loginBtn");

const nameField = document.getElementById("username1");
const emailField = document.getElementById("email1");
const passField = document.getElementById("password1");
const confirmPass = document.getElementById("password2");
const phonevalue = document.getElementById("phone1");
const addressvalue = document.getElementById("address1");

const emailbox = document.getElementById("Email");
const passbox2 = document.getElementById("confirmPass");
const phonebox = document.getElementById("Phone");
const addressbox = document.getElementById("Address");

const lostpass = document.getElementById("lostpass");
let toggle = 0;
let islogin = false;

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.remove("error");
    inputControl.classList.add("success");
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

signupBtn.onclick = function () {
    emailbox.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    passbox2.style.maxHeight = "60px";
    phonebox.style.maxHeight = "60px";
    addressbox.style.maxHeight = "60px";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
    loginBtn.innerHTML = "Done";
    lostpass.innerHTML = "";
    toggle = 0;
}

signinBtn.onclick = function () {
    emailbox.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    passbox2.style.maxHeight = "0";
    phonebox.style.maxHeight = "0";
    addressbox.style.maxHeight = "0";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    loginBtn.innerHTML = "Login In";
    toggle = 1;
    lostpass.innerHTML = "Forgot Password? <a href='#'>Click Here</a>";
    emailField.value = "";
    confirmPass.value = "";
    passField.value = "";
    addressbox.value = "";
}

form.addEventListener("submit", e => {
    e.preventDefault();
    validateInputs();

    if (toggle == 0) {
        if (nameField.parentElement.classList.contains("success") && emailField.parentElement.classList.contains("success") && passField.parentElement.classList.contains("success") && confirmPass.parentElement.classList.contains("success")) {
            islogin = true;
            localStorage.setItem("name", nameField.value);
            localStorage.setItem("islogin", islogin);
            window.location.href = "Home.html";
        }
    } else {
        if (nameField.parentElement.classList.contains("success") && passField.parentElement.classList.contains("success")) {
            islogin = true;
            localStorage.setItem("name", nameField.value);
            localStorage.setItem("islogin", islogin);
            window.location.href = "Home.html";
        }
    }   

});

const validateInputs = () => {

    const nameValue = nameField.value.trim();
    const emailValue = emailField.value.trim();
    const passValue = passField.value.trim();
    const confirmPassValue = confirmPass.value.trim();

    if (nameValue === "") {
        setError(nameField, "Name cannot be blank");
    } else {
        setSuccess(nameField);
    }

    if(toggle == 0){
        if (emailValue === "") {
            setError(emailField, "Email cannot be blank");
        } else if (!isValidEmail(emailValue)) {
            setError(emailField, "Email is not valid");
        } else {
            setSuccess(emailField);
        }
    }

    if (passValue === "") {
        setError(passField, "Password cannot be blank");
    } else if (passValue.length < 8) {
        setError(passField, "Password must be at least 8 characters");

    } else {
        setSuccess(passField);
    }

    if (toggle == 0){
        if (confirmPassValue === "") {
            setError(confirmPass, "Confirm Password cannot be blank");
        } else if (passValue !== confirmPassValue) {
            setError(confirmPass, "Password does not match");
        } else {
            setSuccess(confirmPass);
        }
    }
    if (toggle == 0){
        if (phonevalue.value === "") {
            setError(phonevalue, "Phone cannot be blank");
        }
        else if (isNaN(phonevalue.value)) {
            setError(phonevalue, "Phone must be a number");
        }
        else {
            setSuccess(phonevalue);
        }
    }
    if (toggle == 0){
        if (addressvalue.value === "") {
            setError(addressvalue, "Address cannot be blank");
        } else {
            setSuccess(addressvalue);
        }
    }
}