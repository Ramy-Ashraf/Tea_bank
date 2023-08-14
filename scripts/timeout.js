const sessionTimeoutDuration = 10000; 
const cardDisplayDelay = 10000; 

let sessionTimeout;
let cardTimeout;

function startSessionTimer() {
    sessionTimeout = setTimeout(showSessionTimeoutCard, sessionTimeoutDuration);
}

function resetSessionTimer() {
    clearTimeout(sessionTimeout);
    clearTimeout(cardTimeout);
    startSessionTimer();
    cardTimeout = setTimeout(showSessionTimeoutCard, cardDisplayDelay);
}

function showSessionTimeoutCard() {
    const card = document.getElementById("sessionTimeoutCard");
    card.style.display = "block";
}

function logout() {
    // Implement your logout logic here
}

window.onload = function () {
    startSessionTimer();
    cardTimeout = setTimeout(showSessionTimeoutCard, cardDisplayDelay);
    document.addEventListener("mousemove", resetSessionTimer);
    document.addEventListener("mousedown", resetSessionTimer);
    document.addEventListener("keypress", resetSessionTimer);
    document.addEventListener("touchstart", resetSessionTimer);
};
