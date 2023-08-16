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
  // window.location.href = "../pages/index.html";
  localStorage.setItem('islogin', 'false');
  localStorage.removeItem('firstname');
  localStorage.removeItem('lastname');
  window.location.href='../pages/index.html';
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