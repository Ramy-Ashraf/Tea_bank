
const form = document.getElementById("form");
const title = document.getElementById("title");
const signupBtn = document.getElementById("signupBtn");
const signinBtn = document.getElementById("signinBtn");
const loginBtn = document.getElementById("loginBtn");

const fnameField = document.getElementById("firstname1");
const lnameField = document.getElementById("lastname1");
const emailField = document.getElementById("email1");
const passField = document.getElementById("password1");
const confirmPass = document.getElementById("password2");
const idvalue = document.getElementById("idnumber1");

const fnamebox = document.getElementById("fnameField");
const lnamebox = document.getElementById("lnameField");
const emailbox = document.getElementById("Email");
const idbox = document.getElementById("idnumber");
const passbox = document.getElementById("Password");
const passbox2 = document.getElementById("confirmPass");

const lostpass = document.getElementById("lostpass");
let toggle = 0;
let islogin = false;

function ValidateKey(e) {
    var keyCode = e.keyCode || e.which;
    var regex = /^[0-9]$/;
    return regex.test(String.fromCharCode(keyCode));
}

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
    title.innerHTML = "Sign Up";
    fnamebox.style.maxHeight = "60px";
    lnamebox.style.maxHeight = "60px";
    passbox2.style.maxHeight = "60px";
    idbox.style.maxHeight = "60px";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
    loginBtn.innerHTML = "Done";
    lostpass.innerHTML = "";
    toggle = 0;
}

signinBtn.onclick = function () {
    fnamebox.style.maxHeight = "0";
    lnamebox.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    passbox2.style.maxHeight = "0";
    idbox.style.maxHeight = "0";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    loginBtn.innerHTML = "Login In";
    toggle = 1;
    lostpass.innerHTML = "Forgot Password? <a href='#'>Click Here</a>";
    fnameField.value = "";
    lnameField.value = "";
    emailField.value = "";
    idvalue.value = "";
    confirmPass.value = "";
    passField.value = "";
}

form.addEventListener("submit", e => {
    e.preventDefault();
    validateInputs();

    if (toggle == 0) {
        if (fnameField.parentElement.classList.contains("success") && lnameField.parentElement.classList.contains("success") && emailField.parentElement.classList.contains("success") && passField.parentElement.classList.contains("success") && confirmPass.parentElement.classList.contains("success") && idvalue.parentElement.classList.contains("success")) {
            islogin = true;
            localStorage.setItem("firstname", fnameField.value);
            localStorage.setItem("lastname", lnameField.value);
            localStorage.setItem("islogin", islogin);
            window.location.href = "index.html";
        }
    } else {
        if (emailField.parentElement.classList.contains("success") && passField.parentElement.classList.contains("success")) {
            islogin = true;
            // localStorage.setItem("firstname", fnameField.value);
            localStorage.setItem("islogin", islogin);
            window.location.href = "index.html";
        }
    }
});



const validateInputs = () => {

    const fnameValue = fnameField.value.trim();
    const lnameValue = lnameField.value.trim();
    const emailValue = emailField.value.trim();
    const idValue = idvalue.value.trim();
    const passValue = passField.value.trim();
    const confirmPassValue = confirmPass.value.trim();

    if (toggle == 0) {
        if (fnameValue === "") {
            setError(fnameField, "Name cannot be blank");
        } else {
            setSuccess(fnameField);
        }
    }
    if (toggle == 0) {
        if (lnameValue === "") {
            setError(lnameField, "Name cannot be blank");
        } else {
            setSuccess(lnameField);
        }
    }

    if (emailValue === "") {
        setError(emailField, "Email cannot be blank");
    } else if (!isValidEmail(emailValue)) {
        setError(emailField, "Email is not valid");
    } else {
        setSuccess(emailField);
    }

    if (passValue === "") {
        setError(passField, "Password cannot be blank");
    } else if (passValue.length < 8) {
        setError(passField, "Password must be at least 8 characters");

    } else {
        setSuccess(passField);
    }

    if (toggle == 0) {
        if (confirmPassValue === "") {
            setError(confirmPass, "Confirm Password cannot be blank");
        } else if (passValue !== confirmPassValue) {
            setError(confirmPass, "Password does not match");
        } else {
            setSuccess(confirmPass);
        }
    }
    if (toggle == 0) {
        if (idvalue.value === "") {
            setError(idvalue, "id cannot be blank");
        }
        else if (isNaN(idvalue.value)) {
            setError(idvalue, "id must be a number");
        }
        else {
            setSuccess(idvalue);
        }
    }
}