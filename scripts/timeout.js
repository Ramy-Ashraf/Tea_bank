const sessionTimeoutDuration = 300000;
const cardDisplayDelay = 300000;

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
  localStorage.setItem('islogin', 'false');
  localStorage.removeItem('firstname');
  localStorage.removeItem('lastname');
  window.location.reload();
}

window.onload = function () {
  if (localStorage.getItem('islogin') === 'true') {
    startSessionTimer();
    cardTimeout = setTimeout(showSessionTimeoutCard, cardDisplayDelay);
    document.addEventListener("mousemove", resetSessionTimer);
    document.addEventListener("mousedown", resetSessionTimer);
    document.addEventListener("keypress", resetSessionTimer);
    document.addEventListener("touchstart", resetSessionTimer);
  }
};